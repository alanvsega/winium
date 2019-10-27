import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';

import MainStyle from '../styles/MainStyle';
import COLORS from '../constants/Colors';

import BottomTabNavigator from '../components/BottomTabNavigator';

class WineListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <View style={MainStyle.body}>
        <ScrollView>
          <View style={MainStyle.row}>
            <TextInput
              style={Style.searchField}
              placeholder='Type in to search...'
              placeholderTextColor={COLORS.mediumGrey}
            />
            <FontAwesome
              name="sliders"
              size={32}
              color="black"
            />
          </View>
          <View style={MainStyle.row}>
            <View style={MainStyle.gridItem}>
              <View style={MainStyle.gridScore}>
                <Text style={MainStyle.gridText}>87</Text>
              </View>
              <Image style={MainStyle.gridImage} source={require('../assets/wine1.png')}/>
              <Text style={MainStyle.gridText}>Lídio Carraro Dadivas</Text>
              <Text style={MainStyle.gridText}>$ 110</Text>
            </View>
            <View style={MainStyle.gridItem}>
              <View style={MainStyle.gridScore}>
                <Text style={MainStyle.gridText}>56</Text>
              </View>
              <Image style={MainStyle.gridImage} source={require('../assets/wine2.png')}/>
              <Text style={MainStyle.gridText}>Jansley Felipe</Text>
              <Text style={MainStyle.gridText}>$ 35</Text>
            </View>
          </View>
          <View style={MainStyle.row}>
            <View style={MainStyle.gridItem}>
              <View style={MainStyle.gridScore}>
                <Text style={MainStyle.gridText}>98</Text>
              </View>
              <Image style={MainStyle.gridImage} source={require('../assets/wine3.png')}/>
              <Text style={MainStyle.gridText}>Marcos Oliveira</Text>
              <Text style={MainStyle.gridText}>$ 1700</Text>
            </View>
            <View style={MainStyle.gridItem}>
              <View style={MainStyle.gridScore}>
                <Text style={MainStyle.gridText}>78</Text>
              </View>
              <Image style={MainStyle.gridImage} source={require('../assets/wine4.png')}/>
              <Text style={MainStyle.gridText}>Clovis de Clodo</Text>
              <Text style={MainStyle.gridText}>$ 14</Text>
            </View>
          </View>
          <View style={MainStyle.row}>
            <View style={MainStyle.gridItem}>
              <View style={MainStyle.gridScore}>
                <Text style={MainStyle.gridText}>50</Text>
              </View>
              <Image style={MainStyle.gridImage} source={require('../assets/wine2.png')}/>
              <Text style={MainStyle.gridText}>Vinho Teste</Text>
              <Text style={MainStyle.gridText}>$ 42</Text>
            </View>
            <View style={MainStyle.gridItem}>
              <View style={MainStyle.gridScore}>
                <Text style={MainStyle.gridText}>78</Text>
              </View>
              <Image style={MainStyle.gridImage} source={require('../assets/wine1.png')}/>
              <Text style={MainStyle.gridText}>Vinho Test 2</Text>
              <Text style={MainStyle.gridText}>$ 18</Text>
            </View>
          </View>
        </ScrollView>
        <BottomTabNavigator navigation={this.props.navigation}/>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  searchField: {
    width: '85%',
    marginRight: 15,
    padding: 5,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WineListScreen);
