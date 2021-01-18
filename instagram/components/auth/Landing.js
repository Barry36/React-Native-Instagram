import React from 'react'
import { Button, View } from 'react-native'
export default function Landing({ navigation }) {
    return (
        <View style = {{ flex:1, justifyConrtent:'center'}}>
            <Button
                title="Register"
                onPress ={() => navigation.nagivate("Register")}/>

            <Button
                title="Login"
                onPress ={() => navigation.nagivate("Login")}/>
        </View>
    )
}
