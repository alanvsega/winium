import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

import MainStyle from '../styles/MainStyle';

import BottomTabNavigator from '../components/BottomTabNavigator';

class WineDetailsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WineDetailsScreen);
