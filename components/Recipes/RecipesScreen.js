import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "../../styles/styles";
import colors from "../../styles/colors";
import LoginForm from "../Login/LoginForm";


class RecipesScreen extends Component {

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

                </KeyboardAvoidingView>

            );
        }


    }
}

export default RecipesScreen;