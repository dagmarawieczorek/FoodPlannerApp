import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "../../styles/styles";


class Login extends Component {

    handleLoggingIn=()=>{
        this.props.loggedIn();
    };
    render() {
        return (
            <View styles={{padding: 20}}>

                <TextInput
                    placeholder="username or email"
                    returnKeyType="next"
                    keyboardType="email-address"
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}/>

                <TextInput
                    placeholder="password"
                    secureTextEntry
                    returnKeyType="go"

                    ref={(input) => this.passwordInput = input}
                    style={styles.input}/>
                <TouchableOpacity style={styles.loginButton}
                                  onPress ={() => this.handleLoggingIn()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

export default Login;