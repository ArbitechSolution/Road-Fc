
import {GET_USER_TAMOUNT} from "../type/types"
let initialState ={tamount:'0'};

export const tAmount =(state= initialState,action)=>{
    switch(action.type){
        case GET_USER_TAMOUNT:
        return{
            ...state,
            tamount:action.payload
        }
        default :return {...state}
    }

}