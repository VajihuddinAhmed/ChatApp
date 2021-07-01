import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage)
        });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.replace('Chat')
            } else {
            // User is signed out
            }
          });
          return unsubscribe
    }, [])

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Enter your Email" 
                label="Email" 
                leftIcon={{ type: 'material', name: 'email'}} 
                value={email} 
                onChangeText={text => setEmail(text)} 
                autoCapitalize="none"
            />
            <Input 
                placeholder="Enter your Password" 
                label="Password" 
                leftIcon={{ type: 'material', name: 'lock'}} 
                value={password} 
                onChangeText={text => setPassword(text)} 
                secureTextEntry
                autoCapitalize="none"
            />
            <Button title="Sign In" style={styles.button} onPress={signIn} />
            <Button title="Register" style={styles.button} onPress={() => navigation.navigate("Register")} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})

export default LoginScreen;