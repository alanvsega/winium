import React from 'react';
import {
  Alert,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import MainStyle from '../styles/MainStyle';

import BottomTabNavigator from '../components/BottomTabNavigator';

import * as UserReducer from '../reducers/UserReducer';

import { getLogin } from '../actions/UserActions';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getLogin();
  }

  componentDidUpdate(prevProps) {
    if(this.props != prevProps) {
      if((this.props.message != prevProps.message) && this.props.message != null) {
        Alert.alert(
          "Validation",
          this.props.message,
          [
            { text: 'OK', onPress: () => {} },
          ],
          { cancelable: false },
        );
      }

      if(
        // Login
        !prevProps.isLogged && this.props.isLogged ||
        // Logout
        prevProps.isLogged && !this.props.isLogged
      ) {
        this.props.navigation.navigate('Home');
      }
    }
  }

  render() {
    return(
      <View style={MainStyle.blueBody}>
        <ScrollView>
          <View style={MainStyle.centerView, MainStyle.content}>
            <Image style={MainStyle.logoDashboard} source={require('../assets/icon-dashboard.png')}/>
            <Text style={[MainStyle.whiteText, MainStyle.dashboardText, MainStyle.centerText]}>Enjoy all winium features by creating an account.</Text>
            <Text style={[MainStyle.whiteText, MainStyle.mediumText, MainStyle.centerText]}>- The best wine in your region.</Text>
            <Text style={[MainStyle.whiteText, MainStyle.mediumText, MainStyle.centerText]}>- Wine recomendations.</Text>
            <Text style={[MainStyle.whiteText, MainStyle.mediumText, MainStyle.centerText]}>- Your favourite wines statistics.</Text>
            <Text style={[MainStyle.whiteText, MainStyle.dashboardText, MainStyle.centerText]}>Be part of the greatest wine community.</Text>
            <View style={MainStyle.centerView}>
              <TouchableOpacity style={FormStyle.yellowButtonDashboard} onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={[MainStyle.blueText, MainStyle.largeText]}>Create Account</Text>
              </TouchableOpacity>
              <Text style={[MainStyle.whiteText, MainStyle.smallText, MainStyle.centerText]}>or, already on winium?</Text>
              <TouchableOpacity style={FormStyle.yellowButtonDashboard} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={[MainStyle.blueText, MainStyle.largeText]}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={MainStyle.rankingDashboard}>
            <Text style={MainStyle.rankingDashboardTitle}>Top 3 world's best wines</Text>
          </View>
        </ScrollView>
        <BottomTabNavigator navigation={this.props.navigation}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  message: UserReducer.getMessage(state),
  isLogged: UserReducer.isLogged(state),
});

const mapDispatchToProps = dispatch => ({
  getLogin: () => dispatch(getLogin(null)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
