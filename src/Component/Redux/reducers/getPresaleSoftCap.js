import { GET_PRESALE_SOFT_CAP } from "../type/types";
let initialState= {mysoftCap:0};

export const getSoftCap =(state= initialState,action)=>{

    switch(action.type){
        case GET_PRESALE_SOFT_CAP:
        return{
            ...state,
            mysoftCap:action.payload
        }
        default :return {...state}
    }

}