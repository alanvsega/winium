import React from 'react';
import {
  Alert,
  ScrollView,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import MainStyle from '../styles/MainStyle';

import Loader from '../components/Loader';
import BottomTabNavigator from '../components/BottomTabNavigator';

import * as UserReducer from '../reducers/UserReducer';
import * as WineReducer from '../reducers/WineReducer';

import { getLogin } from '../actions/UserActions';
import { getDashboardWines } from '../actions/WineActions';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getLogin();
    this.refreshDashboard();
  }

  refreshDashboard = () => {
    let country;

    if(this.props.isLogged) {
      country = this.props.user.country;
    }

    this.props.getDashboardWines(country);
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
        this.refreshDashboard();
      }
    }
  }

  render() {
    if(this.props.isLoading) {
      return(<Loader/>);
    }

    return(
      <View style={MainStyle.blueBody}>
        <ScrollView style={MainStyle.content}>
          {!this.props.isLogged &&
            <View>
              <View style={MainStyle.centerView, MainStyle.content}>
                <Image style={MainStyle.logoDashboard} source={require('../assets/icon-dashboard.png')}/>
                <Text style={[MainStyle.whiteText, MainStyle.dashboardText, MainStyle.centerText]}>Enjoy all winium features by creating an account.</Text>
                <Text style={[MainStyle.whiteText, MainStyle.mediumText, MainStyle.centerText]}>- The best wine in your region.</Text>
                <Text style={[MainStyle.whiteText, MainStyle.mediumText, MainStyle.centerText]}>- Wine recomendations.</Text>
                <Text style={[MainStyle.whiteText, MainStyle.mediumText, MainStyle.centerText]}>- Your favourite wines statistics.</Text>
                <Text style={[MainStyle.whiteText, MainStyle.dashboardText, MainStyle.centerText]}>Be part of the greatest wine community.</Text>
              </View>
              <TouchableOpacity style={FormStyle.yellowButtonDashboard} onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={[MainStyle.blueText, MainStyle.largeText]}>Create Account</Text>
              </TouchableOpacity>
              <Text style={[MainStyle.whiteText, MainStyle.smallText, MainStyle.centerText]}>or, already on winium?</Text>
              <TouchableOpacity style={FormStyle.yellowButtonDashboard} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={[MainStyle.blueText, MainStyle.largeText]}>Login</Text>
              </TouchableOpacity>
            </View>
          }
          {this.props.isLogged &&
            <View style={MainStyle.centerView, MainStyle.content}>
              <Image style={MainStyle.logoDashboard} source={require('../assets/icon-dashboard.png')}/>
              <Text style={[MainStyle.whiteText, MainStyle.dashboardText, MainStyle.centerText]}>Hello, {this.props.user.name}!</Text>
            </View>
          }
          <View style={MainStyle.rankingDashboard}>
            {!this.props.isLogged &&
              <Text style={MainStyle.rankingDashboardTitle}>Top 4 Wines in the World</Text>
            }
            {this.props.isLogged &&
              <Text style={MainStyle.rankingDashboardTitle}>Top 4 Wines in {this.props.user.country}</Text>
            }
            {this.props.wines != null && this.props.wines.map((wine, i) => {
            if((i+1) % 2 == 0) {
              return (
                <View key={i} style={MainStyle.row}>
                  <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('WineDetails', { wine: this.props.wines[i-1] })}>
                    <View style={MainStyle.gridItem}>
                      <View style={MainStyle.gridScore}>
                        <Text style={MainStyle.gridText}>{this.props.wines[i-1].average}</Text>
                      </View>
                      <Image style={MainStyle.gridImage} source={require('../assets/wine.png')}/>
                      <Text style={MainStyle.gridText}>{this.props.wines[i-1].designation}</Text>
                      <Text style={MainStyle.gridText2}>{this.props.wines[i-1].variety}</Text>
                      <Text style={MainStyle.gridText3}>{this.props.wines[i-1].winery}</Text>
                      {/* <Text style={MainStyle.gridText}>$ 110</Text> */}
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('WineDetails', { wine })}>
                    <View style={MainStyle.gridItem}>
                      <View style={MainStyle.gridScore}>
                        <Text style={MainStyle.gridText}>{wine.average}</Text>
                      </View>
                      <Image style={MainStyle.gridImage} source={require('../assets/wine.png')}/>
                      <Text style={MainStyle.gridText}>{wine.designation}</Text>
                      <Text style={MainStyle.gridText2}>{wine.variety}</Text>
                      <Text style={MainStyle.gridText3}>{wine.winery}</Text>
                      {/* <Text style={MainStyle.gridText}>$ 110</Text> */}
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              );
            }
            else {
              return (<View key={i}></View>);
            }
          })}
          </View>
        </ScrollView>
        <BottomTabNavigator navigation={this.props.navigation}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: WineReducer.isLoading(state),
  message: UserReducer.getMessage(state),
  isLogged: UserReducer.isLogged(state),
  user: UserReducer.getUser(state),
  wines: WineReducer.getDashboardList(state),
});

const mapDispatchToProps = dispatch => ({
  getLogin: () => dispatch(getLogin(null)),
  getDashboardWines: (country) => dispatch(getDashboardWines(country)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
