import Autocomplete from 'react-native-autocomplete-input';
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import realm from '../../databases/allSchemas';


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
        // console.log(this.state.newItems);
        return (
            <View style={styles.container}>
                <View style={styles.topMenu}>
                    <Autocomplete
                        autoCapitalize="none"
                        autoCorrect={false}
                        containerStyle={styles.autocompleteContainer}
                        data={foods.length === 1 && comp(query, foods[0].name) ? [] : foods}
                        defaultValue={query}
                        onChangeText={text => this.setState({query: text})}
                        renderItem={({id, name, category, subcategory, price}) => (
                            <TouchableOpacity
                                onPress={() => this.handleAddedFood(name, id, category, subcategory, price)}
                            >
                                <Text style={styles.itemText}>
                                    {name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    topMenu: {
        zIndex: 5,
        backgroundColor: '#F5FCFF',
        flex: 1,
        padding: 50,
        paddingBottom: 60,
        justifyContent: "space-between",

    },

    container: {
        zIndex: 5,
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
