import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class TabBar extends Component{
   goback(){
       debugger;
       this.prpos
   }
   render(){
       const {activeTab,goToPage} = this.props;
       return(
           <View>
            <Button title="back" onPress={()=>{this.goback();}}></Button>
            <Button title="detail"></Button>
            <Button title="flow"></Button>
           </View>
           
       )
   }
} 