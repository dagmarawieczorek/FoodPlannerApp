import React, {Component} from 'react';
import {Button, Modal, Text, TextInput, TouchableHighlight, View} from 'react-native';
import styles from "../../styles/styles";

class PopUpAdd extends Component {


    // setModalVisible() {
    // this.setState(this.props.visibility(false));
    visibility() {
        this.setState({
            modalVisible: false,
        })
    }


    handleButtonAdd() {
        this.props.plusClicked(false)
    }

    handleNewText(text){
        this.props.newItem(text)
    }

    render() {
        return (
            <View>
                <Modal
                    style={styles.popUpBox}
                    animationType="fade"
                    transparent={true}
                    visible={this.props.visibility}
                    onRequestClose={() => {
                        alert('Dodano produkt.');
                    }}>
                    <View style={styles.popUpBox}>
                        <View style={styles.insideModalBox}>

                            <TextInput
                                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                onChangeText={(text) => this.handleNewText(text)}
                                value={""}

                            />


                            <Button
                            onPress={() => this.handleButtonAdd()}
                            title="+"
                            color="gray"
                            accessibilityLabel="add"
                        />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default PopUpAdd;