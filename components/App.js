import React, {Component} from 'react';
import {} from 'react-native';
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import BasicFlatList from './BasicFlatList';
import MoreInfo from './MoreInfo';

const mainStack = createStackNavigator(
    {
        basicFlatList: {
            screen: BasicFlatList,
            navigationOptions: () => ({
                title: 'All Subject',
                headerBackTitle: null
            })
        },
        moreInfo: {
            screen: MoreInfo,
           
        }
    }
);

const MainStackContainer = createAppContainer(mainStack);

export default class App extends Component {
    render() {
        return(
            <MainStackContainer/>
        );
    }
}