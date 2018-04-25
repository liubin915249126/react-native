// import { combineReducers } from 'redux';
// import { NavigationActions } from 'react-navigation';

// import RootNavigator from '../router/router'

// // Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = RootNavigator.router.getActionForPathAndParams('Main');
// const tempNavState = RootNavigator.router.getStateForAction(firstAction);
// const secondAction = RootNavigator.router.getActionForPathAndParams('Login');
// const initialNavState = RootNavigator.router.getStateForAction(
//   secondAction,
//   tempNavState
// );

// function navigation(state = initialNavState, action) {
//   debugger;
//   let nextState;
//   switch (action.type) {
//     case 'Login':
//       nextState = RootNavigator.router.getStateForAction(
//         NavigationActions.back(),
//         state
//       );
//       break;
//     case 'Logout':
//       nextState = RootNavigator.router.getStateForAction(
//         NavigationActions.navigate({ routeName: 'Login' }),
//         state
//       );
//       break;
//     default:
//       nextState = RootNavigator.router.getStateForAction(action, state);
//       break;
//   }

//   // Simply return the original `state` if `nextState` is null or undefined.
//   return nextState || state;
// }

// const initialAuthState = { isLoggedIn: false };

// function auth(state = initialAuthState, action) {
//   switch (action.type) {
//     case 'Login':
//       return { ...state, isLoggedIn: true };
//     case 'Logout':
//       return { ...state, isLoggedIn: false };
//     default:
//       return state;
//   }
// }


// export default combineReducers({
//   navigation,auth
// });


import { NavigationActions } from 'react-navigation';
import RootNavigator from '../router/router'

// console.log(Routes.router.getStateForAction({}));
// nav to root/home with the default/empty navigation action
const initialState = RootNavigator.router.getStateForAction({});


export default (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};