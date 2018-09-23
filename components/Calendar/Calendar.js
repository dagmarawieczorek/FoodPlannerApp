import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {Calendar} from 'react-native-calendars';
import colors from "../../styles/colors";


class CalendarScreen extends Component {

    render() {
        return (
            <View behavior="padding" style={{backgroundColor: colors.bgColor, flex: 1}}>
                <Calendar/>
                <Button
                    title="Go to food list"
                    onPress={() =>
                        this.props.navigation.navigate("ShoppingList")
                    }
                />
            </View>
        );
    }
}

export default CalendarScreen;