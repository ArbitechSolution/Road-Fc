import {GET_CURRENT_BP_TOKENS} from "../type/types"
let initialState ={currentBp:'0'};

export const setCurrentBpTokens =(state= initialState,action)=>{
    switch(action.type){
        case GET_CURRENT_BP_TOKENS:
        return{
            ...state,
            currentBp:action.payload
        }
        default :return {...state}
    }

}