import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {Calendar} from 'react-native-calendars';
import colors from "../../styles/colors";
import {ListItem, Toolbar, IconToggle, ActionButton} from "react-native-material-ui";

class CalendarScreen extends Component {

    render() {
        return (
            <View behavior="padding" style={{backgroundColor: colors.bgColor, flex: 1}}>
                <Toolbar
                    leftElement="add-shopping-cart"
                    centerElement="Calendar"

                />
                <Calendar/>

                <ActionButton
                    onPress={() =>   this.props.navigation.navigate("ShoppingList")}/>
                <Button
                    title=""
                    onPress={() =>
                        this.props.navigation.navigate("ShoppingList")
                    }
                />
            </View>)
    }
}

export default CalendarScreen;