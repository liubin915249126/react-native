import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
import {Dimensions} from 'react-native'
const {height,width} =  Dimensions.get('window');

export default class DetailView extends Component{
   render(){
       return(<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <WebView
            source={{uri:"http://duduying.com/"}}
            style={{width:width,height:height}}
            // automaticallyAdjustContentInsets={false}
            />
       </View>)
   }
} 