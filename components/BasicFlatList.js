import React, {Component} from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import {flatListData} from '../data/flatListData';
import HeaderButton from '../drawer/HeaderButton';
import config from '../config';
const colors = [
  '#5B6BC0',
  '#EE534F',
  '#AD1455',
  '#00685A',
  '#1465BE',
  '#5F7D88',
  '#fdecba',
  '#abcdef',
  '#123456',
  '#654321',
];

class FlatListItem extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 150,
          flexDirection: 'column',
          margin: 0.5,
          backgroundColor: colors[this.props.index % colors.length],
        }}
        onPress={() =>
          this.props.navigation.navigate ('moreInfo', {
            name: this.props.item.make, model: this.props.item.model, price: this.props.item.price
          })}
      >
        <Text style={styles.flatListItem}>{this.props.item.make}</Text>
        <Text style={styles.flatListItem}>{this.props.item.model}</Text>
      </TouchableOpacity>
    );
  }
}

//thangnh_nut nhan xo ra drawer
const MenuButton = (props) => (
  <TouchableOpacity onPress = { () => { 
    console.log("Navigation object ", props);
    props.navigation.openDrawer();}}>
  
  <Image style = {{width: 30, height: 30}} source = {require('../images/menu.png')}></Image>
  </TouchableOpacity>
)

// flatlist tong 
export default class BasicFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    }
  }

  componentDidMount () {
    const navigationParam = {role: this.props.navigation.getParam('role'), accountID: this.props.navigation.getParam('accountID')};
    return fetch(config.baseUrl+'timetable?role=${navigationParam.role}&accountID=${navigationParam.accountID}&semesterID=1',{
      method: 'GET'
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState ({
        isLoading: false,
        dataSource: responseJson,
      });
    })
  }
  static navigationOptions = ({navigation}) => ({
      title: 'All subject',
      headerStyle: {
        backgroundColor: 'red',
      },
      headerLeft: <MenuButton navigation = {navigation} />,
      headerTintColor: 'white'
  });

  render () {
    return (
      <View style={styles.main}>
        <FlatList
          data={flatListData}
          renderItem={({item, index}) => {
            return (
              <FlatListItem
                navigation={this.props.navigation}
                item={item}
                index={index}
              />
            );
          }}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  main: {
    flex: 1,
    flexDirection: 'row',
  },
  flatListItem: {
    color: 'white',
    fontSize: 16,
    padding: 10,
  },
});
