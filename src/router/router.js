import { StackNavigator,TabNavigator,addNavigationHelpers,DrawerNavigator} from 'react-navigation';
import config from './config.js';
import {StyleSheet} from 'react-native'
import {MainView,DetailView,FlowView,TabView} from '../views';

const detailStyles = StyleSheet.create({
    header:{
        position:'absolute',
    },
    tabHeader:{
        display:'none',
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


const MainNavigator = StackNavigator({
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
   },
   tabpage:{
    screen:TabView,
    navigationOptions:({navigation})=>({
        headerStyle:detailStyles.tabHeader
        // headerStyle:detailStyles.header
    }),
    ...config.TabView
  },
})
const RootNavigator = DrawerNavigator({
   Main:{
       screen:MainNavigator,
   },
   Drawer:{
       screen:FlowView,
   }
},
{
    drawerWidth: 220, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
        // initialRouteName: MinePage, // 默认页面组件
        activeTintColor: '#008AC9',  // 选中文字颜色
        activeBackgroundColor: '#f5f5f5', // 选中背景颜色
        inactiveTintColor: '#000',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    }
}
)

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