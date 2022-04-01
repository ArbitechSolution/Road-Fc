
import {GET_USER_THB_BALANCE, GET_WALLET_ADDRESS,GET_USER_THB_LP_BALANCE,
    GET_USER_BRL,GET_USER_TAMOUNT,GET_USER_TAMOUNT_LP,GET_USER_BRL_LP,
    GET_USER_MINT_BRAWL_POINTS,GET_CURRENT_BP_TOKENS,GET_MAX_BP_TOKENS,GET_ROAD_PRICE,
    GET_ROAD_TOTALSUPPLY,GET_PRESALE_HARD_CAP,GET_PRESALE_SOFT_CAP,GET_MIN_PURCHASE,
    GET_MAX_PURCHASE,GET_TOTAL_SOLD_TOKENS,GET_START_TIME,GET_END_TIME} from '../type/types'
import {loadWeb3} from '../../../Component/Api/api'
import Web3 from "web3";
import { thbTokenAddress, thbTokenAbi } from "../../../Component/Utils/ThbToken"
import { thbLpTokenAddress, thbLpTokenAbi } from '../../../Component/Utils/ThbLpToken'
import { stakingContractAddress, stakingContractAbi } from '../../../Component/Utils/Staking'
import{roadTokenAddress, roadTokenAbi}  from '../../../Component/Utils/roadToken';
// import { nftContratAddress, nftContractAbi } from '../../../Component/Utils/Nft'
import { preSaleContractAbi, preSaleContractAddress } from '../../Utils/preSale';

const webSupply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");

let thbTokenContractOf = new webSupply.eth.Contract(thbTokenAbi, thbTokenAddress);
let thbLpTokenContractOf = new webSupply.eth.Contract(thbLpTokenAbi, thbLpTokenAddress);
let stakingCOntractOf = new webSupply.eth.Contract(stakingContractAbi, stakingContractAddress);
let presaleContractOf = new webSupply.eth.Contract(preSaleContractAbi,preSaleContractAddress);
let roadTokenContractOf = new webSupply.eth.Contract(roadTokenAbi,roadTokenAddress);
export const getWallet = () => async (dispatch) => {
// console.log("get wallet 121212");
let address = await loadWeb3();
dispatch({
    type: GET_WALLET_ADDRESS,
    payload:address
})
}


export const getUserThbBalance =()=> async(dispatch)=>{

// console.log("get Action")
// console.log("get getUserThbBalance 1212");
let address = await loadWeb3();
if (address=="No Wallet"){
    console.log("Not Connected")
}else if(address=="Wrong Network"){
    console.log("Wrong Network")
}else{
    const web3 = window.web3
    let userthbBalance = await thbTokenContractOf.methods.balanceOf(address).call();
    userthbBalance = web3.utils.fromWei(userthbBalance)
    userthbBalance =parseInt(userthbBalance)
    // console.log("userthbBalance ",userthbBalance);
    dispatch({
        type:GET_USER_THB_BALANCE,
        payload:userthbBalance
    })
}

}


export const getUserThbLpBalance =()=> async(dispatch)=>{

// console.log("get Action")
// console.log("get getUserThbBalance 1212");
let address = await loadWeb3();
if (address=="No Wallet"){
    // toast.error("Not Connected")
    console.log("Not Connected")
}else if(address=="Wrong Network"){
    console.log("Wrong Network")
}else{
    const web3 = window.web3
    let userThbLpBalance = await thbLpTokenContractOf.methods.balanceOf(address).call();
    userThbLpBalance =web3.utils.fromWei(userThbLpBalance)
    userThbLpBalance =parseInt(userThbLpBalance)
    // console.log("userThbLpBalance",userThbLpBalance);

    dispatch({
        type:GET_USER_THB_LP_BALANCE,
        payload:userThbLpBalance
    })
}

}


export const getUserTHbTamount =()=> async(dispatch)=>{

// console.log("get Action")
// console.log("get getUserThbBalance 1212");
let address = await loadWeb3();
if (address=="No Wallet"){
    console.log("Not Connected")
}else if(address=="Wrong Network"){
    console.log("Wrong Network")
}else{
    const web3 = window.web3
    let userThbData = await stakingCOntractOf.methods.User(address).call();
    let tAmount = userThbData.Tamount;
    tAmount = web3.utils.fromWei(tAmount)
    tAmount =parseFloat(tAmount)
    dispatch({
        type:GET_USER_TAMOUNT,
        payload:tAmount
    })
}

}


export const getUserTHbLPTamount =()=> async(dispatch)=>{

let address = await loadWeb3();
if (address=="No Wallet"){
    console.log("Not Connected")
}else if(address=="Wrong Network"){
    console.log("Wrong Network")
}else{
    const web3 = window.web3
    let userThbLpData = await stakingCOntractOf.methods.UserLP(address).call()
    let tAmountlp = userThbLpData.Tamount;
    tAmountlp =web3.utils.fromWei(tAmountlp)
    tAmountlp =parseFloat(tAmountlp);
    // console.log("tAmountlp",tAmountlp)
    dispatch({
        type:GET_USER_TAMOUNT_LP,
        payload:tAmountlp
    })
}

}
export const getUserBrl =()=> async(dispatch)=>{

let address = await loadWeb3();
if (address=="No Wallet"){
    console.log("No Wallet");
}else if(address=="Wrong Network"){
  console.log("Wrong Network")
}else{
    const web3 = window.web3
    let userBrawlPoint = await stakingCOntractOf.methods.BPcalculator(address).call()
    userBrawlPoint =web3.utils.fromWei(userBrawlPoint)
    userBrawlPoint =parseInt(userBrawlPoint)
   
    dispatch({
        type:GET_USER_BRL,
        payload:userBrawlPoint
    })
}

}

export const getUserBrLp =()=> async(dispatch)=>{

let address = await loadWeb3();
if (address=="No Wallet"){
    console.log("Not Connected")
}else if(address=="Wrong Network"){
    console.log("Wrong Network")
}else{
    const web3 = window.web3
    let userBrawlLpPoint = await stakingCOntractOf.methods.BPcalculatorforLP(address).call()
    userBrawlLpPoint = web3.utils.fromWei(userBrawlLpPoint)
    userBrawlLpPoint=parseInt(userBrawlLpPoint)
   
    dispatch({
        type:GET_USER_BRL_LP,
        payload:userBrawlLpPoint
    })
}

}
export const  getUserBrawlMintPoint =()=> async(dispatch)=>{

let address = await loadWeb3();
if (address=="No Wallet"){
    console.log("Not Connected")
}else if(address=="Wrong Network"){
    console.log("Wrong Network")
}else{
    const web3 = window.web3
    let bpCalculator = await stakingCOntractOf.methods.balances(address).call();
    bpCalculator =web3.utils.fromWei(bpCalculator)
    bpCalculator = parseInt(bpCalculator)
   
    dispatch({
        type:GET_USER_MINT_BRAWL_POINTS,
        payload:bpCalculator
    })
}

}

export const  getCurrentBpTokens =()=> async(dispatch)=>{

    const web3 = window.web3
    let currentbp = await stakingCOntractOf.methods.currentBP().call();
    // currentbp =web3.utils.fromWei(currentbp);
    // currentbp =parseInt(currentbp);
    // console.log("Current bp in action",currentbp);
    dispatch({
        type:GET_CURRENT_BP_TOKENS,
        payload:currentbp
    })
}
export const  getMaxBpTokens =()=> async(dispatch)=>{
    // const web3 = window.web3
    let maxbp = await stakingCOntractOf.methods.maxBPToken().call();
    // console.log("maxbp bp in action",maxbp);
    dispatch({
        type:GET_MAX_BP_TOKENS,
        payload:maxbp
    })
}
export const  getRoadPrice =()=> async(dispatch)=>{
    // const web3 = window.web3
    let roadPrice = await presaleContractOf.methods.price().call();
    roadPrice = webSupply.utils.fromWei(roadPrice);
    // roadPrice = parseFloat(roadPrice).toFixed(4)
    // console.log("maxbp bp in action",maxbp);
    dispatch({
        type:GET_ROAD_PRICE,
        payload:roadPrice
    })
}
export const  getHardCap =()=> async(dispatch)=>{
    try{
        let hardCap = await presaleContractOf.methods.hardCap().call();
        hardCap = webSupply.utils.fromWei(hardCap);
        dispatch({
            type:GET_PRESALE_HARD_CAP,
            payload:hardCap
        })
    }catch(e){
        console.log("Error While Getting hard cap data");
    }
  
}

export const  getSoftCap =()=> async(dispatch)=>{
    try{
        let softCap = await presaleContractOf.methods.softCap().call();
        softCap = webSupply.utils.fromWei(softCap);
        console.log("In Action",softCap);
        dispatch({
            type:GET_PRESALE_SOFT_CAP,
            payload:softCap
        })
    }catch(e){
        console.log("Error While Getting hard cap data");
    }
  
}
export const  getMinPurchase =()=> async(dispatch)=>{
    try{
        let minPurchase = await presaleContractOf.methods.minimum().call();
        minPurchase = webSupply.utils.fromWei(minPurchase);
        console.log("In Action",minPurchase);
        dispatch({
            type:GET_MIN_PURCHASE,
            payload:minPurchase
        })
    }catch(e){
        console.log("Error While Getting hard cap data");
    }
  
}
export const  getMaxPurchase =()=> async(dispatch)=>{
    try{
        let maxPurchase = await presaleContractOf.methods.maximum().call();
        maxPurchase = webSupply.utils.fromWei(maxPurchase);
        console.log("In Action",maxPurchase);
        dispatch({
            type:GET_MAX_PURCHASE,
            payload:maxPurchase
        })
    }catch(e){
        console.log("Error While Getting hard cap data");
    }
  
}
export const  getTotalsold =()=> async(dispatch)=>{
    try{
        let totalSoldTokens = await presaleContractOf.methods.totalSold().call();
        totalSoldTokens = webSupply.utils.fromWei(totalSoldTokens);
        console.log("In Action",totalSoldTokens);
        dispatch({
            type:GET_TOTAL_SOLD_TOKENS,
            payload:totalSoldTokens
        })
    }catch(e){
        console.log("Error While Getting hard cap data");
    }
  
}
export const  getStartTime =()=> async(dispatch)=>{
    try{
        let startTime = await presaleContractOf.methods.startTime().call();
        // startTime = webSupply.utils.fromWei(startTime);
        console.log("In startTime",startTime);
        dispatch({
            type:GET_START_TIME,
            payload:startTime
        })
    }catch(e){
        console.log("Error While Getting hard cap data");
    }
  
}
export const  getEndTime =()=> async(dispatch)=>{
    try{
        let endTime = await presaleContractOf.methods.startTime().call();
        // startTime = webSupply.utils.fromWei(startTime);
        console.log("In startTime",endTime);
        dispatch({
            type:GET_END_TIME,
            payload:endTime
        })
    }catch(e){
        console.log("Error While Getting hard cap data");
    }
  
}


export const  getRoadTotalSupply =()=> async(dispatch)=>{


    // const web3 = window.web3
    try{
        let roadTotalSupply = await roadTokenContractOf.methods.totalSupply().call();;
        roadTotalSupply = webSupply.utils.fromWei(roadTotalSupply);
        // roadPrice = parseFloat(roadPrice).toFixed(4)
        // console.log("maxbp bp in action",maxbp);
        dispatch({
            type:GET_ROAD_TOTALSUPPLY,
            payload:roadTotalSupply
        })
    }catch(e){
        console.log("Error While Getting  roadTotalSupply",e );
    }
  
}


