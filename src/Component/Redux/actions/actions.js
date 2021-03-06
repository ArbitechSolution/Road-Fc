import {
  GET_USER_THB_BALANCE,
  GET_WALLET_ADDRESS,
  GET_USER_THB_LP_BALANCE,
  GET_USER_BRL,
  GET_USER_TAMOUNT,
  GET_USER_TAMOUNT_LP,
  GET_USER_BRL_LP,
  GET_USER_MINT_BRAWL_POINTS,
  GET_CURRENT_BP_TOKENS,
  GET_MAX_BP_TOKENS,
  GET_PRE_SALE_INFO,
  GET_WALLET_BALANCE,
  USER_DEPOSIT_TIME,
  MINTING_INFO,
  REWARD_OF_USER,
} from "../type/types";
import { loadWeb3 } from "../../../Component/Api/myApi";
import Web3 from "web3";
import { thbTokenAddress, thbTokenAbi } from "../../Utils/roadFcToken";
import {
  thbLpTokenAddress,
  thbLpTokenAbi,
} from "../../../Component/Utils/ThbLpToken";
import {
  stakingContractAddress,
  stakingContractAbi,
} from "../../../Component/Utils/Staking";
import {
  nftContratAddress,
  nftContractAbi,
} from "../../../Component/Utils/Nft";
import {
  preSaleContractAbi,
  preSaleContractAddress,
} from "../../Utils/preSale";
import {
  road_Nft_Staking_Address,
  road_Nft_Staking_Abi,
} from "../../Utils/Road_Nft_Staking";
const webSupply = new Web3("https://api.avax-test.network/ext/bc/C/rpc");

let thbTokenContractOf = new webSupply.eth.Contract(
  thbTokenAbi,
  thbTokenAddress
);
let thbLpTokenContractOf = new webSupply.eth.Contract(
  thbLpTokenAbi,
  thbLpTokenAddress
);

let presaleContractOf = new webSupply.eth.Contract(
  preSaleContractAbi,
  preSaleContractAddress
);

export const getWallet = () => async (dispatch) => {

  let address = await loadWeb3();
  dispatch({
    type: GET_WALLET_ADDRESS,
    payload: address,
  });
};
export const getUserThbBalance = () => async (dispatch) => {

  let address = await loadWeb3();
  if (address == "No Wallet") {
    
  } else if (address == "Wrong Network") {
    
  } else {
   

    const web3 = window.web3;
    let userthbBalance = await thbTokenContractOf.methods
      .balanceOf(address)
      .call();
    userthbBalance = web3.utils.fromWei(userthbBalance);
    userthbBalance = parseInt(userthbBalance);
    
    dispatch({
      type: GET_USER_THB_BALANCE,
      payload: userthbBalance,
    });
  }
};

export const getUserThbLpBalance = () => async (dispatch) => {

  let address = await loadWeb3();
  if (address == "No Wallet") {
 

  } else if (address == "Wrong Network") {

  } else {
    const web3 = window.web3;
    let userThbLpBalance = await thbLpTokenContractOf.methods
      .balanceOf(address)
      .call();
    userThbLpBalance = web3.utils.fromWei(userThbLpBalance);
    userThbLpBalance = parseInt(userThbLpBalance);
 

    dispatch({
      type: GET_USER_THB_LP_BALANCE,
      payload: userThbLpBalance,
    });
  }
};

export const getUserTHbTamount = () => async (dispatch) => {

  let address = await loadWeb3();
  if (address == "No Wallet") {

  } else if (address == "Wrong Network") {

  } else {
    const web3 = window.web3;
    let stakingCOntractOf = new web3.eth.Contract(
      stakingContractAbi,
      stakingContractAddress
    );
    let userThbData = await stakingCOntractOf.methods.User(address).call();
    let tAmount = userThbData.Tamount;
    tAmount = web3.utils.fromWei(tAmount);
    tAmount = parseFloat(tAmount);
    dispatch({
      type: GET_USER_TAMOUNT,
      payload: tAmount,
    });
  }
};

export const getUserTHbLPTamount = () => async (dispatch) => {
  let address = await loadWeb3();
  if (address == "No Wallet") {
  } else if (address == "Wrong Network") {
  } else {
    const web3 = window.web3;
    let stakingCOntractOf = new web3.eth.Contract(
      stakingContractAbi,
      stakingContractAddress
    );
    let userThbLpData = await stakingCOntractOf.methods.UserLP(address).call();
    let tAmountlp = userThbLpData.Tamount;
    tAmountlp = web3.utils.fromWei(tAmountlp);
    tAmountlp = parseFloat(tAmountlp);
    dispatch({
      type: GET_USER_TAMOUNT_LP,
      payload: tAmountlp,
    });
  }
};
export const getUserBrl = () => async (dispatch) => {
  let address = await loadWeb3();
  if (address == "No Wallet") {
  } else if (address == "Wrong Network") {
  } else {
    const web3 = window.web3;
    let stakingCOntractOf = new web3.eth.Contract(
      stakingContractAbi,
      stakingContractAddress
    );
    let userBrawlPoint = await stakingCOntractOf.methods
      .RPcalculator(address)
      .call();
    userBrawlPoint = web3.utils.fromWei(userBrawlPoint);
    userBrawlPoint = parseInt(userBrawlPoint);

    dispatch({
      type: GET_USER_BRL,
      payload: userBrawlPoint,
    });
  }
};

export const getUserBrLp = () => async (dispatch) => {
  let address = await loadWeb3();
  if (address == "No Wallet") {
  } else if (address == "Wrong Network") {
  } else {
    const web3 = window.web3;
    let stakingCOntractOf = new web3.eth.Contract(
      stakingContractAbi,
      stakingContractAddress
    );
    let userBrawlLpPoint = await stakingCOntractOf.methods
      .RPcalculatorforLP(address)
      .call();
    userBrawlLpPoint = web3.utils.fromWei(userBrawlLpPoint);
    userBrawlLpPoint = parseInt(userBrawlLpPoint);

    dispatch({
      type: GET_USER_BRL_LP,
      payload: userBrawlLpPoint,
    });
  }
};
export const getUserBrawlMintPoint = () => async (dispatch) => {
  let address = await loadWeb3();
  if (address == "No Wallet") {
  } else if (address == "Wrong Network") {
  } else {
    const web3 = window.web3;
    let stakingCOntractOf = new web3.eth.Contract(
      stakingContractAbi,
      stakingContractAddress
    );
    let bpCalculator = await stakingCOntractOf.methods.balances(address).call();
    bpCalculator = web3.utils.fromWei(bpCalculator);
    bpCalculator = parseInt(bpCalculator);

    dispatch({
      type: GET_USER_MINT_BRAWL_POINTS,
      payload: bpCalculator,
    });
  }
};

export const getCurrentBpTokens = () => async (dispatch) => {
  const web3 = window.web3;
  let stakingCOntractOf = new web3.eth.Contract(
    stakingContractAbi,
    stakingContractAddress
  );
  let currentbp = await stakingCOntractOf.methods.currentBP().call();

  dispatch({
    type: GET_CURRENT_BP_TOKENS,
    payload: currentbp,
  });
};
export const getMaxBpTokens = () => async (dispatch) => {
  const web3 = window.web3;
  let stakingCOntractOf = new web3.eth.Contract(
    stakingContractAbi,
    stakingContractAddress
  );
  let maxbp = await stakingCOntractOf.methods.maxBPToken().call();

  dispatch({
    type: GET_MAX_BP_TOKENS,
    payload: maxbp,
  });
};

export const getPreSaleInfo = () => async (dispatch) => {
  try {
    let preSaleInfo = {};
    
    let roadPrice = await presaleContractOf.methods.price().call();
    roadPrice = webSupply.utils.fromWei(roadPrice);
    preSaleInfo = { ...preSaleInfo, roadPrice: roadPrice };

    let hardCap = await presaleContractOf.methods.hardCap().call();
    hardCap = webSupply.utils.fromWei(hardCap);
    preSaleInfo = { ...preSaleInfo, hardCap: hardCap };

    let softCap = await presaleContractOf.methods.softCap().call();
    softCap = webSupply.utils.fromWei(softCap);
    preSaleInfo = { ...preSaleInfo, softCap: softCap };

    let minPurchase = await presaleContractOf.methods.minimum().call();
    minPurchase = webSupply.utils.fromWei(minPurchase);
    preSaleInfo = { ...preSaleInfo, minPurchase: minPurchase };

    let maxPurchase = await presaleContractOf.methods.maximum().call();
    maxPurchase = webSupply.utils.fromWei(maxPurchase);
    preSaleInfo = { ...preSaleInfo, maxPurchase: maxPurchase };

    let totalSoldTokens = await presaleContractOf.methods.totalSold().call();
    totalSoldTokens = webSupply.utils.fromWei(totalSoldTokens);
    preSaleInfo = { ...preSaleInfo, totalSoldTokens: totalSoldTokens };

    let startTime = await presaleContractOf.methods.startTime().call();
    preSaleInfo = { ...preSaleInfo, startTime: startTime };

    let endTime = await presaleContractOf.methods.startTime().call();
    preSaleInfo = { ...preSaleInfo, endTime: endTime };
    let roadTotalSupply = await thbTokenContractOf.methods.totalSupply().call();
    roadTotalSupply = webSupply.utils.fromWei(roadTotalSupply);
    preSaleInfo = { ...preSaleInfo, roadTotalSupply: roadTotalSupply };
    dispatch({
      type: GET_PRE_SALE_INFO,
      payload: preSaleInfo,
    });
  } catch (e) {
    console.log("error while get preSaleInfo", e);
  }
};

export const getUserBalance = () => async (dispatch) => {
  try {
    let address = await loadWeb3();
    if (
      address != "No Wallet" &&
      address != "Wrong Network" &&
      address != "Connect Wallet"
    ) {
      const web3 = window.web3;
      let bal = await web3.eth.getBalance(address);
      bal = web3.utils.fromWei(bal);
      bal = parseFloat(bal).toFixed(3);
      dispatch({
        type: GET_WALLET_BALANCE,
        payload: bal,
      });
    }
  } catch (e) {
    console.error("error while get balance", e);
  }
};

export const getUserDepositTime = () => async (dispatch) => {
  let decidedVar = true;
  let tiemObj = {};

  let address = await loadWeb3();
  if (address == "No Wallet") {
  } else if (address == "Wrong Network") {
  } else {
    let timestamp = Math.floor(new Date().getTime() / 1000);
    let web3 = window.web3;
    let stakingCOntractOf = new web3.eth.Contract(
      stakingContractAbi,
      stakingContractAddress
    );
    let lpLockTime = await stakingCOntractOf.methods.LPlocktime().call();
    let userLP = await stakingCOntractOf.methods.UserLP(address).call();
    let remainingTime;
    let depositTimes = userLP.Deposit_time;
    let addedTime = parseInt(depositTimes) + parseInt(lpLockTime);
    if (timestamp < addedTime) {
      remainingTime = parseInt(addedTime) - parseInt(timestamp);

      if (parseInt(remainingTime) > 0) {
        let d = Math.floor(remainingTime / (3600 * 24));
        let h = Math.floor((remainingTime % (3600 * 24)) / 3600);
        let m = Math.floor((remainingTime % 3600) / 60);
        let s = Math.floor(remainingTime % 60);

        if (d > 0) {
          tiemObj = { ...tiemObj, days: d };
        } else {
          tiemObj = { ...tiemObj, days: 0 };
        }
        if (h > 0) {
          tiemObj = { ...tiemObj, hours: h };
        } else {
          tiemObj = { ...tiemObj, hours: 0 };

        }
        if (m > 0) {
          tiemObj = { ...tiemObj, minutes: m };
        } else {
          tiemObj = { ...tiemObj, minutes: 0 };
        }
        if (s > 0) {
          tiemObj = { ...tiemObj, seconds: s };
        } else {
          tiemObj = { ...tiemObj, seconds: 0 };
        }
      }
    } else {
      remainingTime = 0;
      tiemObj = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

    }

    dispatch({
      type: USER_DEPOSIT_TIME,
      payload: tiemObj,
    });
  }
};



export const getTotalEnergy = () => async (dispatch) => {
  try {
    let address = await loadWeb3();
    if (address == "No Wallet") {
  
    } else if (address == "Wrong Network") {

    } else {
      let mintInfo = {};
      const web3 = window.web3;
      const nftContract = new web3.eth.Contract(
        nftContractAbi,
        nftContratAddress
      );
      let energyBal = await nftContract.methods.checkBPEnergy(address).call();
      energyBal = web3.utils.fromWei(energyBal);
      energyBal = parseFloat(energyBal);
      mintInfo = { ...mintInfo, energyBal };
      let minintPrice = await nftContract.methods.MinitngPrice().call();
      minintPrice = web3.utils.fromWei(minintPrice);
      minintPrice = parseFloat(minintPrice);
      mintInfo = { ...mintInfo, minintPrice };
      dispatch({
        type: MINTING_INFO,
        payload: mintInfo,
      });
    }
  } catch (e) {
    console.error("error while get total energy", e);
  }
};

export const getRewardOfUser = () => async (dispatch) => {
  try {
    let address = await loadWeb3();
    if (address == "No Wallet") {

    } else if (address == "Wrong Network") {

    } else {
      const web3 = window.web3;
      const roadNftStakingContract = new web3.eth.Contract(
        road_Nft_Staking_Abi,
        road_Nft_Staking_Address
      );
      let userReward = await roadNftStakingContract.methods
        .totalReward(address)
        .call();
      userReward = web3.utils.fromWei(userReward);
      dispatch({
        type: REWARD_OF_USER,
        payload: parseFloat(userReward),
      });
    }
  } catch (e) {
    console.error("error while get reward of user", e);
  }
};

export const getAllNfTStakingData = async (dispatch) => {
  let myNftStakingVariables = {};
  let address = await loadWeb3();
  if (address == "No Wallet") {
  } else if (address == "Wrong Network") {
  } else {
    try {
      const web3 = window.web3;
      const roadNftStakingContract = new web3.eth.Contract(
        road_Nft_Staking_Abi,
        road_Nft_Staking_Address
      );
      let a = 6;
      let b = 7;
      myNftStakingVariables = { ...myNftStakingVariables, aa: a };
      myNftStakingVariables = { ...myNftStakingVariables, be: b };
    } catch (e) {
      console.log("Error while getAllNfTStakingData in Action", e);
    }
  }
};
