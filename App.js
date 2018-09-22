import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchInput from "./components/SearchInput/SearchInput";
import FoodList from "./components/FoodList/FoodList";
import PopUpAdd from "./components/PopUpAdd/PopUpAdd.js";
import Login from "./components/Login/Login.js";
import {ActionButton, getTheme, ThemeContext} from 'react-native-material-ui';
import colors from "./styles/colors.js";


const uiTheme = {
    palette: {
        primaryColor: "#548687",
        secondaryTextColor: "#000000",
        accentColor: "#56445D",

    },
    toolbar: {
        container: {
            height: 50,
        },
    },
    card: {
        container: {
            backgroundColor: colors.cardColor,
            padding: 5,
        },

    },

    divider: {
        container: {
            height: 2,
            backgroundColor: colors.dividerColor,
        }
    },


    listItem: {
        container: {
            backgroundColor: colors.listColor,
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
            sum: 0,
            loggedIn: false,
    }
    }


    handleAddedFood = (foodlist) => {
        this.setState({
            sum: this.state.sum + foodlist.price,
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
    loggedIn =() =>{
        alert("You successfully logged in!");
        this.setState({
            loggedIn: true,
        })
    }

    render() {

        if (this.state.loggedIn) {
            return <View style={{...StyleSheet.absoluteFillObject, backgroundColor: colors.bgAll}}>
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
        else {
            return <Login loggedIn={()=>this.loggedIn()}/>

        }

    }
}

export default app;
