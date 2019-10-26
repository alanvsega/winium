import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';

import MainStyle from '../styles/MainStyle';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <View style={MainStyle.body}></View>
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
)(HomeScreen);
