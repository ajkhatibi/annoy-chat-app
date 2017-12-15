import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponents from './components/RouterComponents';

export default class App extends React.Component {
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
