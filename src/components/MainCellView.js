import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MainCellView extends Component{
    handlePress(){
        const {toDetail} = this.props;
        toDetail&&toDetail();
    }
    render(){
        const {index} = this.props;
        return(
            <View 
                style={styles.container}
            >
                <Text onPress={()=>{this.handlePress()}}>{`click${index}`}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        borderColor:"#333",
        borderWidth:1,
        padding:10,
    }
})