import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import MainCellView from '../components/MainCellView.js'

export default class MainView extends Component{
   render(){
       const { navigate } = this.props.navigation;
       return(<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           {
               [1,2].map((item,index)=>{
                   return <MainCellView 
                            index={item} 
                            key={item}
                            toDetail={()=>{
                                navigate('loan', { user:item})
                            }}
                        />
               }).concat([3,4].map((item,index)=>{
                return <MainCellView 
                         index={item} 
                         key={item}
                         toDetail={()=>{
                            navigate('tabpage', { user:item})
                         }}
                     />
            }))
           }
           <Button title="侧边栏" onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}></Button>
       </View>)
   }
} 