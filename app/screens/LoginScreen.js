import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';

import MainStyle from '../styles/MainStyle';

import BottomTabNavigator from '../components/BottomTabNavigator';

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
    console.log('Login', this.state.data);
  }

  render() {
    return(
      <View style={MainStyle.blueBody}>
        <ScrollView style={MainStyle.content}>
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
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
