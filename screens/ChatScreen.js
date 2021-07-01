import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { auth } from "../firebase";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";


const ChatScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 25 }}>
                    <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 25 }} onPress={signOut}>
                    <AntDesign name="logout" size={24} color="black" />
                </TouchableOpacity>
                
            )
        })
    })
    const signOut = () => {
        auth.signOut().then(() => {
            // Sign-out successful.
            navigation.replace('Login')
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <View>
            <Text>Chat screen</Text>
        </View>
    )
}

export default ChatScreen;