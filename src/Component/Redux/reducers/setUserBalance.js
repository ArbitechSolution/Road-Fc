import {GET_WALLET_BALANCE} from '../type/types';

let initialState ={
    userBalance :0
}

export const setUserBalance = (state= initialState, {type,payload}) => {
    switch(type){
        case GET_WALLET_BALANCE:
            return {
                ...state,
                userBalance: payload
            }
            default : return {...state}
    }

}