import React, {Component} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import realm from '../../databases/allSchemas';
import {ListItem, Toolbar, IconToggle} from "react-native-material-ui";


const API = 'https://api.myjson.com/bins/1bnz0w';

class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foods: [],
            query: '',
            newItems: [],
        };
    }

    componentDidMount() {
        if (realm.objects("Ingredient").length === 0) {
            fetch(`${API}`).then(res => res.json()).then((foods) => {
                console.log(foods);
                realm.write(() => {
                    for (let i = 0; i < foods.length; i++) {
                        realm.create("Ingredient", foods[i]);
                        console.log("Saving " + foods[i].name);
                    }
                });
            });
        }
    }

    findfood() {
        if (this.state.query === '') {
            return [];
        }

        let realmFoods = realm.objects("Ingredient").filtered(`name BEGINSWITH[c] '${this.state.query}'`);
        return Array.from(realmFoods);
    }

    handleAddedFood = (name, id, category, subcategory, price) => {
        this.setState({
            query: name,
        });

        if (typeof this.props.newFoodAdded === 'function') {
            this.setState({
                query: name,
            });

            this.props.newFoodAdded({
                id,
                name,
                category,
                subcategory,
                price
            });
        }
    }



    onPressAddFood() {
        console.log("klikklik")
    }

    render() {
        const {query} = this.state;
        const foods = this.findfood(query);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();


        console.log(this.state.query);
        // console.log(this.statea.newItems);
        return (
            <View>
                <Toolbar
                    leftElement="add-shopping-cart"
                    centerElement="Dodaj składniki"
                    searchable={{
                        autoFocus: true,
                        placeholder: "add items",
                        onChangeText: text => this.setState({query: text}),
                    }}
                />
                <FlatList
                    windowSize={21}
                    data={foods}
                    renderItem={({item}) => (
                        <ListItem
                            divider
                            centerElement={{
                                primaryText: `${item.name}`,
                            }}
                            onPress={() => {
                                this.handleAddedFood(item.name, item.id, item.category, item.subcategory, item.price);
                            }}>
                        </ListItem>
                    )}
                    keyExtractor={item => item.id + ""}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topMenu: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        padding: 50,
        paddingBottom: 60,
        justifyContent: "space-between",

    },

    container: {
        backgroundColor: '#F5FCFF',

    },

    autocompleteContainer: {
        flex: 1,
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        zIndex: 4,

    },
    itemText: {
        flexDirection: "row",
        fontSize: 15,
        margin: 2
    },
});

export default SearchInput;
