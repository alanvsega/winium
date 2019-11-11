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
import FormStyle from '../styles/FormStyle';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: null,
        email: null,
        country: null,
        provincy: null,
        password: null,
        password2: null,
      }
    };
  }

  onCreateAccountClick = () => {
    console.log('Register', this.state.data);
  }

  render() {
    return(
      <View style={MainStyle.blueBody}>
        <ScrollView style={MainStyle.content}>
          <Text style={[MainStyle.whiteText, MainStyle.largeText]}>Welcome</Text>
          <Text style={[MainStyle.whiteText, MainStyle.mediumText]}>Fill with you informations</Text>
          <View style={FormStyle.formItem}>
            <FontAwesome name="user" style={FormStyle.formIcon} size={20} color="#FFF"/>
            <TextInput
              style={FormStyle.whiteInput}
              placeholder='Name'
              placeholderTextColor='#FFF'
              onChangeText={(name) => {this.setState({data: { ...this.state.data, name}})}}
              underlineColorAndroid="transparent"
            />
          </View>
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
            <FontAwesome name="flag" style={FormStyle.formIcon} size={20} color="#FFF"/>
            <TextInput
              style={FormStyle.whiteInput}
              placeholder='Country'
              placeholderTextColor='#FFF'
              onChangeText={(country) => {this.setState({data: { ...this.state.data, country}})}}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={FormStyle.formItem}>
            <FontAwesome name="map-marker" style={FormStyle.formIcon} size={20} color="#FFF"/>
            <TextInput
              style={FormStyle.whiteInput}
              placeholder='Province'
              placeholderTextColor='#FFF'
              onChangeText={(province) => {this.setState({data: { ...this.state.data, province}})}}
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
          <View style={FormStyle.formItem}>
            <FontAwesome name="lock" style={FormStyle.formIcon} size={20} color="#FFF"/>
            <TextInput
              style={FormStyle.whiteInput}
              placeholder='Confirm Your Password'
              placeholderTextColor='#FFF'
              secureTextEntry={true}
              onChangeText={(password2) => {this.setState({data: { ...this.state.data, password2}})}}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity style={FormStyle.yellowButton} onPress={this.onCreateAccountClick}>
            <Text style={[MainStyle.blueText, MainStyle.largeText]}>Create Account</Text>
          </TouchableOpacity>
          <Text style={[MainStyle.whiteText, MainStyle.mediumText, MainStyle.centerText]}>Already have an account</Text>
          <TouchableOpacity style={FormStyle.yellowBorderedButton} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={[MainStyle.yellowText, MainStyle.largeText]}>Login</Text>
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
)(RegisterScreen);
