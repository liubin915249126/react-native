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
   goToPage(type){
     debugger;
     console.log(this)
   }
   render(){
       const {activeTab,goToPage} = this.props;
       return(
           <View style={styles.wrap}>
            <Button onPress={()=>{this.goBack();}} style={styles.goBack} title="back">
              <Image source={backIcon}/>
            </Button>
            <Button title="detail" onPress={()=>{this.goToPage('detail')}} style={styles.center}></Button>
            <Button title="flow" onPress={()=>{this.goToPage('flow')}} style={styles.center}></Button>
            <Button title=" " style={styles.goBack}></Button>
           </View>
       )
   }
}
const backButtonWidth = 47;
const styles = StyleSheet.create({
    wrap:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    goBack:{
      width:backButtonWidth,
    },
    center: {
      flex: 1
    }
})