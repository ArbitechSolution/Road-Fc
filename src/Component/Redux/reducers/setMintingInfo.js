
import {MINTING_INFO} from '../type/types';

let initalState = {
    energyPoint:"0",
    minintPrice:0
}

export const setMintingInfo = (state=initalState, {type,payload}) => {
        switch(type){
            case MINTING_INFO:
                return {
                    ...state,
                    energyPoint:payload.energyBal,
                    minintPrice:payload.minintPrice
                }
            default : return{...state}
        }
}