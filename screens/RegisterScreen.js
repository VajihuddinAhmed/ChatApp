import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            let user = userCredential.user;
            user.updateProfile({
                displayName: name,
                photoURL: imageUrl ? imageUrl : "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
              }).then(() => {
                // Update successful
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });  
            // ...
        })
        .catch((error) => {
            let errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
    }

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Enter your Name" 
                label="Name" 
                leftIcon={{ type: 'material', name: 'badge'}} 
                value={name} 
                onChangeText={text => setName(text)} 
            />
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
            <Input 
                placeholder="Enter your Image Url" 
                label="Profile Picture" 
                leftIcon={{ type: 'material', name: 'face'}} 
                value={imageUrl} 
                onChangeText={text => setImageUrl(text)} 
                autoCapitalize="none"
            />
            <Button title="Register" style={styles.button} onPress={register} />
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

export default RegisterScreen;