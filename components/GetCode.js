import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Keyboard, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux'
import { firstPhoneChange, sendCodeSubmit } from '../actions';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import Spinner from './common/Spinner';

class GetCode extends Component {
    componentDidUpdate(){
        LayoutAnimation.spring();
    }
    phoneChage(value) {
        this.props.firstPhoneChange(value)
        console.log('logging phone: ', this.props.firstPhoneChange(value));
    }
    onButtonPress(){
        const { phone } = this.props;
        Keyboard.dismiss();
        this.props.sendCodeSubmit({ phone })
    }
    renderComponent() {
        if (this.props.loading) {
            return <Spinner size='large'/>;
        } else {
            return (
                <KeyboardAvoidingView behavior='padding'>
                    <View style={{ paddingBottom: 10 }}>
                        <FormLabel>Enter Phone Number</FormLabel>
                        <FormInput
                        keyboardType='numeric' 
                        placeholder='818-555-5555' 
                        onChangeText={this.phoneChage.bind(this)}
                        value={this.props.phoneText}
                        />
                    </View>
                    <View>
                        <Button title='Send' onPress={this.onButtonPress.bind(this)}/>
                    </View>
                </KeyboardAvoidingView>
            );
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {this.renderComponent()}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        phone: state.firebaseReducer.phone,
        loading: state.firebaseReducer.loading
    }
}

export default connect(mapStateToProps, { 
    firstPhoneChange, 
    sendCodeSubmit 
})(GetCode); 
