import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { 
    View, 
    KeyboardAvoidingView,
    LayoutAnimation,
    Keyboard
 } from 'react-native';
 import { checkCodeComponent } from '../actions';
 import Spinner from './common/Spinner';
 
class SubmitCode extends Component {
    componentDidUpdate() {
        LayoutAnimation.spring();
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
                    />
                </View>
                <View>
                    <Button title='Verify' />
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
        loading: state.checkCodeReducer.loading
    };
};

export default connect(mapStateToProps, { checkCodeComponent })(SubmitCode);
