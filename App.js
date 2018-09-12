import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchInput from "./components/SearchInput/SearchInput";
import FoodList from "./components/FoodList/FoodList";
import AddFoodBtn from "./components/buttonAddFood/buttonAddFood.js";
import PopUpAdd from "./components/PopUpAdd/PopUpAdd.js";

let app = class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newList: [],
            modalVisible: false,
            newItemToRealm:"",
        }
    }

    handleAddedFood = (foodlist) => {
        this.setState({
            newList: [...this.state.newList, foodlist]
        })
    };

    handleButtonAdd = (isclicked) => {
        this.setState({
            modalVisible: isclicked,
        })
    };

    handleNewText = (text) => {
        this.setState({
            newItemToRealm: text,
        })
    };

    render() {
        return <View>
            <PopUpAdd plusClicked={this.handleButtonAdd}
                visibility={this.state.modalVisible}
                newItem={this.handleNewText}
            />
            <View style={styles.topMenu}>
                <AddFoodBtn plusClicked={this.handleButtonAdd}/>
                <SearchInput
                    newFoodAdded={this.handleAddedFood}/>
            </View>
            <Text>{this.state.newItemToRealm}</Text>
            <FoodList list={this.state.newList}/>
        </View>;

    }
}


export default app;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },

    topMenu: {
        // zIndex: 5,
        // flex: 1,
        // // flexDirection: "row",
        // left: 0,
        // right: 0,
    },
})