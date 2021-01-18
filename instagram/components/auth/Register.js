import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
 
export class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder = "name" 
                    onChangeText = {(name) => this.setState({ name: name })}  
                />

                <TextInput
                    placeholder = "email" 
                    onChangeText = {(email) => this.setState({ email })}  
                />

                <TextInput
                    placeholder = "password" 
                    onChangeText = {(password => this.setState({password })}  
                />  
            </View>
        )
    }
}

export default Register
