import React, {Component} from 'react';
import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    topMenu:{
        zIndex: 5,
        backgroundColor: '#F5FCFF',
        flex: 1,
        padding: 50,
        paddingBottom:60,
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

    popUpBox:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    insideModalBox:{
        width: 300,
        height: 300,
        backgroundColor: "aliceblue",
        borderRadius: 20,
    }
});

export default  styles;