import React, {Component} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View, TouchableHighlight} from 'react-native'
import {Card, Divider, ListItem, Toolbar} from 'react-native-material-ui';
import styles from "../../styles/styles.js";
import colors from "../../styles/colors.js";
import categories from "../../databases/categories";
import Icon from 'react-native-vector-icons/Ionicons';

class FoodList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            sumPrice: 0,
            checked: false,
        };
    }

    renderHeader = () => {
        return (
            <Card>
                <Text style={styles.itemText}>
                    Shopping list
                </Text>
            </Card>)
    }
    renderFooter = () => {


        return (<View>
            <Divider/>
            <Card>
                <Text style={styles.itemText}>
                    <Icon name="md-wallet" style={{color: "white", paddingTop: 15,}}/>
                    Sum : {this.props.sum.toFixed(2)}zł</Text>
            </Card>

        </View>)

    }

    render() {
        var {height} = Dimensions.get('window');

        return (

            <View>

                <View style={{
                    ...StyleSheet.absoluteFillObject,
                    flex: 1,
                    height: height - 130,
                    backgroundColor: colors.bgAll
                }}>

                    <FlatList
                        style={{...StyleSheet.absoluteFillObject}}
                        windowSize={21}
                        data={this.props.list}
                        ListFooterComponent={this.renderFooter}
                        ListHeaderComponent={this.renderHeader}
                        renderItem={({item}) => (

                            <ListItem
                                itemStyle={{
                                    flex: 1,
                                    flexDirection: "column",
                                    backgroundColor: colors.cardColor,
                                    fontSize: 15
                                }}
                                divider
                                leftElement={categories.find(category => {
                                    return category.title === item.category;
                                }).icon}
                                rightElement={item.checked?"check-box":"check-box-outline-blank"}
                                centerElement={{
                                    primaryText: `${item.name} ${item.price.toFixed(2)}zł ${item.quantity}`,
                                }}
                                onPress={()=>{
                                    item.checked=!item.checked;
                                    this.setState({checked:!this.state.checked})}
                               }>
                            </ListItem>


                        )}

                        keyExtractor={item => item.id + "" + Math.floor((Math.random() * 5) + 100)}
                    />


                    </View>
                </View>

        );
    }
}

export default FoodList;