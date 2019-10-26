import React from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import winium from './reducers';

import HomeScreen from './screens/HomeScreen';
import WineListScreen from './screens/WineListScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    WineList: WineListScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

const store = createStore(
  winium,
  applyMiddleware(
    thunkMiddleware,
  )
);

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
