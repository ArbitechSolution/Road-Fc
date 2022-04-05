import { GET_START_TIME } from "../type/types";
let initialState ={myStartTime:'0'};

export const getStartTime =(state= initialState,action)=>{
    switch(action.type){
        case GET_START_TIME:
        return{
            ...state,
            myStartTime:action.payload
        }
        default :return {...state}
    }

}