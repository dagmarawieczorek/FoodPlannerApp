import React, {Component} from 'react';
import FoodListScreen from "../FoodListScreen/FoodListScreen.js";
import CalendarScreen from "../Calendar/Calendar";
import Recipes from "../Recipes/RecipesScreen";
import {createBottomTabNavigator,} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../../styles/colors.js";
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


const App = createBottomTabNavigator({
        Home: CalendarScreen,
        ShoppingList: FoodListScreen,
        Recipes: Recipes,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `md-calendar`;
                } else if (routeName === 'ShoppingList') {
                    iconName = `md-clipboard`;
                }

                else if (routeName === 'Recipes') {
                    iconName = `md-add-circle`;
                }

                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: colors.bgColor,
            inactiveTintColor: colors.cardColor,
        },
    });

class Main extends Component {
    render() {
        return (<App/>)
    };
}

export default Main;
