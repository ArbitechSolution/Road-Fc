import { GET_MAX_PURCHASE } from "../type/types";
let initialState= {myMaxPurchase:0};

export const getMaximumPurchase =(state= initialState,action)=>{

    switch(action.type){
        case GET_MAX_PURCHASE:
        return{
            ...state,
            myMaxPurchase:action.payload
        }
        default :return {...state}
    }

}