import React, { Component } from 'react';
import { View, LayoutAnimation } from 'react-native';
import { MapView, Permissions, Location } from 'expo';

export default class HomePage extends Component {
    state = {
        mapRegion: { 
            latitude: 37.78825, 
            longitude: -122.4324, 
            latitudeDelta: 0.0922, 
            longitudeDelta: 0.0421 
        },
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
                />
            </View>
        );
    }
}
