import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { 
    View, 
    KeyboardAvoidingView,
    LayoutAnimation,
    Keyboard
 } from 'react-native';
 import { checkCodeComponent, checkCodeWithFirebase, firstPhoneChange } from '../actions';
 import Spinner from './common/Spinner';
 
class SubmitCode extends Component {
    onChangeCode(value) {
        this.props.checkCodeComponent(value);
    }
    onButtonPress() {
        Keyboard.dismiss();
        this.props.checkCodeWithFirebase({ value: this.props.checkCode, phone: this.props.phone });
    }
    renderComponent() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        return (
            <KeyboardAvoidingView behavior='padding'>
                <View style={{ paddingBottom: 10 }}>
                    <FormLabel>Enter Code</FormLabel>
                    <FormInput
                    keyboardType='numeric' 
                    placeholder='****' 
                    onChangeText={this.onChangeCode.bind(this)}
                    value={this.props.checkCode}
                    />
                </View>
                <View>
                    <Button title='Verify' onPress={this.onButtonPress.bind(this)} />
                </View>
            </KeyboardAvoidingView>
        );
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
        checkCode: state.checkCodeReducer.code,
        loading: state.checkCodeReducer.loading,
        phone: state.firebaseReducer.phone
    };
};

export default connect(mapStateToProps, { 
    checkCodeComponent, 
    checkCodeWithFirebase,
    firstPhoneChange 
})(SubmitCode);
