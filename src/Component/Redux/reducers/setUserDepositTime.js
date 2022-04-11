import {USER_DEPOSIT_TIME} from '../type/types';

let initialState ={
    userDepositTime:{
    days:0,
    hours:0,
    minutes:0,
    seconds:0
}};

export const setUserDepositTime = (state=initialState, {type,payload} ) => {
    switch(type){
        case USER_DEPOSIT_TIME:
        return{
            ...state,
            userDepositTime:payload
        }
        default :return {...state}
    }
}