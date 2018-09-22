import React, {Component} from 'react';
import {Modal, View} from 'react-native';
import styles from "../../styles/styles";
import PopUpInput from "./PopUpInput.js";


class PopUpAdd extends Component {


    constructor(props) {
        super(props);
        this.state = {
            newItem: {}
        };
    }


    visibility() {
        this.setState({
            modalVisible: false,
        })
    }

    handleButtonAdd() {
        this.props.plusClicked(false)
    }


    handleAddedFood = (foodlist) => {
        this.setState({
            newList: [...this.state.newList, foodlist]
        })
    };


    render() {
        return (
            <View>
                <Modal
                    style={styles.popUpBox}
                    animationType="fade"
                    transparent={true}
                    visible={this.props.visibility}
                    onRequestClose={() => {
                    }}>
                    <View style={styles.popUpBox}>
                        <View style={styles.insideModalBox}>

                            <PopUpInput newFoodAdded={this.handleAddedFood}
                                        onClose={() => this.handleButtonAdd()}
                            />

                            {this.props.children}

                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default PopUpAdd;