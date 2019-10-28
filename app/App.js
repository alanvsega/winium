import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation-stack';
import {
  createAppContainer
} from 'react-navigation';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import winium from './reducers';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import WineListScreen from './screens/WineListScreen';
import WineDetailsScreen from './screens/WineDetailsScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    WineList: WineListScreen,
    WineDetails: WineDetailsScreen,
  },
  {
    initialRouteName: 'WineList', // @TODO: Set initial as Home
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
