import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native'


class FoodList extends Component {

    render() {

        let {list} = this.props;
        let sumPrice = 0;

        if (list !== undefined) {
            for (let i = 0; i < list.length; i++) {
                sumPrice += list[i].price
            }
        }

        return (

            <View style={styles.container}>
                <View style={styles.flatview}>
                    <Text style={styles.h2text}>
                        Lista zakupów
                    </Text>
                </View>
                <View style={styles.flatlist}>
                    <FlatList
                        windowSize={21}
                        data={this.props.list}
                        renderItem={({item}) => (
                            <View style={styles.flatview}>
                                <Text style={styles.name}>{item.name} | {item.category}  </Text>

                                <Text style={styles.price}>{item.price}zł</Text>
                            </View>
                        )}

                        keyExtractor={item => item.id + ""}
                    />
                </View>
                <View style={styles.flatview}>
                    <Text style={styles.h2text}>Suma zakupów : {sumPrice}zł</Text>
                </View>
            </View>
        );
    }
}

export default FoodList;

const styles = StyleSheet.create({
    container: {
        width: 500,
        backgroundColor: '#F5FCFF',

        top: 0
    },

    h2text: {
        marginTop: 2,
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: 'bold',
    },

    flatview: {
        paddingTop: 10,
        borderRadius: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
    },

    flatlist: {
        flexDirection: "row",
        alignItems: "center",

        width: "auto",
        height: "60%",
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 16
    },
    price: {
        fontSize: 16,
        textAlign: "center",
        color: "white",
        backgroundColor: "gray",
        flexDirection: "row",
        width: 50
    }

});


