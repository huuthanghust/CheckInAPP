import React, {Component} from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {flatListData} from '../data/flatListData';

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

export default class BasicFlatList extends Component {
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
