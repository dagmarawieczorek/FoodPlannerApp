import {StyleSheet, View} from "react-native";
import PopUpAdd from "../PopUpAdd/PopUpAdd";
import SearchInput from "./SearchInput";
import FoodList from "./FoodList";
import {ActionButton, getTheme, ThemeContext} from "react-native-material-ui";
import React, {Component} from "react";
import colors from "../../styles/colors.js";



class FoodListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newList: [],
            modalVisible: false,
            newItemToRealm: "",
            sum: 0,
            loggedIn: false,
        }
    }

    handleAddedFood = (item) => {
        let itemAlreadyInList = this.state.newList.find(value => value.id === item.id);
        if (itemAlreadyInList === undefined) {
            this.setState({
                sum: this.state.sum + item.price,
                newList: [...this.state.newList, item]
            })
        } else {
           item.quantity =item.quantity+ 1;
            this.setState({
                sum: this.state.sum + item.price,})
            console.log(item.quantity)
        }

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
        return (
                <View style={{...StyleSheet.absoluteFillObject, backgroundColor: colors.bgAll}}>
                    <PopUpAdd plusClicked={this.handleButtonAdd}
                              visibility={this.state.modalVisible}
                              newItem={this.handleNewText}
                    />
                    <View>
                        <SearchInput
                            newFoodAdded={this.handleAddedFood}/>
                        <FoodList list={this.state.newList}
                                  sum={this.state.sum}
                                  style={{flex: 1}}/>
                    </View>

                    <ActionButton
                        onPress={() => this.handleButtonAdd(true)}/>
                </View>

        );
    }

}

export default FoodListScreen;

