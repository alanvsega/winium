import React from 'react';
import {
  ActivityIndicator,
  Alert,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';

import MainStyle from '../styles/MainStyle';

import BottomTabNavigator from '../components/BottomTabNavigator';

import * as UserReducer from '../reducers/UserReducer';

import { getLogin } from '../actions/UserActions';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: null,
        password: null,
      }
    };
  }

  onLoginClick = () => {
    let validation = '';

    if(!this.state.data.email) {
      validation = validation + 'Email is required.\n';
    }

    if(!this.state.data.password) {
      validation = validation + 'Password is required.\n';
    }

    if(validation != '') {
      Alert.alert(
        "Validation",
        validation,
        [
          { text: 'OK', onPress: () => {} },
        ],
        { cancelable: false },
      );

      return;
    }

    this.props.getLogin(this.state.data);
  }

  render() {
    if(this.props.isLoading) {
      return(<ActivityIndicator size="large" color="#0000ff"/>);
    }

    return(
      <View style={MainStyle.blueBody}>
        <ScrollView style={MainStyle.content}>
          <View style={MainStyle.centerView}>
            <Image style={MainStyle.logo} source={require('../assets/icon.png')}/>
          </View>
          <Text style={[MainStyle.whiteText, MainStyle.largeText]}>Welcome</Text>
          <Text style={[MainStyle.whiteText, MainStyle.mediumText]}>Sign in or create an account</Text>
          <View style={FormStyle.formItem}>
            <FontAwesome name="envelope" style={FormStyle.formIcon} size={20} color="#FFF"/>
            <TextInput
              style={FormStyle.whiteInput}
              placeholder='Email'
              placeholderTextColor='#FFF'
              onChangeText={(email) => {this.setState({data: { ...this.state.data, email}})}}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={FormStyle.formItem}>
            <FontAwesome name="lock" style={FormStyle.formIcon} size={20} color="#FFF"/>
            <TextInput
              style={FormStyle.whiteInput}
              placeholder='Password'
              placeholderTextColor='#FFF'
              secureTextEntry={true}
              onChangeText={(password) => {this.setState({data: { ...this.state.data, password}})}}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity style={FormStyle.yellowButton} onPress={this.onLoginClick}>
            <Text style={[MainStyle.blueText, MainStyle.largeText]}>Login</Text>
          </TouchableOpacity>
          <Text style={[MainStyle.whiteText, MainStyle.mediumText, MainStyle.centerText]}>Don't have an account yet?</Text>
          <TouchableOpacity style={FormStyle.yellowBorderedButton} onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={[MainStyle.yellowText, MainStyle.largeText]}>Create Account</Text>
          </TouchableOpacity>
        </ScrollView>
        <BottomTabNavigator navigation={this.props.navigation}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: UserReducer.isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getLogin: (data) => dispatch(getLogin(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
