import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { backIcon } from '../Images';

export default class TabBar extends Component{
  goBack(){
    const {navigation} = this.props;
    if(navigation.goBack){
        navigation.goBack();
    }
   }
   render(){
       const {activeTab,goToPage} = this.props;
       return(
           <View style={styles.wrap}>
            <Button onPress={()=>{this.goBack();}} style={styles.goBack} title="">
              <Image source={backIcon}/>
            </Button>
            <Button title="detail"></Button>
            <Button title="flow"></Button>
            <Button title="" style={styles.goBack}></Button>
           </View>
       )
   }
}
const backButtonWidth = 47;
const styles = StyleSheet.create({
    wrap:{
       flex:1,
    },
    goBack:{
      width:backButtonWidth,
    }
})