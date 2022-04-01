import { GET_PRESALE_HARD_CAP } from "../type/types";
let initialState= {myHardCap:0};

export const getHardCap =(state= initialState,action)=>{

    switch(action.type){
        case GET_PRESALE_HARD_CAP:
        return{
            ...state,
            myHardCap:action.payload
        }
        default :return {...state}
    }

}