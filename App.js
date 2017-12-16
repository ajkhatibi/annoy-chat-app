import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import RouterComponents from './components/RouterComponents';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyCHdDUHiZu9yd99ROF5v58i4jZ0Lu1s7qA',
      authDomain: 'one-time-password-c4408.firebaseapp.com',
      databaseURL: 'https://one-time-password-c4408.firebaseio.com',
      projectId: 'one-time-password-c4408',
      storageBucket: 'one-time-password-c4408.appspot.com',
      messagingSenderId: '354512024134'
    };
    firebase.initializeApp(config);
  }
  render() {
    const reduxStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={reduxStore} >
        <View style={styles.container}>
            <RouterComponents />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});
