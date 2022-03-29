import {GET_USER_THB_LP_BALANCE} from "../type/types";
let initialState = {thbLpBal:"0"};



export const getThbLpbalance =(state= initialState,action)=>{
    // console.log("reducer",action)
    switch (action.type){
        case GET_USER_THB_LP_BALANCE:
        return {
            ...state,
            thbLpBal:action.payload
        }
        default:return {...state}
    }
}