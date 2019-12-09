import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  AntDesign,
  FontAwesome,
  Foundation,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { connect } from 'react-redux';

import COLORS from '../constants/Colors';
import MainStyle from '../styles/MainStyle';
import FormStyle from '../styles/FormStyle';

import Loader from '../components/Loader';
import BottomTabNavigator from '../components/BottomTabNavigator';

import * as WineReducer from '../reducers/WineReducer';
import * as UserReducer from '../reducers/UserReducer';

import { getWines, postWine } from '../actions/WineActions';

class WineListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      showCreateWineModal: false,
      refreshing: false,
      wine: {
        designation: null,
        variety: null,
        winery: null,
        country: null,
        province: null,
      }
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props != prevProps) {
      // Wine Added
      if((this.props.message != prevProps.message) && this.props.message != null) {
        Alert.alert(
          this.props.action === 1 ? 'Error' : 'Success',
          this.props.message,
          [
            { text: 'OK', onPress: () => {} },
          ],
          { cancelable: false },
        );

        if(this.props.action === 2) {
          this.props.getWines('');
        }
      }
    }
  }

  componentDidMount() {
    if(this.props.wines == null) {
      this.props.getWines('');
    }
  }

  handleSearchInputChange = () => {
    this.props.getWines(this.state.search);
  }

  toggleCreateWineModal = () => {
    this.setState({ showCreateWineModal: !this.state.showCreateWineModal });
  }

  onCreateWineClick = () => {
    let validation = '';

    if(!this.state.wine.designation) {
      validation = 'Designation is required.\n';
    }

    if(!this.state.wine.variety) {
      validation = validation + 'Variety is required.\n';
    }

    if(!this.state.wine.winery) {
      validation = validation + 'Winery is required.\n';
    }

    if(!this.state.wine.country) {
      validation = validation + 'Country is required.\n';
    }

    if(!this.state.wine.province) {
      validation = validation + 'Province is required.\n';
    }

    if(validation != '') {
      Alert.alert(
        "Validation",
        validation,
        [
          { text: 'OK', onPress: () => {} },
        ],
        { cancelable: false },
      );

      return;
    }

    this.toggleCreateWineModal();

    this.props.postWine(this.state.wine);

    // Reset
    this.setState({
      wine: {
        designation: null,
        variety: null,
        winery: null,
        country: null,
        province: null,
      }
    });
  }

  render() {
    if(this.props.isLoading) {
      return(<Loader/>);
    }

    return(
      <View style={MainStyle.body}>
        <Modal
          isVisible={this.state.showCreateWineModal}
          style={MainStyle.modal}
          onBackButtonPress={this.toggleCreateWineModal}
        >
          <KeyboardAvoidingView behavior="position" enabled>
            <View style={MainStyle.modalLine}>
              <AntDesign name="tag" style={FormStyle.formIcon} size={20} color="#FFF"/>
              <TextInput
                style={FormStyle.whiteInput}
                placeholder='Designation'
                placeholderTextColor='#FFF'
                underlineColorAndroid="transparent"
                onChangeText={(designation) => {this.setState({wine: { ...this.state.wine, designation}})}}
              />
            </View>
            <View style={MainStyle.modalLine}>
              <MaterialCommunityIcons name="format-list-bulleted-type" style={FormStyle.formIcon} size={20} color="#FFF"/>
              <TextInput
                style={FormStyle.whiteInput}
                placeholder='Variety'
                placeholderTextColor='#FFF'
                underlineColorAndroid="transparent"
                onChangeText={(variety) => {this.setState({wine: { ...this.state.wine, variety}})}}
              />
            </View>
            <View style={MainStyle.modalLine}>
              <MaterialCommunityIcons name="home-outline" style={FormStyle.formIcon} size={20} color="#FFF"/>
              <TextInput
                style={FormStyle.whiteInput}
                placeholder='Winery'
                placeholderTextColor='#FFF'
                underlineColorAndroid="transparent"
                onChangeText={(winery) => {this.setState({wine: { ...this.state.wine, winery}})}}
              />
            </View>
            <View style={MainStyle.modalLine}>
              <FontAwesome name="flag" style={FormStyle.formIcon} size={20} color="#FFF"/>
              <TextInput
                style={FormStyle.whiteInput}
                placeholder='Country'
                placeholderTextColor='#FFF'
                underlineColorAndroid="transparent"
                onChangeText={(country) => {this.setState({wine: { ...this.state.wine, country}})}}
              />
            </View>
            <View style={MainStyle.modalLine}>
              <Foundation name="map" style={FormStyle.formIcon} size={20} color="#FFF"/>
              <TextInput
                style={FormStyle.whiteInput}
                placeholder='Province'
                placeholderTextColor='#FFF'
                underlineColorAndroid="transparent"
                onChangeText={(province) => {this.setState({wine: { ...this.state.wine, province}})}}
              />
            </View>
            <View style={MainStyle.modalLine}>
              <TouchableOpacity style={FormStyle.yellowButton} onPress={this.onCreateWineClick}>
                <Text style={[MainStyle.blueText, MainStyle.largeText]}>Create Wine</Text>
              </TouchableOpacity>
            </View>
            <View style={MainStyle.modalLine}>
              <TouchableOpacity style={FormStyle.yellowBorderedButton} onPress={this.toggleCreateWineModal}>
                <Text style={[MainStyle.yellowText, MainStyle.largeText]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </Modal>
        <ScrollView
          style={MainStyle.content}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.handleSearchInputChange()}
            />
          }
        >
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
        {this.props.isLogged &&
          <TouchableOpacity
            style={FormStyle.floatingAction}
            onPress={this.toggleCreateWineModal}
          >
            <AntDesign name="plus" style={Style.plusIcon} size={25} color={COLORS.darkGrey}/>
          </TouchableOpacity>
        }
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
  plusIcon: {
    top: 2,
    left: 1,
  },
});

const mapStateToProps = state => ({
  isLogged: UserReducer.isLogged(state),
  isLoading: WineReducer.isLoading(state),
  wines: WineReducer.getList(state),
  message: WineReducer.getMessage(state),
  action: WineReducer.getAction(state),
});

const mapDispatchToProps = dispatch => ({
  getWines: (search) => dispatch(getWines(search)),
  postWine: (data) => dispatch(postWine(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WineListScreen);
