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
import { loadWeb3 } from "../../../Component/Api/api";
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
const webSupply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");

let thbTokenContractOf = new webSupply.eth.Contract(
  thbTokenAbi,
  thbTokenAddress
);
let thbLpTokenContractOf = new webSupply.eth.Contract(
  thbLpTokenAbi,
  thbLpTokenAddress
);
let stakingCOntractOf = new webSupply.eth.Contract(
  stakingContractAbi,
  stakingContractAddress
);
let presaleContractOf = new webSupply.eth.Contract(
  preSaleContractAbi,
  preSaleContractAddress
);

export const getWallet = () => async (dispatch) => {
  // console.log("get wallet 121212");
  let address = await loadWeb3();
  dispatch({
    type: GET_WALLET_ADDRESS,
    payload: address,
  });
};
export const getUserThbBalance = () => async (dispatch) => {
  // console.log("get Action")
  // console.log("get getUserThbBalance 1212");
  let address = await loadWeb3();
  if (address == "No Wallet") {
    console.log("Not Connected");
  } else if (address == "Wrong Network") {
    console.log("Wrong Network");
  } else {
    const web3 = window.web3;
    let userthbBalance = await thbTokenContractOf.methods
      .balanceOf(address)
      .call();
    userthbBalance = web3.utils.fromWei(userthbBalance);
    userthbBalance = parseInt(userthbBalance);
    // console.log("userthbBalance ",userthbBalance);
    dispatch({
      type: GET_USER_THB_BALANCE,
      payload: userthbBalance,
    });
  }
};

export const getUserThbLpBalance = () => async (dispatch) => {
  // console.log("get Action")
  // console.log("get getUserThbBalance 1212");
  let address = await loadWeb3();
  if (address == "No Wallet") {
    // toast.error("Not Connected")
    console.log("Not Connected");
  } else if (address == "Wrong Network") {
    console.log("Wrong Network");
  } else {
    const web3 = window.web3;
    let userThbLpBalance = await thbLpTokenContractOf.methods
      .balanceOf(address)
      .call();
    userThbLpBalance = web3.utils.fromWei(userThbLpBalance);
    userThbLpBalance = parseInt(userThbLpBalance);
    // console.log("userThbLpBalance",userThbLpBalance);

    dispatch({
      type: GET_USER_THB_LP_BALANCE,
      payload: userThbLpBalance,
    });
  }
};

export const getUserTHbTamount = () => async (dispatch) => {
  // console.log("get Action")
  // console.log("get getUserThbBalance 1212");
  let address = await loadWeb3();
  if (address == "No Wallet") {
    console.log("Not Connected");
  } else if (address == "Wrong Network") {
    console.log("Wrong Network");
  } else {
    const web3 = window.web3;
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
    console.log("Not Connected");
  } else if (address == "Wrong Network") {
    console.log("Wrong Network");
  } else {
    const web3 = window.web3;
    let userThbLpData = await stakingCOntractOf.methods.UserLP(address).call();
    let tAmountlp = userThbLpData.Tamount;
    tAmountlp = web3.utils.fromWei(tAmountlp);
    tAmountlp = parseFloat(tAmountlp);
    // console.log("tAmountlp",tAmountlp)
    dispatch({
      type: GET_USER_TAMOUNT_LP,
      payload: tAmountlp,
    });
  }
};
export const getUserBrl = () => async (dispatch) => {
  let address = await loadWeb3();
  if (address == "No Wallet") {
    console.log("No Wallet");
  } else if (address == "Wrong Network") {
    console.log("Wrong Network");
  } else {
    const web3 = window.web3;
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
    console.log("Not Connected");
  } else if (address == "Wrong Network") {
    console.log("Wrong Network");
  } else {
    const web3 = window.web3;
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
    console.log("Not Connected");
  } else if (address == "Wrong Network") {
    console.log("Wrong Network");
  } else {
    const web3 = window.web3;
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
  let currentbp = await stakingCOntractOf.methods.currentBP().call();
  // currentbp =web3.utils.fromWei(currentbp);
  // currentbp =parseInt(currentbp);
  // console.log("Current bp in action",currentbp);
  dispatch({
    type: GET_CURRENT_BP_TOKENS,
    payload: currentbp,
  });
};
export const getMaxBpTokens = () => async (dispatch) => {
  // const web3 = window.web3
  let maxbp = await stakingCOntractOf.methods.maxBPToken().call();
  // console.log("maxbp bp in action",maxbp);
  dispatch({
    type: GET_MAX_BP_TOKENS,
    payload: maxbp,
  });
};

export const getPreSaleInfo = () => async (dispatch) => {
  try {
    let preSaleInfo = {};
    // get road price
    let roadPrice = await presaleContractOf.methods.price().call();
    roadPrice = webSupply.utils.fromWei(roadPrice);
    preSaleInfo = { ...preSaleInfo, roadPrice: roadPrice };
    // hard cap info
    let hardCap = await presaleContractOf.methods.hardCap().call();
    hardCap = webSupply.utils.fromWei(hardCap);
    preSaleInfo = { ...preSaleInfo, hardCap: hardCap };
    // soft cap info
    let softCap = await presaleContractOf.methods.softCap().call();
    softCap = webSupply.utils.fromWei(softCap);
    preSaleInfo = { ...preSaleInfo, softCap: softCap };
    // minium purchase
    let minPurchase = await presaleContractOf.methods.minimum().call();
    minPurchase = webSupply.utils.fromWei(minPurchase);
    preSaleInfo = { ...preSaleInfo, minPurchase: minPurchase };
    // max purchase
    let maxPurchase = await presaleContractOf.methods.maximum().call();
    maxPurchase = webSupply.utils.fromWei(maxPurchase);
    preSaleInfo = { ...preSaleInfo, maxPurchase: maxPurchase };
    // total sold
    let totalSoldTokens = await presaleContractOf.methods.totalSold().call();
    totalSoldTokens = webSupply.utils.fromWei(totalSoldTokens);
    preSaleInfo = { ...preSaleInfo, totalSoldTokens: totalSoldTokens };
    // start time
    let startTime = await presaleContractOf.methods.startTime().call();
    preSaleInfo = { ...preSaleInfo, startTime: startTime };
    // end time
    let endTime = await presaleContractOf.methods.startTime().call();
    preSaleInfo = { ...preSaleInfo, endTime: endTime };
    // road total supply
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
    console.log("Not Connected");
  } else if (address == "Wrong Network") {
    console.log("Wrong Network");
  } else {
    let timestamp = Math.floor(new Date().getTime() / 1000);
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
          console.log("Less Than Zero");
          tiemObj = { ...tiemObj, days: 0 };
        }
        if (h > 0) {
          tiemObj = { ...tiemObj, hours: h };
        } else {
          tiemObj = { ...tiemObj, hours: 0 };

          console.log("Less Than Zero");
        }
        if (m > 0) {
          tiemObj = { ...tiemObj, minutes: m };
        } else {
          console.log("Less Than Zero");
          tiemObj = { ...tiemObj, minutes: 0 };
        }
        if (s > 0) {
          tiemObj = { ...tiemObj, seconds: s };
        } else {
          console.log("Less Than Zero");
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
      // decidedVar = true
    }

    dispatch({
      type: USER_DEPOSIT_TIME,
      payload: tiemObj,
    });
  }
};

// acitons for minting section

export const getTotalEnergy = () => async (dispatch) => {
  try {
    let address = await loadWeb3();
    if (address == "No Wallet") {
      console.log("Not Connected");
    } else if (address == "Wrong Network") {
      console.log("Wrong Network");
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
      console.log("Not Connected");
    } else if (address == "Wrong Network") {
      console.log("Wrong Network");
    } else {
      const web3 = window.web3;
      const roadNftStakingContract = new web3.eth.Contract(
        road_Nft_Staking_Abi,
        road_Nft_Staking_Address
      );
      let userReward = await roadNftStakingContract.methods
        .allReward(address)
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
    console.log("Not Connected");
  } else if (address == "Wrong Network") {
    console.log("Wrong Network");
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
