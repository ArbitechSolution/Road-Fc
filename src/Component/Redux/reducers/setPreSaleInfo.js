import { GET_PRE_SALE_INFO } from '../type/types';

let initialState = {
    endTime: 0,
    hardCap: 0,
    maxPurchase: 0,
    minPurchase: 0,
    roadPrice: 0,
    roadTotalSupply: 0,
    softCap: 0,
    startTime: 0,
    totalSoldTokens: 0
}


export const setPreSaleInfo = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRE_SALE_INFO:
            return {
                ...state,
                startTime: payload.startTime,
                endTime: payload.endTime,
                softCap: payload.softCap,
                hardCap: payload.hardCap,
                maxPurchase: payload.maxPurchase,
                minPurchase: payload.minPurchase,
                roadPrice: payload.roadPrice,
                roadTotalSupply: payload.roadTotalSupply,
                totalSoldTokens: payload.totalSoldTokens
            }
        default: return { ...state }
    }

}