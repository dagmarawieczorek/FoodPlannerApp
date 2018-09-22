import React from 'react';
import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    topMenu: {
        zIndex: 5,
        backgroundColor: '#F5FCFF',
        flex: 1,
        flexDirection: "row",
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
        color: "white",
        flexDirection: "row",
        fontSize: 18,
        margin: 2,
    },

    popUpBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray', borderWidth: 5,
    },


    popUpInputBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',

    },

    input: {
        height: 40,
backgroundColor: "rgba(255,255,255,0.5)",
        marginBottom: 10,
        color: "#FFF",
        paddingHorizontal: 10

    },
    inputSmall: {
        height: 40,
        width: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
    },

    logoContainter:{
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
    },
    formContainter:{
    },

});

export default styles;