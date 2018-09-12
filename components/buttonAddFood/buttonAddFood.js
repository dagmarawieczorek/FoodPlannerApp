import React, {Component} from 'react';
import {Button} from 'react-native'


class AddFoodBtn extends Component {


    handleButtonAdd() {
        this.props.plusClicked(true)
    }

    render() {

        return (<Button
            onPress={() => this.handleButtonAdd()}
            title="+"
            color="gray"
            accessibilityLabel="add"
        />)
    }
}

export default AddFoodBtn;
