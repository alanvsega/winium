import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { FontAwesome, SimpleLineIcons, Feather } from '@expo/vector-icons';

import COLORS from '../constants/Colors';

export default class BottomTabNavigator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  navigate = (routeName) => {
    this.props.navigation.navigate(routeName);
  }

  render() {
    return (
      <View style={Style.tab}>
        <TouchableWithoutFeedback onPress={() => this.navigate('Home')}>
          <View style= {Style.tabItem}>
            <FontAwesome
              name='home'
              size={32}
              style={Style.icon}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.navigate('WineList')}>
          <View style= {Style.tabItem}>
            <SimpleLineIcons
              name='grid'
              size={32}
              style={Style.icon}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.navigate('Register')}>
          <View style= {Style.tabItem}>
            <Feather
              name='users'
              size={32}
              style={Style.icon}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  tab: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 998,
    backgroundColor: COLORS.lightGrey,
  },
  tabItem: {
    flex: 1,
    height: 65,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    paddingHorizontal: 7,
    color: COLORS.darkGrey,
  }
});
