import React, {Component} from 'react';
import FoodListScreen from "../FoodListScreen/FoodListScreen.js";
import {createBottomTabNavigator,} from 'react-navigation';
import CalendarScreen from "../Calendar/Calendar";
import Ionicons from 'react-native-vector-icons/Ionicons';



const App = createBottomTabNavigator({
        Home: CalendarScreen,
        ShoppingList: FoodListScreen,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'ShoppingList') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    });

class Main extends Component {
    render() {
        return (<App/>)
    };
}

export default Main;
