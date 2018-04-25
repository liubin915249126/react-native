import React from "react";
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { addNavigationHelpers} from 'react-navigation';
import RootNavigator from './router';
import createStore from './store';
import reducers from '../reducer';
import sagas from '../sagas';
import {PersistGate} from 'redux-persist/lib/integration/react'

import { addListener } from '../reducer/reducer'
const {persistor, store} = createStore(reducers, sagas
    // the initialize actions that will be dispatched after redux/saga middlewares start
    // APP_INIT: handled by main saga common/sagas, to load the sagas
    //[APP_INIT()]
  );
const mapStateToProps = (state) => {
    return {
    // see navigation in reducer
    navigation: state.navigation
  }
};
const RootWithNavigator = connect(mapStateToProps)(({dispatch, navigation}) => {
    return (
      <RootNavigator navigation={addNavigationHelpers({dispatch, state: navigation})}/>
    )
});
class Root extends React.Component{
    render(){
        return (
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <RootWithNavigator />
            </PersistGate>  
          </Provider>
        );
    }
}
export default Root;
// class AppWithNavigationState extends React.Component {
//   static propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     navigation: PropTypes.object.isRequired,
//   };

//   render() {
//     const { dispatch, navigation } = this.props;
//     return (
//           <RootNavigator
//             navigation={{
//               dispatch,
//               state: navigation,
//               addListener,
//             }}
//         />
//     );
//   }
// }
// const  RootWithNavigator = connect(mapStateToProps)(AppWithNavigationState);
// class Root extends React.Component{
//     render(){
//         return (
//           <Provider store={store}>
//             <PersistGate persistor={persistor}>
//               <RootWithNavigator />
//             </PersistGate>  
//           </Provider>
//         );
//     }
// }
// export default Root;