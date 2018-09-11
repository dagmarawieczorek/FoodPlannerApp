import Autocomplete from 'react-native-autocomplete-input';
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, TextInput} from 'react-native';
import {insertNewRecipe, insertNewIngredient, findIngredient} from "../databases/allSchemas";
import  realm from "../databases/allSchemas";

const Realm = require('realm');

const foodList = "https://api.myjson.com/bins/1bnz0w"
export default class First extends Component {

    constructor(props) {
        super(props);
        this.state = { realm: null ,
            tanDogs:null};
    }


        // insertNewIngredient({
        //     "id":1,
        //     "name": "Banany 1kg",
        //     "category": "fruits and vegetables",
        //     "subcategory": "fruits",
        //     "price":5,
        // })



    componentDidMount(){
        Realm.open({
            schema: [{name: 'Dog', properties: {name: 'string'}}]
        }).then(realm => {
            let info = realm
                ? 'Number of dogs in this Realm: ' + realm.objects('Dog').length+
                : 'Loading...';
            console.log(info);
            this.setState({
                dogInfo: info
            })


            this.setState({realm});
        });

        //
        // let tanDogs={};
        // if(this.state.realm){
        //   let dogs=  this.state.realm.objects('Dog');
        //    this.setState({
        //        tanDogs : dogs.filtered('color = "brown" ')
        //    })
        // } else{
        //     this.setState({
        //         tanDogs : "nie ma"
        //     })
        // }



    }

    render() {

        // console.log(this.state.tanDogs);
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Text >
                    {this.state.dogInfo}

                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 500,
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
