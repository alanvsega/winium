import React from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';

import MainStyle from '../styles/MainStyle';

export default Loader = () =>
<View style={MainStyle.fullPage}>
  <ActivityIndicator size="large" color="#FFF"/>
</View>;
