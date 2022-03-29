import {GET_USER_MINT_BRAWL_POINTS} from "../type/types";
let initialState = {brawlMintPoints:"0"};



export const getBrawlPointMint =(state= initialState,action)=>{
    // console.log("reducer",action)
    switch (action.type){
        case GET_USER_MINT_BRAWL_POINTS:
        return {
            ...state,
            brawlMintPoints:action.payload

        }
        default:return {...state}
    }
}