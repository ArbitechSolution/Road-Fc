import { GET_ROAD_PRICE } from "../type/types";
let initialState ={roadPrice:'0'};

export const getRoadPrice =(state= initialState,action)=>{
    switch(action.type){
        case GET_ROAD_PRICE:
        return{
            ...state,
            roadPrice:action.payload
        }
        default :return {...state}
    }

}