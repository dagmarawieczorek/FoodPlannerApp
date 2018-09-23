import React, {Component} from 'react';
import FoodListScreen from "../FoodListScreen/FoodListScreen.js";
import Calendar from "../Calendar/Calendar.js";
import {
    createStackNavigator,
} from 'react-navigation';


const App = createStackNavigator({
    Home: { screen: FoodListScreen },
    Calendar: {screen: Calendar},

});

 class Main extends Component {
     render() {
         return (<App/>)
     };
 }
export default Main;
