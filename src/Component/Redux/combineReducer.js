import { combineReducers } from "redux";
import { connectWallet } from "./reducers/getWalletAddrss";
import { getThbbalance } from "./reducers/getUserThbBalance";
import { getThbLpbalance } from "./reducers/getUserThbLpBalance";
import { tAmount } from "./reducers/getUserthbTamount";
import { tAmountLp } from "./reducers/getUserthbLpTamount";
import { getUserBrlpoint } from "./reducers/getUserBrlPoint";
import { getUserBrLplpoint } from "./reducers/getUserBrlLpPoint";
import { getBrawlPointMint } from "./reducers/getUsersbrwalPointMint";
import { setCurrentBpTokens } from "./reducers/getCurrentBpTokens";
import { setMaxBpTokens } from "./reducers/getMaxBpTokens";
import { setPreSaleInfo } from "./reducers/setPreSaleInfo";
import { setUserBalance } from "./reducers/setUserBalance";
import { setUserDepositTime } from "./reducers/setUserDepositTime";
import { setMintingInfo } from "./reducers/setMintingInfo";
import { setUserReward } from "./reducers/setUserReward";
import { setAllNftStakingData } from "./reducers/setAllNfTStakingData";
const allReducer = combineReducers({
  connectWallet: connectWallet,
  getThbbalance: getThbbalance,
  getThbLpbalance: getThbLpbalance,
  tAmount: tAmount,
  tAmountLp: tAmountLp,
  getUserBrlpoint: getUserBrlpoint,
  getUserBrLplpoint: getUserBrLplpoint,
  getBrawlPointMint: getBrawlPointMint,
  setMaxBpTokens: setMaxBpTokens,
  setCurrentBpTokens: setCurrentBpTokens,
  preSaleInfo: setPreSaleInfo,
  userBalance: setUserBalance,
  userDepositTime: setUserDepositTime,
  mintngInfo: setMintingInfo,
  userReward: setUserReward,
  setAllNftStakingData: setAllNftStakingData,
});

export default allReducer;
