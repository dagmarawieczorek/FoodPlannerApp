import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native'
import {Card, ListItem} from 'react-native-material-ui';


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

            <View >
                <View >
                    <Text >
                        Lista zakupów
                    </Text>
                </View>
                <View >
                    <FlatList
                        windowSize={21}
                        data={this.props.list}
                        renderItem={({item}) => (
                            <ListItem
                                divider
                                centerElement={{
                                    primaryText: `${item.name} | ${item.category} |${item.price}`,
                                }}
                                onPress={() => {
                                }}>
                            </ListItem>
                        )}

                        keyExtractor={item => item.id + ""}
                    />
                </View>
                <View>
                    <Card>
                        <Text>Sumaa : {sumPrice}zł</Text>
                    </Card>
                </View>
            </View>
        );
    }
}

export default FoodList;