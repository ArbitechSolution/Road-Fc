import {GET_USER_THB_BALANCE} from "../type/types";
let initialState = {thbBal:"0"};



export const getThbbalance =(state= initialState,action)=>{
    // console.log("reducer",action)
    switch (action.type){
        case GET_USER_THB_BALANCE:
        return {
            ...state,
            thbBal:action.payload

        }
        default:return {...state}
    }
}