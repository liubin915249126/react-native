import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainCellView from '../components/MainCellView.js'

export default class MainView extends Component{
   render(){
       const { navigate } = this.props.navigation;
       return(<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           {
               [1,2,3,4].map((item,index)=>{
                   return <MainCellView 
                            index={item} 
                            key={index}
                            toDetail={()=>{
                                navigate('loan', { user:item})
                            }}
                        />
               })
           }
       </View>)
   }
} 