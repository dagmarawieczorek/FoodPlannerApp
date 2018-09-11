import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native'



class FoodList extends Component {


    render() {

        return (
            <View style={{position:"absolute", zIndex:1, top:40}}>
                <Text style={styles.h2text} >
                    Lista zakaupówa
                </Text>
                <FlatList

                    data={this.props.list}
                    renderItem={({item}) =>(
                        <View style={styles.flatview}>
                            <Text style={styles.name}>{item.name} | {item.category}  </Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                    )}

                    keyExtractor={item => item.id+""}

                />
            </View>
        );
    }
}
export default FoodList;

const styles = StyleSheet.create({
    container: {
            paddingTop:60,
        height: 40,
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    h2text: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 25,
        fontWeight: 'bold',
    },
    flatview: {
        flex: 1,
        paddingTop: 30,
        borderRadius: 2,
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 16
    },
    price: {
        textAlign: "center",
        fontSize: 16,
        backgroundColor: "gray",
        width: 20,

    }

});


