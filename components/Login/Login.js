import React, {Component} from 'react';
import {Image, Text, View, KeyboardAvoidingView} from 'react-native';
import colors from "../../styles/colors";
import styles from "../../styles/styles";

import LoginForm from "./LoginForm.js";
import PopUpInput from "../PopUpAdd/PopUpInput";


class Login extends Component {
    handleLoggingIn=()=>{
        this.props.loggedIn(true);
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={{backgroundColor: colors.bgColor, flex: 1}}>
                <View style={styles.logoContainter}>
                    <Image
                        style={{width: 150, height: 150}}
                        source={require('../../images/login/groceries.png')}
                    />
                    <Text style={styles.header}>log in to start</Text>
                </View>
                <View style={styles.formContainter}>
                    <LoginForm   loggedIn={() => this.handleLoggingIn()}/>
                </View>
            </KeyboardAvoidingView>

        );
    }
}

export default Login;