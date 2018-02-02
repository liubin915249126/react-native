import { StackNavigator,TabNavigator} from 'react-navigation';
import config from './config.js';
import {StyleSheet} from 'react-native'
import {MainView,DetailView,FlowView} from '../views';

const detailStyles = StyleSheet.create({
    header:{
        position:'absolute',
    }
})

const DetailTab = TabNavigator({
    detail:{
        screen:DetailView,
        navigationOptions:({navigation})=>({
            // tabBarIcon:({focused,tintColor})=>(
            // )
        }),
        ...config.DetailView
    },
    flow:{
        screen:FlowView,
        ...config.FlowView
    }
},{
    tabBarPosition:'bottom'
})


const RootNavigator = StackNavigator({
   main:{
    screen:MainView,
    ...config.MainView
   },
   loan:{
    screen:DetailTab,
    navigationOptions:({navigation})=>({
        // headerStyle:detailStyles.header
    }),
    ...config.DetailView
   }
})


// {
//     onTransitionStart: (to,from)=>{
//       if(Platform.OS === 'android'){
//         BackHandler.addEventListener('hardwareBackPress', () => handleBack(to,from,"start"))
//       }
//     },
//     onTransitionEnd: (to,from)=>{ 
//       if(Platform.OS === 'android'){
//         BackHandler.removeEventListener('hardwareBackPress', () => handleBack(to,from,"end"))
//       }
//     }
// })

export default RootNavigator;