import React, {Component} from 'react';
import FoodListScreen from "../FoodListScreen/FoodListScreen.js";
import {
    createStackNavigator,
} from 'react-navigation';
import CalendarScreen from "../Calendar/Calendar";


const App = createStackNavigator({
    Home: { screen:CalendarScreen},
    ShoppingList: { screen: FoodListScreen },

});

 class Main extends Component {
     render() {
         return (<App/>)
     };
 }
export default Main;
