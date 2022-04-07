import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import "./Presale.css"
import ProgressBar from 'react-bootstrap/ProgressBar'

import p305 from "../../Assets/305 1.png"
import {
    getWallet, getRoadPrice, getRoadTotalSupply, getHardCap, getSoftCap, getMinPurchase,
    getMaxPurchase, getTotalsold, getStartTime
} from '../Redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux';
import { stakingContractAddress, stakingContractAbi } from '../Utils/stakingContract'
// import ProgressBar from 'react-bootstrap/ProgressBar'
import { preSaleContractAddress, preSaleContractAbi } from '../Utils/preSale'
import Web3 from "web3";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
const webSupply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");


function Presale() {
    let [percentageValue, setpercentageValue] = useState(0)
    let [reqBNB, setReqBNB] = useState("0.00")
    let enteredBnb = useRef(0)
    let dispatch = useDispatch();
    let { acc } = useSelector(state => state.connectWallet);
    let { roadPrice } = useSelector(state => state.getRoadPrice);
    let { myroadTotalSupply } = useSelector(state => state.getRoadTotalSupply);
    let { myHardCap } = useSelector(state => state.getHardCap);
    let { mysoftCap } = useSelector(state => state.getSoftCap);
    let { myMinPurchase } = useSelector(state => state.getMinimumPurchase);
    let { myMaxPurchase } = useSelector(state => state.getMaximumPurchase);
    let { myTotalSold } = useSelector(state => state.getTotalSoldTokens);
    let { myStartTime } = useSelector(state => state.getStartTime);
    myStartTime = parseInt(myStartTime)
    var myDate = new Date(myStartTime * 1000);
    console.log("asasd", myDate.toLocaleString());

    myTotalSold = parseInt(myTotalSold);

    console.log("myStartTime", myStartTime);


    const calucaltePercentage = () => {
        let total = parseInt(myroadTotalSupply);
        let sold = parseInt(myTotalSold);
        let myPercent = myTotalSold / 500000;
        myPercent = myPercent * 100;
        myPercent = parseFloat(myPercent).toFixed(1)
        console.log("percentageValue", sold);
        console.log("percentageValue", myPercent);

        setpercentageValue(myPercent)
    }

    const calculatedRoadPrice = async () => {
        let preSaleContractOf = new webSupply.eth.Contract(preSaleContractAbi, preSaleContractAddress);
        let userEnteredVal = enteredBnb.current.value;
        if (parseFloat(userEnteredVal) > 0) {
            let userEnteredValToWei = webSupply.utils.toWei(userEnteredVal.toString())
            console.log("userEnteredValToWei", userEnteredValToWei);
            let calculatedRoad = await preSaleContractOf.methods.calculate_price(userEnteredValToWei).call();
            calculatedRoad = webSupply.utils.fromWei(calculatedRoad)
            console.log("calculatedRoad", calculatedRoad);
            setReqBNB(calculatedRoad)
        } else {
            setReqBNB(0)
        }

        // requiredBNB.current.value =calculatedRoad;

    }
    const buyRoadwithBnb = async () => {
        try {
            if (acc == "No Wallet") {
                console.log("wallet");
                toast.error("Connect Wallet")
            }
            else if (acc == "Wrong Network") {
                toast.error("Wrong Network")
            } else if (acc == "Connect Wallet") {
                console.log("Connect Wallet");
                toast.error("Connect Wallet")
            }
            else if (acc == "Connect") {
                toast.error("Not Connected")
            }
            else {

                let userEnteredVal = enteredBnb.current.value;
                if (parseFloat(userEnteredVal) >= 0.1) {
                    const web3 = window.web3;
                    let usersBNBBalance = await web3.eth.getBalance(acc);
                    console.log("userEnteredVal", usersBNBBalance);
                    let preSaleContractOf = new web3.eth.Contract(preSaleContractAbi, preSaleContractAddress);
                    let userEnteredValToWei = web3.utils.toWei(userEnteredVal.toString())
                    if (parseFloat(usersBNBBalance) > parseFloat(userEnteredValToWei)) {
                        await preSaleContractOf.methods.buy().send({
                            from: acc,
                            value: userEnteredValToWei.toString()
                        })
                        toast.success("Transaction Successfull")
                        dispatch(getTotalsold())
                        calucaltePercentage()
                    } else {
                        toast.error("Insufficient Balance")
                    }
                } else {
                    toast.error("Minimum Purchase is of 0.1 BNB")
                }
            }
        } catch (e) {
            console.log("Error While Buying Road with BNB", e)
            toast.error("Transaction Rejected")
        }
    }

    const getWalletAddress = () => {
        dispatch(getWallet());
        // allImagesNfts()
    }

    useEffect(() => {
        calucaltePercentage()
    }, [myTotalSold])

    useEffect(() => {


        dispatch(getRoadPrice())
        dispatch(getRoadTotalSupply())
        dispatch(getHardCap())
        dispatch(getSoftCap())
        dispatch(getMinPurchase())
        dispatch(getMaxPurchase())
        dispatch(getTotalsold())
        dispatch(getStartTime())
        calucaltePercentage()

    }, [acc])

    return (
        <div className='imagePool'>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-center pt-5 pb-3'>
                    <div className='col-lg-2 d-flex justify-content-start' >
                        <span id="presale-back"><Link to="/"><MdOutlineKeyboardBackspace size={40} style={{ color: "white" }} /></Link> Back</span>

                    </div>
                    <div className='col-lg-2 col-md-3'>
                        <button onClick={() => getWalletAddress()} className='btn poolbtn'>{acc === "No Wallet" ? "Connect Wallet" : acc === "Connect Wallet" ? "Connect" : acc === "Wrong Network" ? acc : acc.substring(0, 4) + "..." + acc.substring(acc.length - 4)}</button>

                    </div>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-12 col-11  presale-box pb-4 mb-2'>
                        <div className='row'>
                            <div className='col-md-6 col-8'>
                                <p className='Presale-p pt-3 pt-2 ps-md-3 pb-md-3'>Pre-Sale is Live</p>
                                <p className='presale-p1 ps-md-3 pb-md-3'>Available Now</p>
                                <div className='d-flex justify-content-start align-items-center ps-md-3 '>
                                    <button className='btn presalebtn'>ROAD Token</button>&nbsp;

                                    <span id="presale-span1">Price: ${roadPrice}</span>
                                </div>
                            </div>
                            <div className='col-md-6 col-4 d-flex justify-content-end align-items-end'>
                                <img src={p305} className="presale-image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row d-flex justify-content-center pb-5'>
                    <div className='col-md-12 col-11 presale-box1 pb-4 mb-2'>
                        <h4 className='pool-h4 pt-3'>ROAD PRE-SALE POOL HAS STARTED</h4>
                        <p className='pool-p2 pt-2'>Stake $ROAD and get energy point for NFTs card</p>

                        <div className='row d-flex justify-content-center justify-content-evenly mt-3'>
                            <div className='col-lg-5 col-md-7 col-11 pool-box3 mb-4 mt-4'>
                                <h5 className='bool-h55 pt-5 fw-bold'>PRE-SALE</h5>
                                <div className='row d-flex justify-content-center pt-4 pb-2'>
                                    <div className='col-11 text-start'
                                    >
                                        <form>
                                            <label className="form-label  fw-bold" style={{ color: "#5E606E" }}>$Road</label>
                                            <input onChange={() => calculatedRoadPrice()} ref={enteredBnb} type='number' class="form-control" placeholder='0.00' min={1} />
                                        </form>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center pt-4 pb-2'>
                                    <div className='col-11 text-start'
                                    >
                                        <form>
                                            <label className="form-label fw-bold" style={{ color: "#5E606E" }}>$BNB</label>
                                            <input type='number' class="form-control" placeholder={reqBNB} />
                                        </form>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-11 text-end'>
                                        <span id="preale-Available">Available: 0.0000 BNB</span>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center pt-4 pb-2'>
                                    <div className='col-md-5 col-9'>
                                        <div className="d-grid gap-2">
                                            <button onClick={() => buyRoadwithBnb()} className='btn presalesbtn1' size="lg">
                                                Buy ROAD
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center pt-5 pb-2 mb-3'>
                                    <div className='col-11 d-flex justify-content-between align-items-center'>
                                        <span className='presale-span'>Progress</span>
                                        <span className='presale-span1'>Current Pool</span>
                                    </div>
                                    <div className='col-11 presale-b0x1 pt-4 pb-4 mt-2'>
                                        <ProgressBar variant={"YOU_PICK_A_NAME"} style={{ Color: "#E24034" }} now={percentageValue} />
                                        <div className='d-flex justify-content-between justify-content-center'>
                                            <span className='span-presale'>{percentageValue}%</span>
                                            <span className='span-presale'>200,000,000 $ROAD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-7 col-11 pool-box3 mt-4 mb-4'>
                                <h5 className='bool-h55 pt-5 fw-bold'>PRE-SALE POOL</h5>

                                <div className='row d-flex justify-content-center mt-4'>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-2'>
                                        <span className='presale-span21'>Total Supply</span>
                                        <span className='presale-span22'>10,000,000,000 &nbsp;
                                            {/* {myroadTotalSupply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} &nbsp; */}
                                            <span className='presale-span1'>ROAD</span></span>
                                    </div>
                                    <div className='col-11 mt-3' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Token for Presales</span>
                                        <span className='presale-span22'>200,000,000 &nbsp;<span className='presale-span1'>ROAD</span></span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Price</span>
                                        <span className='presale-span22'>${roadPrice}</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Minimum Purchase</span>
                                        <span className='presale-span22'>{myMinPurchase} BNB</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Max Purchase</span>
                                        <span className='presale-span22'>{myMaxPurchase} BNB</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Start time</span>
                                        <span className='presale-span22'>
                                            15 Apr, 2022 UTC 21:00
                                            {/* {myDate.toLocaleString()} */}
                                        </span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>End time</span>
                                        <span className='presale-span22'>15 Apr, 2022 UTC 21:00</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Soft Cap</span>
                                        <span className='presale-span22'>2,000&nbsp;
                                            {/* {mysoftCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                                            BNB</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Hard Cap</span>
                                        <span className='presale-span22'>4,000&nbsp;
                                            {/* {myHardCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                                            BNB</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>

                                <h5 className='bool-h55 pt-3 fw-bold mb-3'>We accepted BNB</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presale
