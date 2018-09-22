import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import colors from "../../styles/colors";
import styles from "../../styles/styles";

import LoginForm from "./LoginForm.js";


class Login extends Component {


    render() {
        return (
            <View style={{backgroundColor: colors.dividerColor, flex: 1}}>

                <View style={styles.logoContainter}>
                    <Image
                        style={{width: 100, height: 100}}
                        source={require('../../images/login/groceries.png')}
                    />
                    <Text>Login to start</Text>
                    <View style={styles.formContainter}>
                        <LoginForm/>
                    </View>
                </View>
            </View>
        );
    }
}

export default Login;