    import {GET_MAX_BP_TOKENS} from "../type/types"
let initialState ={maxBpTokens:"0"};

export const setMaxBpTokens =(state= initialState,action)=>{
    switch(action.type){
        case GET_MAX_BP_TOKENS:
        return{
            ...state,
            maxBpTokens:action.payload
        }
        default :return {...state}
    }

}