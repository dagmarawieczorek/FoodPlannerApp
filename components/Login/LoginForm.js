import React, {Component} from 'react';
import {Image, Text, View, TextInput, TouchableOpacity} from 'react-native';
import colors from "../../styles/colors";
import styles from "../../styles/styles";

import LoginForm from "./LoginForm.js";


class Login extends Component {


    render() {
        return (
            <View styles={{padding: 20}}>

                 <TextInput
                 placeholder="username or email"
                 placeholderTextColor="rgba(255,255,255,0.5)"
                 returnKeyType="next"
                 style={styles.input}/>


                <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                   secureTextEntry
                    style={styles.input}/>
                <TouchableOpacity>
                    <Text>Login</Text>
                </TouchableOpacity>
                </View>

        );
    }
}

export default Login;