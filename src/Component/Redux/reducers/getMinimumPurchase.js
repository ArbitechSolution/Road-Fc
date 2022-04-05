import { GET_MIN_PURCHASE } from "../type/types";
let initialState= {myMinPurchase:0};

export const getMinimumPurchase =(state= initialState,action)=>{

    switch(action.type){
        case GET_MIN_PURCHASE:
        return{
            ...state,
            myMinPurchase:action.payload
        }
        default :return {...state}
    }

}