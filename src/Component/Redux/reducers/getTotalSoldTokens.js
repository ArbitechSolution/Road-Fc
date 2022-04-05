import { GET_TOTAL_SOLD_TOKENS } from "../type/types";
let initialState= {myTotalSold:0};

export const getTotalSoldTokens =(state= initialState,action)=>{

    switch(action.type){
        case GET_TOTAL_SOLD_TOKENS:
        return{
            ...state,
            myTotalSold:action.payload
        }
        default :return {...state}
    }

}