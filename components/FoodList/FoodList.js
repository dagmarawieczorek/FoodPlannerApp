import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native'


class FoodList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sum: 0
        };
    }

    render() {

        return (<View style={styles.container}>
                <Text style={styles.h2text}>
                    Lista zakupowa
                </Text>

                <View style={styles.flatlist}>
                    <FlatList
                        windowSize={21}
                        data={this.props.list}
                        renderItem={({item}) => (
                            <View style={styles.flatview}>
                                <Text style={styles.name}>{item.name} | {item.category}  </Text>

                                <Text style={styles.price}>{item.price}</Text>
                            </View>
                        )}

                        keyExtractor={item => item.id + ""}
                    />
                </View>
                <Text>{this.state.sum}</Text>
            </View>
        );
    }
}

export default FoodList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    h2text: {
        marginTop: 2,
        fontFamily: 'Helvetica',
        fontSize: 25,
        fontWeight: 'bold',
    },

    flatview: {
        paddingTop: 30,
        borderRadius: 2,
        flexDirection: "row",
        alignItems: "center",
    },

    flatlist: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
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


