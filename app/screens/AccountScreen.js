import React from 'react';
import {
  Alert,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FontAwesome, Foundation } from '@expo/vector-icons';
import { connect } from 'react-redux';

import MainStyle from '../styles/MainStyle';
import FormStyle from '../styles/FormStyle';

import Loader from '../components/Loader';
import BottomTabNavigator from '../components/BottomTabNavigator';

import * as UserReducer from '../reducers/UserReducer';

import { applyLogout } from '../actions/UserActions';

class AccountScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onLogoutClick = () => {
    Alert.alert(
      "Logout",
      "Are you sure?",
      [
        { text: 'No', onPress: () => {} },
        { text: 'Yes', onPress: () => this.props.applyLogout() },
      ],
      { cancelable: false },
    );
  }

  render() {
    if(!this.props.user) {
      return(<Loader/>);
    }

    return(
      <View style={MainStyle.blueBody}>
        <ScrollView style={MainStyle.content}>
          <View style={MainStyle.centerView}>
            <Image style={MainStyle.logo} source={require('../assets/icon.png')}/>
          </View>
          <Text style={[MainStyle.whiteText, MainStyle.largeText]}>Hello, {this.props.user.name}</Text>
          <View style={FormStyle.formItem}>
            <FontAwesome name="envelope" style={FormStyle.formIcon} size={20} color="#FFF"/>
            <TextInput
              style={FormStyle.whiteInput}
              placeholder='Email'
              placeholderTextColor='#FFF'
              underlineColorAndroid="transparent"
              value={this.props.user.email}
              editable={false}
            />
          </View>
          <View style={FormStyle.formItem}>
            <FontAwesome name="flag" style={FormStyle.formIcon} size={20} color="#FFF"/>
            <TextInput
              style={FormStyle.whiteInput}
              placeholder='Country'
              placeholderTextColor='#FFF'
              underlineColorAndroid="transparent"
              value={this.props.user.country}
              editable={false}
            />
          </View>
          <View style={FormStyle.formItem}>
            <Foundation name='map' style={FormStyle.formIcon} size={20} color="#FFF"/>
            <TextInput
              style={FormStyle.whiteInput}
              placeholder='Province'
              placeholderTextColor='#FFF'
              underlineColorAndroid="transparent"
              value={this.props.user.province}
              editable={false}
            />
          </View>
          <TouchableOpacity style={FormStyle.yellowButton} onPress={this.onLogoutClick}>
            <Text style={[MainStyle.blueText, MainStyle.largeText]}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
        <BottomTabNavigator navigation={this.props.navigation}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: UserReducer.isLogged(state),
  user: UserReducer.getUser(state),
});

const mapDispatchToProps = dispatch => ({
  applyLogout: () => dispatch(applyLogout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountScreen);
