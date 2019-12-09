import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';

import MainStyle from '../styles/MainStyle';
import COLORS from '../constants/Colors';

import Loader from '../components/Loader';
import BottomTabNavigator from '../components/BottomTabNavigator';

import * as WineReducer from '../reducers/WineReducer';

import { getWines } from '../actions/WineActions';

class WineListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: null,
    };
  }

  componentDidMount() {
    if(this.props.wines == null) {
      this.props.getWines('');
    }
  }

  handleSearchInputChange = () => {
    this.props.getWines(this.state.search);
  }

  render() {
    if(this.props.isLoading) {
      return(<Loader/>);
    }

    return(
      <View style={MainStyle.body}>
        <ScrollView style={MainStyle.content}>
          <View style={MainStyle.row}>
            <TextInput
              style={Style.searchField}
              placeholder='Type in to search...'
              placeholderTextColor={COLORS.mediumGrey}
              onChangeText={(search) => {
                this.setState({ search });

                if (this.searchWaiting) {
                  clearTimeout(this.searchWaiting);
                }

                this.searchWaiting = setTimeout(() => {
                  this.searchWaiting = null;
                  this.handleSearchInputChange();
                }, 1000);
              }}
              value={this.state.search}
            />
            <FontAwesome
              name="sliders"
              size={32}
              color="black"
            />
          </View>
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
  isLoading: WineReducer.isLoading(state),
  wines: WineReducer.getList(state),
});

const mapDispatchToProps = dispatch => ({
  getWines: (search) => dispatch(getWines(search)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WineListScreen);
