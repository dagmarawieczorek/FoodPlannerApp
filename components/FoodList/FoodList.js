import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native'
import {Card, Divider, Icon, ListItem} from 'react-native-material-ui';
import styles from "../../styles/styles.js";
import categories from "../../databases/categories";


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

            <View style={{ backgroundColor: "#D5D5D5",}}>

                <Text style={styles.itemText}>
                    Lista zakupów
                </Text>


                <View>
                    <FlatList
                        windowSize={21}
                        data={this.props.list}
                        renderItem={({item}) => (
                            <Card>
                                <ListItem
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

                        keyExtractor={item => item.id + ""}
                    />
                </View>
                <Divider/>
                <Card>
                        <Text style={styles.itemText}>
                            <Icon name="attach-money"/>
                            Suma : {sumPrice}zł</Text>
                </Card>
            </View>
        );
    }
}

export default FoodList;