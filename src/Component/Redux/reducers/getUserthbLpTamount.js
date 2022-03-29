
import {GET_USER_TAMOUNT_LP} from "../type/types"
let initialState ={tamountlp:'0'};

export const tAmountLp =(state= initialState,action)=>{
    switch(action.type){
        case GET_USER_TAMOUNT_LP:
        return{
            ...state,
            tamountlp:action.payload
        }
        default :return {...state}
    }

}