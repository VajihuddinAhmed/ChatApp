import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Enter your Email" 
                label="Email" 
                leftIcon={{ type: 'material', name: 'email'}} 
                value={email} 
                onChangeText={text => setEmail(text)} 
            />
            <Input 
                placeholder="Enter your Password" 
                label="Password" 
                leftIcon={{ type: 'material', name: 'lock'}} 
                value={password} 
                onChangeText={text => setPassword(text)} 
                secureTextEntry
            />
            <Button title="Sign In" style={styles.button} />
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