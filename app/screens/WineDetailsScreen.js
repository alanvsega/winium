import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  FontAwesome,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { connect } from 'react-redux';

import MainStyle from '../styles/MainStyle';
import FormStyle from '../styles/FormStyle';
import COLORS from '../constants/Colors';

import Loader from '../components/Loader';
import BottomTabNavigator from '../components/BottomTabNavigator';

import * as UserReducer from '../reducers/UserReducer';
import * as WineReducer from '../reducers/WineReducer';

import { getWineReviews } from '../actions/WineActions';

class WineDetailsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wine: null,
    };
  }

  componentDidMount() {
    const wine = this.props.navigation.getParam('wine', null);

    if(wine) {
      this.props.getWineReviews(wine._id);
      this.setState({ wine });
    }
  }

  render() {
    if(this.props.isLoading || this.state.wine == null) {
      return(<Loader/>);
    }

    return(
      <View style={MainStyle.blueBody}>
        <ScrollView>
          <View style={MainStyle.detailsItem}>
            <View style={MainStyle.detailsScore}>
              <Text style={MainStyle.gridText}>{this.state.wine.average}</Text>
            </View>
            <Image style={MainStyle.detailsImage} source={require('../assets/wine.png')}/>
            <Text style={MainStyle.detailsText}>{this.state.wine.designation}</Text>
            <Text style={MainStyle.detailsText2}>{this.state.wine.variety}</Text>
            <View style={Style.itemLine}>
              <MaterialCommunityIcons
                name='home-outline'
                size={16}
                style={Style.icon}
              />
              <Text style={MainStyle.detailsText3}>{this.state.wine.winery}</Text>
            </View>
            {this.state.wine.country != null &&
              <View style={Style.itemLine}>
                <FontAwesome
                  name='flag'
                  size={16}
                  style={Style.icon}
                />
                <Text style={MainStyle.detailsText3}>{this.state.wine.country}</Text>
              </View>
            }
            {this.state.wine.province != null &&
              <View style={Style.itemLine}>
                <Foundation
                  name='map'
                  size={16}
                  style={Style.icon}
                />
                <Text style={MainStyle.detailsText3}>{this.state.wine.province}</Text>
              </View>
            }
            {this.state.wine.region_1 != null &&
              <View style={Style.itemLine}>
                <MaterialIcons
                  name='place'
                  size={16}
                  style={Style.icon}
                />
                <Text style={MainStyle.detailsText3}>{this.state.wine.region_1}</Text>
              </View>
            }
            {this.state.wine.region_2 != null &&
              <View style={Style.itemLine}>
                <MaterialIcons
                  name='place'
                  size={16}
                  style={Style.icon}
                />
                <Text style={MainStyle.detailsText3}>{this.state.wine.region_2}</Text>
              </View>
            }
            {this.state.wine.region_3 != null &&
              <View style={Style.itemLine}>
                <MaterialIcons
                  name='place'
                  size={16}
                  style={Style.icon}
                />
                <Text style={MainStyle.detailsText3}>{this.state.wine.region_3}</Text>
              </View>
            }
            {/* <Text style={MainStyle.gridText}>$ 110</Text> */}
          </View>
          <View style={MainStyle.reviews}>
            <Text style={MainStyle.darkTitle}>Reviews & Ratings</Text>
            {this.props.isLogged &&
              <TouchableOpacity style={FormStyle.yellowButton}>
                <Text style={[MainStyle.blueText, MainStyle.largeText]}>Review this wine</Text>
              </TouchableOpacity>
            }
            {this.props.reviews != null && this.props.reviews.map((review, i) =>
              <View key={i} style={Style.reviewItem}>
                <View style={Style.reviewHeader}>
                  <View style={Style.reviewScore}>
                    <Text style={Style.reviewScoreText}>{review.points}</Text>
                  </View>
                  <Text style={MainStyle.gridText}>{review.user.name}</Text>
                </View>
                <View style={Style.reviewContent}>
                  <Text style={MainStyle.leftText}>{review.description}</Text>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
        <BottomTabNavigator navigation={this.props.navigation}/>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  icon: {
    marginTop: 2,
    marginRight: 7,
    color: '#FFF',
  },
  itemLine: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },
  reviewItem: {
    width: '100%',
    borderBottomColor: COLORS.lightGrey,
    borderBottomWidth: 3,
    padding: 10,
    marginTop: 10,
  },
  reviewHeader:{
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  reviewContent:{
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingVertical: 6,
  },
  reviewScore: {
    backgroundColor: COLORS.mediumBlue,
    position: 'absolute',
    left: 0,
    top: 0,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  reviewScoreText: {
    fontSize: 15,
    color: '#FFF',
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  isLogged: UserReducer.isLogged(state),
  isLoading: WineReducer.isLoading(state),
  reviews: WineReducer.getSelectedReviews(state),
});

const mapDispatchToProps = dispatch => ({
  getWineReviews: (wineId) => dispatch(getWineReviews(wineId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WineDetailsScreen);
