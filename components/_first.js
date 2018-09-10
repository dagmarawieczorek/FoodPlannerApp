import Autocomplete from 'react-native-autocomplete-input';
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, FlatList} from 'react-native';
import {insertNewRecipe, insertNewIngredient, findIngredient} from "../databases/allSchemas";
import  realm from "../databases/allSchemas";


const foodList = "https://api.myjson.com/bins/1bnz0w"
export default class First extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            query: '',
            ingredients:[]
        }

        // insertNewIngredient({
        //     "id":1,
        //     "name": "Banany 1kg",
        //     "category": "fruits and vegetables",
        //     "subcategory": "fruits",
        //     "price":5,
        // })


    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/1bnz0w"')
            .then(response => response.json())
            .then(data => this.setState({data: data}));
    }

    findFood(query) {
        if (query === '') {
            return [];
        }

        const {data} = this.state;
        const regex = new RegExp(`${query.trim()}`, 'i');
        return data.filter(food => food.name.search(regex) >= 0);
    }

    render() {

        const {query} = this.state;
        const films = this.findFood(query);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        let banany=findIngredient("Banany 1kg");

        return this.state.data != null ?
            <View style={styles.container}>

                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    data={films.length === 1 && comp(query, films[0].name) ? [] : films}
                    defaultValue={query}
                    onChangeText={text => this.setState({query: text})}
                    placeholder="Enter food name"
                    renderItem={({name, category}) => (
                        <TouchableOpacity onPress={() => this.setState({query: name})}>
                            <Text style={styles.itemText}>
                                {name} ({category})
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            : <View style={styles.container}>
                <Text style={styles.loadingText}>LOADING...</Text>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
            ;
    }


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        paddingTop: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    },
    itemText: {
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
    titleText: {
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
    },

    loadingText:{
        fontSize: 20,

    }
});
