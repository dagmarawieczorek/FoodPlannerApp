import React, {Component} from 'react';
import {Picker, Text, TextInput, View} from 'react-native';
import styles from "../../styles/styles.js";
import realm from "../../databases/allSchemas";
import data from "../../databases/categories";
import {Dialog, DialogDefaultActions} from 'react-native-material-ui';


class PopUpInput extends Component {


    constructor(props) {
        super(props);

        this.state = {
            data: data,
            subCategory: data[0].items,
            newItemName: "",
            pickedCat: data[0].title,
            pickedSubcat: data[0].items[0],
        };

    }


    handleNewText(text) {
        this.setState({
            value: text
        })
    }


    handleSubcategoryChange = (value) => {
        this.setState({
            pickedSubcat: value,
        });
    };

    handleCategoryChange = (value) => {

        const foundSubcategory = this.state.data.find(category => {
            return category.title === value;
        });

        this.setState({
            pickedCat: value,
            subCategory: foundSubcategory.items,
        });
    };


    handleButtonNewItem = () => {

        console.log("Handle button new item");

        if (this.state.newItemName !== "" && this.state.newItemPrice !== 0) {

            let newId = realm.objects("Ingredient").length + 1;

            let newProduct = {
                id: newId,
                name: this.state.newItemName,
                price: Number(this.state.newItemPrice),
                category: this.state.pickedCat,
                subcategory: this.state.pickedSubcat
            };

            realm.write(() => {
                realm.create("Ingredient", newProduct);
                console.log("Saving " + newProduct.name);
            });
        }


        this.props.onClose();
    };

    render() {

        const lisCategory = this.state.data.map(item => (
            <Picker.Item label={item.title} key={item.title} value={item.title}/>
        ));


        const lisSubcategory = this.state.subCategory.map(item => (
            <Picker.Item label={item} key={item} value={item}/>
        ));

        console.log(realm.objects("Ingredient").length + 1);
        return (<View style={styles.popUpInputBox}>

            <Dialog>
                <Dialog.Title><Text>Wpisz nazwę | Cene</Text></Dialog.Title>
                <Dialog.Content>


                    <TextInput
                        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={text => this.setState({newItemName: text})}
                        value={this.state.newItemName}
                    />

                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        keyboardType="numeric"
                        onChangeText={text => this.setState({newItemPrice: text})}
                        value={this.state.newItemPrice}
                    />


                    <Text>Wybierz kategorie</Text>
                    {/*/pick category*/}
                    <Picker
                        selectedValue={this.state.pickedCat}
                        style={{height: 50, width: 300}}
                        mode="dropdown"
                        onValueChange={this.handleCategoryChange}>
                        {lisCategory}
                    </Picker>


                    {/*/pick subcategory*/}
                    <Picker
                        selectedValue={this.state.pickedSubcat}
                        style={{height: 50, width: 300}}
                        mode="dropdown"
                        onValueChange={this.handleSubcategoryChange}>
                        {lisSubcategory}
                    </Picker>
                </Dialog.Content>
                <Dialog.Actions>
                    <DialogDefaultActions
                        actions={['ok']}
                        onActionPress={() => this.handleButtonNewItem()}
                    />
                </Dialog.Actions>
            </Dialog>

        </View>)
    }
}

export default PopUpInput;