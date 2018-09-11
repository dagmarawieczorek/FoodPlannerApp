import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native'



class FoodList extends Component {


    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.h2text} >
                    Lista zakupowa
                </Text>
                <FlatList
                    windowSize={21}
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
        bottom:10,
        backgroundColor: '#F5FCFF',
    },
    h2text: {
        marginTop: 30,
        fontFamily: 'Helvetica',
        fontSize: 25,
        fontWeight: 'bold',
    },

    flatview: {
        paddingTop: 30,
        borderRadius: 2,
        flexDirection: "row",
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 16
    },
    price: {
        fontSize: 16,
        backgroundColor: "gray",
        flexDirection: "row",
    }

});


