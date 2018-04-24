import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
// const ScrollableTabView = require('react-native-scrollable-tab-view');
import { DetailView, FlowView, TabBar } from '../views';


export default class TabView extends Component{
    render(){
        return(<ScrollableTabView renderTabBar={(props) => {return <TabBar {...props}/>}}>
            <DetailView />
            <FlowView />
        </ScrollableTabView>)
    }
}