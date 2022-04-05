
import {GET_WALLET_ADDRESS} from "../type/types";

let initialState = {acc:"Connect Wallet"};

export const connectWallet = (state = initialState, action) => {


    switch(action.type){
        case GET_WALLET_ADDRESS:
            return {
                ...state,
                acc:action.payload
            }
            default:return  {...state};
    }
}