import { GET_ROAD_TOTALSUPPLY } from "../type/types";
let initialState ={myroadTotalSupply:'0'};

export const getRoadTotalSupply =(state= initialState,action)=>{
    switch(action.type){
        case GET_ROAD_TOTALSUPPLY:
        return{
            ...state,
            myroadTotalSupply:action.payload
        }
        default :return {...state}
    }

}