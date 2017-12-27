import React, { Component } from 'react';
import { View, LayoutAnimation } from 'react-native';
import { MapView, Permissions, Location } from 'expo';
import { connect } from 'react-redux';
import { FormInput, FormLabel } from 'react-native-elements';
import { statusAction, createUserName } from '../actions';

class HomePage extends Component {
    state = {
        locationResult: null,
        location: { 
            coords: { 
                latitude: 37.78825, 
                longitude: -122.4324 
            } 
        }
    };
    componentWillMount() {
        this.getUserLocation();
        LayoutAnimation.spring();
    }
    onStatusChange(value) {
        console.log('onchangestatus', this.props.status);
        this.props.statusAction(value);
    }
    onSubmitKeyboard() {
        console.log('logging submitting button 1234', this.props.status);
        this.props.createUserName(this.props.status);
    }
    onSubmitEditingForUserName() {
        if (this.props.userName == null) {
            return (
                <View style={{ position: 'absolute', backgroundColor: 'white', left: 0, right: 0 }}>
                    <FormLabel>Choose a user name!</FormLabel>
                    <FormInput
                        returnKeyType='next'
                        autoCorrect={false}
                        autoCapitalize='none'
                        placeholder='noname123'
                        keyboardType='default'
                        onChangeText={this.onStatusChange.bind(this)}
                        value={this.props.status}
                        onSubmitEditing={this.onSubmitKeyboard.bind(this)}
                    />
                </View>
            );
        } else if (this.props.userName !== null) {
            return (
                <View style={{ position: 'absolute', backgroundColor: 'white', left: 0, right: 0 }}>
                    <FormLabel>Tell everyone how awesome you are!</FormLabel>
                    <FormInput
                        returnKeyType='next'
                        placeholder='status'
                        keyboardType='default'
                        
                    />
                </View>
            );
        }
    }
    getUserLocation = async () => {
        const { status } = await Permissions.getAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
                location,
            });
        }
        let location = await Location.getCurrentPositionAsync({});
        console.log('granted: ', location.coords);
        this.setState({
            locationResult: JSON.stringify(location),
            location
        });
    }
    render() {
        const currentLocation = {
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        };
        return (
            <View style={{ flex: 1 }} >
                <MapView 
                    style={{ flex: 1 }}
                    region={currentLocation}
                >
                <MapView.Marker
                    coordinate={currentLocation}
                    title='yo'
                    description='hello'
                />
                </MapView>
                {this.onSubmitEditingForUserName()}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.mapReducer.status,
        userName: state.mapReducer.userName
    };
};

export default connect(mapStateToProps, { statusAction, createUserName })(HomePage);
