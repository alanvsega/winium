import React from 'react';
import {
  Alert,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {
  FontAwesome,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import Modal from 'react-native-modal';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';

import COLORS from '../constants/Colors';
import MainStyle from '../styles/MainStyle';
import FormStyle from '../styles/FormStyle';

import Loader from '../components/Loader';
import BottomTabNavigator from '../components/BottomTabNavigator';

import * as UserReducer from '../reducers/UserReducer';
import * as WineReducer from '../reducers/WineReducer';

import { getWineReviews, postReview } from '../actions/WineActions';

class WineDetailsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wine: null,
      showReviewModal: false,
      review: {
        description: null,
        points: 0,
        user: null,
        wine: null,
      }
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props != prevProps) {
      // Review Added
      if((this.props.message != prevProps.message) && this.props.message != null && this.props.action === 3) {
        this.props.getWineReviews(this.state.wine._id);
      }
    }
  }

  componentDidMount() {
    const wine = this.props.navigation.getParam('wine', null);

    if(wine) {
      this.props.getWineReviews(wine._id);
      this.setState({ wine });
    }
  }

  toggleReviewWineModal = () => {
    this.setState({
      showReviewModal: !this.state.showReviewModal,
      review: {
        description: null,
        points: 0,
        user: this.props.user._id,
        wine: this.state.wine._id,
      }
    });
  }

  onSubmitReviewClick = () => {
    if(!this.state.review.description) {
      Alert.alert(
        "Validation",
        "Description is required.",
        [
          { text: 'OK', onPress: () => {} },
        ],
        { cancelable: false },
      );

      return;
    }

    Alert.alert(
      "Adding Review",
      "Are you sure?",
      [
        { text: 'No', onPress: () => {} },
        { text: 'Yes', onPress: () => {
          this.props.postReview(this.state.review);
          // Reset
          this.toggleReviewWineModal();
        }},
      ],
      { cancelable: false },
    );
  }

  render() {
    if(this.props.isLoading || this.state.wine == null) {
      return(<Loader/>);
    }

    return(
      <View style={MainStyle.blueBody}>
        <Modal
          isVisible={this.state.showReviewModal}
          style={MainStyle.modal}
          onBackButtonPress={this.toggleReviewWineModal}
        >
          <KeyboardAvoidingView behavior="position" enabled>
            <View style={MainStyle.modalLine}>
              <StarRating
                disabled={false}
                maxStars={10}
                rating={this.state.review.points}
                emptyStarColor={COLORS.yellow}
                fullStarColor={COLORS.yellow}
                halfStarColor={COLORS.yellow}
                selectedStar={(points) => {this.setState({review: { ...this.state.review, points}})}}
              />
            </View>
            <View style={MainStyle.modalLine}>
              <FontAwesome name="comment" style={FormStyle.formIcon} size={20} color="#FFF"/>
              <TextInput
                style={FormStyle.whiteInput}
                placeholder='Describe this product'
                placeholderTextColor='#FFF'
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={6}
                onChangeText={(description) => {this.setState({review: { ...this.state.review, description}})}}
              />
            </View>
            <View style={MainStyle.modalLine}>
              <TouchableOpacity style={FormStyle.yellowButton} onPress={this.onSubmitReviewClick}>
                <Text style={[MainStyle.blueText, MainStyle.largeText]}>Submit Review</Text>
              </TouchableOpacity>
            </View>
            <View style={MainStyle.modalLine}>
              <TouchableOpacity style={FormStyle.yellowBorderedButton} onPress={this.toggleReviewWineModal}>
                <Text style={[MainStyle.yellowText, MainStyle.largeText]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </Modal>
        <ScrollView>
          <View style={MainStyle.detailsItem}>
            <View style={MainStyle.detailsScore}>
              <Text style={MainStyle.gridText}>{this.state.wine.average}</Text>
            </View>
            <Image style={MainStyle.detailsImage} source={require('../assets/wine.png')}/>
            <Text style={MainStyle.detailsText}>{this.state.wine.designation}</Text>
            <Text style={MainStyle.detailsText2}>{this.state.wine.variety}</Text>
            <View style={MainStyle.itemLine}>
              <MaterialCommunityIcons
                name='home-outline'
                size={16}
                style={Style.icon}
              />
              <Text style={MainStyle.detailsText3}>{this.state.wine.winery}</Text>
            </View>
            {this.state.wine.country != null &&
              <View style={MainStyle.itemLine}>
                <FontAwesome
                  name='flag'
                  size={16}
                  style={Style.icon}
                />
                <Text style={MainStyle.detailsText3}>{this.state.wine.country}</Text>
              </View>
            }
            {this.state.wine.province != null &&
              <View style={MainStyle.itemLine}>
                <Foundation
                  name='map'
                  size={16}
                  style={Style.icon}
                />
                <Text style={MainStyle.detailsText3}>{this.state.wine.province}</Text>
              </View>
            }
            {this.state.wine.region_1 != null &&
              <View style={MainStyle.itemLine}>
                <MaterialIcons
                  name='place'
                  size={16}
                  style={Style.icon}
                />
                <Text style={MainStyle.detailsText3}>{this.state.wine.region_1}</Text>
              </View>
            }
            {this.state.wine.region_2 != null &&
              <View style={MainStyle.itemLine}>
                <MaterialIcons
                  name='place'
                  size={16}
                  style={Style.icon}
                />
                <Text style={MainStyle.detailsText3}>{this.state.wine.region_2}</Text>
              </View>
            }
            {this.state.wine.region_3 != null &&
              <View style={MainStyle.itemLine}>
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
              <TouchableOpacity style={FormStyle.yellowButton} onPress={this.toggleReviewWineModal}>
                <Text style={[MainStyle.blueText, MainStyle.largeText]}>Review this wine</Text>
              </TouchableOpacity>
            }
            {this.props.reviews != null && this.props.reviews.map((review, i) =>
              <View key={i} style={MainStyle.reviewItem}>
                <View style={MainStyle.reviewHeader}>
                  <View style={MainStyle.reviewScore}>
                    <Text style={MainStyle.reviewScoreText}>{review.points}</Text>
                  </View>
                  <Text style={MainStyle.gridText}>{review.user.name}</Text>
                </View>
                <View style={MainStyle.reviewContent}>
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
});

const mapStateToProps = state => ({
  isLogged: UserReducer.isLogged(state),
  user: UserReducer.getUser(state),
  isLoading: WineReducer.isLoading(state),
  reviews: WineReducer.getSelectedReviews(state),
  message: WineReducer.getMessage(state),
  action: WineReducer.getAction(state),
});

const mapDispatchToProps = dispatch => ({
  getWineReviews: (wineId) => dispatch(getWineReviews(wineId)),
  postReview: (data) => dispatch(postReview(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WineDetailsScreen);
