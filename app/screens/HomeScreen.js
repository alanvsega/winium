import React from 'react';
import {
  Alert,
  View,
  ScrollView,
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
      <View style={MainStyle.body}>
        <ScrollView>

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
