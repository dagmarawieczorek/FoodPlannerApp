import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchInput from "./components/SearchInput/SearchInput";
import FoodList from "./components/FoodList/FoodList";
import insertNewIngredient from "./databases/allSchemas.js";

let app = class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newList:[],
        }
    }

    handleAddedFood = (foodlist) => {
    this.setState({
        newList:[...this.state.newList, foodlist]
    })
    };


    render() {
        console.log(this.state.newList)
        return <View>
            <Text>Dodaj produkty</Text>
            <SearchInput
                newFoodAdded={this.handleAddedFood}/>
            <FoodList list={this.state.newList}/>


        </View>;
    }
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    }
})

export default app;