import { StackNavigator } from 'react-navigation';
import config from './config.js';

import {MainView,DetailView} from '../views';

const RootNavigator = StackNavigator({
   main:{
    screen:MainView,
    ...config.MainView
   },
   detail:{
    screen:DetailView,
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