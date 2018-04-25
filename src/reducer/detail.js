import {handleActions} from "redux-actions";


export default handleActions({
  ["RECEIVE_DETAIL_DATA"]: (state, action) => {
    const {data} = action
    return ({
    ...state, data
  })},
}, {data:{}});