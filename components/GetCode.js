import _ from 'lodash';
import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Keyboard, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { AppLoading } from 'expo';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import Spinner from './common/Spinner';
import { firstPhoneChange, sendCodeSubmit } from '../actions';

class GetCode extends Component {
    state = {
        token: null
    }
    async componentWillMount() {
        let token = await AsyncStorage.getItem('token');
        if (token) {
            this.setState({ token: true });
            Actions.homePage({ type: 'reset' });
        } else {
            this.setState({ token: false });
        }
    }
    onButtonPress() {
        const { phone } = this.props;
        Keyboard.dismiss();
        this.props.sendCodeSubmit({ phone });
    }
    phoneChage(value) {
        this.props.firstPhoneChange(value);
        console.log('logging phone: ', this.props.firstPhoneChange(value));
    }
    renderComponent() {
        if (_.isNull(this.state.token)){
            return <AppLoading />;
        } else if (this.props.loading) {
            return <Spinner size='large' />;
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        phone: state.firebaseReducer.phone,
        loading: state.firebaseReducer.loading
    };
};

export default connect(mapStateToProps, { 
    firstPhoneChange, 
    sendCodeSubmit 
})(GetCode); 
