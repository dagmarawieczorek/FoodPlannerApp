import React, {Component} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native'
import {Card, Divider, Icon, ListItem} from 'react-native-material-ui';
import styles from "../../styles/styles.js";
import colors from "../../styles/colors.js";
import categories from "../../databases/categories";


class FoodList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            sumPrice: 0
        };
    }

    renderHeader = () => {
        return (
            <Text style={styles.itemText}>
                Lista zakupów
            </Text>)
    }
    renderFooter = () => {


        return (<View>
            <Divider/>
            <Card>
                <Text style={styles.itemText}>
                    <Icon name="attach-money"/>
                    Suma :{this.props.sum}zł</Text>
            </Card>
        </View>)

    }

    render() {

        var {height} = Dimensions.get('window');


        return (

            <View>


                <View style={{...StyleSheet.absoluteFillObject, flex: 1, height: height - 175}}>

                    <FlatList
                        style={{...StyleSheet.absoluteFillObject}}
                        windowSize={21}
                        data={this.props.list}
                        ListFooterComponent={this.renderFooter}
                        ListHeaderComponent={this.renderHeader}
                        renderItem={({item}) => (

                            <Card>
                                <ListItem
                                    itemStyle={{
                                        flex: 1,
                                        flexDirection: "column",
                                        backgroundColor: colors.itemsBgColor,
                                        color: colors.dividerColor,
                                        fontFamily: "Ebrima",
                                        fontSize: 15
                                    }}
                                    divider
                                    leftElement={categories.find(category => {
                                        return category.title === item.category;
                                    }).icon}
                                    centerElement={{
                                        primaryText: `${item.name} ${item.category}  ${item.price}zł`,
                                    }}
                                    onPress={() => {

                                    }}>
                                </ListItem>

                            </Card>
                        )}

                        keyExtractor={item => item.id + ""+ Math.floor((Math.random() *5) + 100)}
                    />

                </View>
            </View>
        );
    }
}

export default FoodList;