import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchInput from "./components/SearchInput/SearchInput";
import FoodList from "./components/FoodList/FoodList";
import PopUpAdd from "./components/PopUpAdd/PopUpAdd.js";
import {ActionButton, COLOR, getTheme, ThemeContext} from 'react-native-material-ui';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
    palette: {
        primaryColor: COLOR.lime500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
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
        }
    }

    handleAddedFood = (foodlist) => {
        this.setState({
            newList: [...this.state.newList, foodlist]
        })
    };

    handleButtonAdd = (isclicked) => {
        console.log("IS CLICKED!! " + isclicked);
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
        return <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            top: 0
        }}>
            <PopUpAdd plusClicked={this.handleButtonAdd}
                      visibility={this.state.modalVisible}
                      newItem={this.handleNewText}
            />
            <View>
                <SearchInput
                    newFoodAdded={this.handleAddedFood}/>
                <FoodList list={this.state.newList}
                          style={{flex: 1}}/>
            </View>

            <ActionButton
                onPress={() => this.handleButtonAdd(true)}/>
        </View>;

    }
}

export default app;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
})