
import {GET_USER_BRL_LP} from "../type/types"
let initialState ={brlLPPoint:'0'};

export const getUserBrLplpoint =(state= initialState,action)=>{
    switch(action.type){
        case GET_USER_BRL_LP:
        return{
            ...state,
            brlLPPoint:action.payload
        }
        default :return {...state}
    }

}