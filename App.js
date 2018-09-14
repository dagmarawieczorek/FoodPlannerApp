import React, {Component} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import SearchInput from "./components/SearchInput/SearchInput";
import FoodList from "./components/FoodList/FoodList";
import PopUpAdd from "./components/PopUpAdd/PopUpAdd.js";
import {ActionButton, getTheme, ThemeContext} from 'react-native-material-ui';
import styles from "./styles/styles.js";
import colors from "./styles/colors.js";


console.log(colors.itemsBgColor);

const uiTheme = {
    palette: {
        primaryColor: "#285943",
        secondaryTextColor: "#000000",
        accentColor: "#8CD790",

    },
    toolbar: {
        container: {
            height: 50,
        },
    },
    card: {
        container: {
            backgroundColor: colors.cardColor,
        }
    },

    divider: {
        container: {
            height: 2,
            backgroundColor: colors.dividerColor,
        }
    },


    listItem: {
        container: {
            backgroundColor: colors.itemsBgColor,
        }
    }


};

let app = class Main extends Component {
    render() {
        return (
            <ThemeContext.Provider value={getTheme(uiTheme)}>
                <App/>
            </ThemeContext.Provider>
        );
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newList: [],
            modalVisible: false,
            newItemToRealm: "",
            sum:0,
        }
    }


    handleAddedFood = (foodlist) => {
        this.setState({
            sum: this.state.sum+foodlist.price,
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
        return <View   style={{...StyleSheet.absoluteFillObject}}>
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
        </View>;

    }
}

export default app;
