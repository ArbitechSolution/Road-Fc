import {combineReducers} from 'redux';
import {connectWallet,} from './reducers/getWalletAddrss'
import {getThbbalance} from './reducers/getUserThbBalance'
import{getThbLpbalance} from './reducers/getUserThbLpBalance'
import {tAmount} from './reducers/getUserthbTamount'
import {tAmountLp} from './reducers/getUserthbLpTamount'
import {getUserBrlpoint} from './reducers/getUserBrlPoint'
import{getUserBrLplpoint} from './reducers/getUserBrlLpPoint'
import {getBrawlPointMint} from './reducers/getUsersbrwalPointMint'
import {setCurrentBpTokens} from "./reducers/getCurrentBpTokens";
import { setMaxBpTokens } from './reducers/getMaxBpTokens';
import {getRoadPrice} from './reducers/getRoadPrice'
import {getRoadTotalSupply} from './reducers/getRoadTotalSupply';
import {getHardCap} from './reducers/getPresaleHardCap';
import {getSoftCap} from './reducers/getPresaleSoftCap';
import {getMinimumPurchase} from './reducers/getMinimumPurchase';
import {getMaximumPurchase} from './reducers/getMaximumPurchase';
import {getTotalSoldTokens} from './reducers/getTotalSoldTokens';
import {getStartTime} from './reducers/getStartTime'
const allReducer = combineReducers({

    connectWallet:connectWallet,
    getThbbalance:getThbbalance,
    getThbLpbalance:getThbLpbalance,
    tAmount:tAmount,
    tAmountLp:tAmountLp,
    getUserBrlpoint:getUserBrlpoint,
    getUserBrLplpoint:getUserBrLplpoint,
    getBrawlPointMint:getBrawlPointMint,
    setMaxBpTokens:setMaxBpTokens,
    setCurrentBpTokens:setCurrentBpTokens,
    getRoadPrice:getRoadPrice,
    getRoadTotalSupply:getRoadTotalSupply,
    getHardCap:getHardCap,
    getSoftCap:getSoftCap,
    getMinimumPurchase:getMinimumPurchase,
    getMaximumPurchase:getMaximumPurchase,
    getTotalSoldTokens:getTotalSoldTokens,
    getStartTime:getStartTime

});

export default allReducer;