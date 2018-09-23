import React, {Component} from 'react';
import {KeyboardAvoidingView, Text} from 'react-native';
import colors from "../../styles/colors";


class Calendar extends Component {


    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={{backgroundColor: colors.bgColor, flex: 1}}>
                <Text>Kalendarx</Text>
            </KeyboardAvoidingView>

        );
    }
}

export default Calendar;