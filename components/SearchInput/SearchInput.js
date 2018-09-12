import Autocomplete from 'react-native-autocomplete-input';
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import realm from '../../databases/allSchemas';

const API = 'https://api.myjson.com/bins/1bnz0w';

class SearchInput extends Component {
    static renderfood(food) {
        const {name, category, price, id, subcategory} = food;

        return (
            <View>
                <Text style={styles.nameText}> {name}</Text>
                <Text style={styles.directorText}>({category})</Text>
                <Text style={styles.openingText}>{price}</Text>
            </View>
        );
    }

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

    render() {
        const {query} = this.state;
        const foods = this.findfood(query);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

        console.log(this.state.query);
        // console.log(this.state.newItems);
        return (
            <View style={styles.container}>
                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    data={foods.length === 1 && comp(query, foods[0].name) ? [] : foods}
                    defaultValue={query}
                    onChangeText={text => this.setState({query: text})}
                    placeholder="Enter food name"
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
                <View style={styles.descriptionContainer}>
                    {foods.length > 0 ? (
                        SearchInput.renderfood(foods[0])
                    ) : (
                        <Text style={styles.infoText}>
                            Enter food
                        </Text>
                    )}
                </View>
            </View>
        );
    }
}

const
    styles = StyleSheet.create({
        container: {

            zIndex: 5,
            backgroundColor: '#F5FCFF',
            flex: 1,
            height: 30,
            padding: 70,
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
        descriptionContainer: {
            // `backgroundColor` needs to be set otherwise the
            // autocomplete input will disappear on text input.
            backgroundColor: '#F5FCFF',
            marginTop: 25

        },
        infoText: {
            textAlign: 'center'

        },
        nameText: {
            fontSize: 18,
            fontWeight: '500',
            marginBottom: 10,
            marginTop: 10,
            textAlign: 'center'
        },
        directorText: {
            color: 'grey',
            fontSize: 12,
            marginBottom: 10,
            textAlign: 'center'
        },
        openingText: {
            textAlign: 'center'
        }
    });

export default SearchInput;
