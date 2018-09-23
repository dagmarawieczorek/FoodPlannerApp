import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "../../styles/styles";
import colors from "../../styles/colors";
import LoginForm from "../Login/LoginForm";
import {Toolbar} from "react-native-material-ui";


class RecipesScreen extends Component {

    render() {
        return (
                <KeyboardAvoidingView behavior="padding" style={{backgroundColor: colors.bgColor, flex: 1}}>
                    <Toolbar
                        leftElement="add-shopping-cart"
                        centerElement="Recipes"
                        searchable={{
                            autoFocus: true,
                            placeholder: "search for recipe",
                            onChangeText: text => this.setState({query: text}),
                        }}
                    />
                    <View style={styles.logoContainter}>
                        <Image
                            style={{width: 150, height: 150}}
                            source={require('../../images/login/groceries.png')}
                        />
                        <Text style={styles.header}>Add new recipes</Text>
                    </View>

                </KeyboardAvoidingView>

            );
        }


    }

export default RecipesScreen;