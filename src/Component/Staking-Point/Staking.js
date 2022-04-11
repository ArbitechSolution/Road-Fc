import React, { useEffect, useRef } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import "./Staking.css"
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import image2 from "../../Assets/image 2.png"
import roadsign from "../../Assets/road-sign 1.png"
import { InputGroup, FormControl } from 'react-bootstrap'
import tin from "../../Assets/--40 1.png"
import { ImInfo } from 'react-icons/im';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import Group637 from "../../Assets/Group 637.png"
import Group636 from "../../Assets/Group 636.png"
import { getWallet, getUserThbBalance, getUserThbLpBalance, getUserTHbTamount, getUserTHbLPTamount, getUserBrLp, getUserBrl } from '../../Component/Redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { thbTokenAddress, thbTokenAbi } from "../../Component/Utils/ThbToken"
import { thbLpTokenAddress, thbLpTokenAbi } from '../../Component/Utils/ThbLpToken'
import { stakingContractAddress, stakingContractAbi } from '../../Component/Utils/Staking'
import { toast } from 'react-toastify';
import SideBar from "../SideBar/SideBar"
import MediaSidebar from '../SideBar/MediaSidebar';
import Rare1000 from "../../Assets/3-Rare-1000x1000 (1).gif"
import AOS from "aos";
import "aos/dist/aos.css";
import Epic1000 from "../../Assets/4-Epic-1000x1000.gif"
import speaker from "../../Assets/speaker.png"
import rare2 from "../../Assets/rare 2.png"
import epic2 from "../../Assets/epic(2) 1.png"
function Staking() {

    let stakeAmount = useRef(0);
    let stakeAmountLp = useRef(0);
    let dispatch = useDispatch();
    let { acc } = useSelector(state => state.connectWallet)
    let { thbBal } = useSelector(state => state.getThbbalance)
    let { thbLpBal } = useSelector(state => state.getThbLpbalance)
    let { tamount } = useSelector(state => state.tAmount);
    let { tamountlp } = useSelector(state => state.tAmountLp)
    let { brlPoint } = useSelector(state => state.getUserBrlpoint)
    let { brlLPPoint } = useSelector(state => state.getUserBrLplpoint)


    const stakeVal = async (isCheck) => {
        if (isCheck == "stake") {
            if (acc == "No Wallet") {
                toast.error("Connect Wallet")
            }
            else if (acc == "Wrong Network") {
                toast.error("Wrong Newtwork please connect to test net")

            } else if (acc == "Connect Wallet") {
                toast.error("Not Connected")
            } else {
                try {
                    let enteredVal = parseFloat(stakeAmount.current.value);
                    console.log("U NEterd", acc);
                    const web3 = window.web3;
                    let thbTokenContractOf = new web3.eth.Contract(thbTokenAbi, thbTokenAddress);
                    let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
                    let userThbBal = web3.utils.toWei(thbBal.toString())
                    if (enteredVal > 0) {
                        if (parseFloat(userThbBal) >= enteredVal) {
                            if (tamount <= 0) {
                                enteredVal = web3.utils.toWei(enteredVal.toString());
                                await thbTokenContractOf.methods.approve(stakingContractAddress, enteredVal.toString()).send({
                                    from: acc
                                })
                                toast.success("Transaction Confirmed")

                                await stakingCOntractOf.methods.Stake(enteredVal).send({
                                    from: acc
                                })
                                stakeAmount.current.value = ""
                                toast.success("Transaction Confirmed")
                                dispatch(getUserTHbTamount())
                                // dispatch(getUserTHbLPTamount())
                                // dispatch(getUserThbBalance())
                                dispatch(getUserThbLpBalance())
                                dispatch(getUserBrLp())
                                dispatch(getUserBrl())

                            } else {
                                toast.error("You Have Already Staked. Please Unstake and try again")
                            }
                        } else {
                            toast.error("Insufficient balance")
                            console.log("Insufficient Balance your Current Balance is ", parseFloat(userThbBal));
                        }

                    } else {
                        console.log("Staking Amount must be greater than 0");
                        toast.error("Staking Amount must be greater than 0")
                    }
                } catch (e) {
                    console.log("Error while staking amount", e);
                    toast.error("Transaction Failed")
                }
            }
        } else if (isCheck == "unStake") {
            if (acc == "No Wallet") {
                toast.error("Not Connected to Wallet")

            }
            else if (acc == "Wrong Network") {
                toast.error("Wrong Newtwork please connect to test net")
            } else if (acc == "Connect Wallet") {
                toast.error("Not Connected")
            }

            else {
                try {
                    let amount = parseFloat(stakeAmount.current.value).toString()
                    console.log("amount", amount);
                    if (amount > 0) {
                        const web3 = window.web3
                        let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
                        if (tamount > 0) {
                            if (amount <= tamount) {
                                await stakingCOntractOf.methods.withdrawtoken(web3.utils.toWei(amount)).send({
                                    from: acc
                                })
                                stakeAmount.current.value = ""
                                toast.success("Transaction Confirmed")
                                dispatch(getUserTHbTamount())
                                dispatch(getUserTHbLPTamount())
                                dispatch(getUserThbBalance())
                                dispatch(getUserThbLpBalance())
                                dispatch(getUserBrLp())
                                dispatch(getUserBrl())
                            } else {
                                toast.error("your amount is grater than you have staked")
                            }
                        } else {
                            toast.error("You have not staked yet")
                            console.log("You have not staked yet");
                        }
                    } else {
                        toast.error("Please enter the value or click max")
                    }

                } catch (e) {
                    console.log("Error while staking amount", e);
                    toast.error("Transaction Failed")

                }
            }
        }

    }
    const redeem = async () => {
        try {
            if (acc == "No Wallet") {
                toast.error("Not Connected to Wallet")

            }
            else if (acc == "Wrong Network") {
                toast.error("Wrong Newtwork please connect to test net")
            } else if (acc == "Connect Wallet") {
                toast.error("Not Connected")
            } else {
                if (brlPoint > 0) {
                    const web3 = window.web3
                    let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
                    await stakingCOntractOf.methods.redeem().send({
                        from: acc
                    })
                    toast.success("Transaction Confirmed")
                } else {
                    toast.info("You have no Energy Point yet")
                }
            }
        } catch (e) {
            console.log("error while redeem token", e);
        }
    }

    const redeemLp = async () => {
        try {
            if (acc == "No Wallet") {
                toast.error("Not Connected to Wallet")

            }
            else if (acc == "Wrong Network") {
                toast.error("Wrong Newtwork please connect to test net")
            } else if (acc == "Connect Wallet") {
                toast.error("Not Connected")
            } else {
                if (brlLPPoint > 0) {
                    const web3 = window.web3
                    let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
                    await stakingCOntractOf.methods.redeemforLp().send({
                        from: acc
                    })
                    toast.success("Transaction Confirmed")
                } else {
                    toast.info("You have no Energy Point yet")
                }
            }
        } catch (e) {
            console.log("error while redeem token", e);
        }
    }

    // Unstake Function for Thb
    const unstake = async () => {
        // console.log("ACC=", acc)


    }
    // stake functions for Lp THB

    const stakeLpVal = async (isCheck) => {
        if (isCheck == "stake") {
            if (acc == "No Wallet") {
                //   setBtTxt("Connect Wallet")
                toast.error("Not Connected")
            }
            else if (acc == "Wrong Network") {
                //   setBtTxt("Wrong Network")
            } else if (acc == "Connect Wallet") {
                toast.error("Not Connected")
            } else {
                try {

                    let enteredVal = stakeAmountLp.current.value;
                    // console.log("U NEterd", enteredVal);
                    const web3 = window.web3;
                    let thbLpTokenContractOf = new web3.eth.Contract(thbLpTokenAbi, thbLpTokenAddress);
                    let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
                    let userThbLpBal = web3.utils.toWei(thbLpBal.toString())
                    if (enteredVal > 0) {
                        if (parseFloat(userThbLpBal) >= parseFloat(enteredVal)) {
                            if (tamountlp <= 0) {
                                enteredVal = web3.utils.toWei(enteredVal.toString());
                                await thbLpTokenContractOf.methods.approve(stakingContractAddress, enteredVal.toString()).send({
                                    from: acc
                                })
                                toast.success("Transaction Confirmed")
                                await stakingCOntractOf.methods.StakeforLP(enteredVal.toString()).send({
                                    from: acc
                                })
                                stakeAmountLp.current.value = ""
                                toast.success("Transaction Confirmed")
                                dispatch(getUserTHbTamount())
                                dispatch(getUserTHbLPTamount())
                                dispatch(getUserThbBalance())
                                dispatch(getUserThbLpBalance())
                                dispatch(getUserBrLp())
                                dispatch(getUserBrl())
                            } else {
                                toast.error("You have staked already. Unstake and try again.")
                            }


                        } else {
                            toast.error("Insufficient Balance")
                            console.log("Insufficient Balance");
                        }

                    } else {
                        console.log("Staking Amount must be greater than 0");
                        toast.error("Staking Amount must be greater than 0")
                    }
                } catch (e) {
                    console.log("Error while staking amount", e);
                    toast.error("Transaction Failed")

                }
            }
        } else if (isCheck == "unStake") {
            if (acc == "No Wallet") {
                //   setBtTxt("Connect Wallet")
                toast.error("Not Connected")
            }
            else if (acc == "Wrong Network") {
                //   setBtTxt("Wrong Network")
                toast.error("Not Connected")

            } else if (acc == "Connect Wallet") {
                toast.error("Not Connected")
            } else {
                try {
                    let amount = parseFloat(stakeAmountLp.current.value).toString()
                    if (amount > 0) {
                        if (tamountlp >= amount) {
                            let timestamp = Math.floor(new Date().getTime() / 1000)
                            // console.log("timestamp", timestamp);
                            const web3 = window.web3;
                            let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
                            let lpLockTime = await stakingCOntractOf.methods.LPlocktime().call()
                            let userLP = await stakingCOntractOf.methods.UserLP(acc).call()
                            let depositTimes = userLP.Deposit_time
                            let AddTime = +lpLockTime + +depositTimes;
                            // console.log("AddTime", AddTime);
                            if (tamountlp > 0) {
                                if (timestamp >= AddTime) {
                                    await stakingCOntractOf.methods.withdrawLPtoken(web3.utils.toWei(amount)).send({
                                        from: acc
                                    })
                                    stakeAmountLp.current.value = ""
                                    toast.success("Transaction Confirmed")
                                    dispatch(getUserTHbTamount())
                                    dispatch(getUserTHbLPTamount())
                                    dispatch(getUserThbBalance())
                                    dispatch(getUserThbLpBalance())
                                    dispatch(getUserBrLp())
                                    dispatch(getUserBrl())
                                } else {
                                    toast.error("Unlocked Time Not Reached !")
                                }


                            } else {
                                toast.error("You have not staked any Lp Tokens yet")
                                console.log("You have not staked any Lp Tokens yet");
                            }
                        } else {
                            toast.info("your point is low")
                        }

                    } else {
                        toast.info("Please enter amount or click max")
                    }
                } catch (e) {
                    console.log("Error while staking amount", e);
                    toast.error("Transaction Failed")
                }
            }
        }
    }


    // // function for Unstaking LPThb

    const unstakeLp = async () => {
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            //   setBtTxt("Connect Wallet")
            toast.error("Not Connected")
        }
        else if (acc == "Wrong Network") {
            //   setBtTxt("Wrong Network")
            toast.error("Not Connected")

        } else if (acc == "Connect Wallet") {
            toast.error("Not Connected")
        } else {
            try {

                let timestamp = Math.floor(new Date().getTime() / 1000)
                // console.log("timestamp", timestamp);
                const web3 = window.web3;
                let stakingCOntractOf = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
                let lpLockTime = await stakingCOntractOf.methods.LPlocktime().call()
                let userLP = await stakingCOntractOf.methods.UserLP(acc).call()
                let depositTimes = userLP.Deposit_time
                let AddTime = +lpLockTime + +depositTimes;
                // console.log("AddTime", AddTime);
                if (tamountlp > 0) {
                    if (timestamp >= AddTime) {
                        await stakingCOntractOf.methods.withdrawLPtoken().send({
                            from: acc
                        })
                        toast.success("Transaction Confirmed")
                        dispatch(getUserTHbTamount())
                        dispatch(getUserTHbLPTamount())
                        dispatch(getUserThbBalance())
                        dispatch(getUserThbLpBalance())
                        dispatch(getUserBrLp())
                        dispatch(getUserBrl())
                    } else {
                        toast.error("Unlocked Time Not Reached !")
                    }


                } else {
                    toast.error("You have not staked any Lp Tokens yet")
                    console.log("You have not staked any Lp Tokens yet");
                }

            } catch (e) {
                console.log("Error while staking amount", e);
                toast.error("Transaction Failed")
            }
        }
    }
    const getData = () => {
        if (acc != "No Wallet" && acc != "Wrong Network" && acc != "Connect Wallet") {
            setInterval(function () {
                // method to be executed;
                dispatch(getUserBrLp())
                dispatch(getUserBrl())
            }, 9000);
        }
    }

    const getWalletAddress = () => {
        dispatch(getWallet());
        dispatch(getUserTHbTamount())
        dispatch(getUserTHbLPTamount())
        dispatch(getUserThbBalance())
        dispatch(getUserBrLp())
        dispatch(getUserBrl())
        dispatch(getUserThbLpBalance())
    }
    useEffect(() => {
        getData()
    }, [acc])
    AOS.init();
    return (

        <div className='imagePool'>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-center pt-5 pb-3'>
                    <div className='col-lg-2 col-md-3 col-4 d-flex justify-content-start' >
                        <span id="presale-back"><Link to="/"><MdOutlineKeyboardBackspace size={40} style={{ color: "white" }} /></Link> Back</span>
                    </div>
                    <div className='col-lg-3 col-md-4 col-5' >
                        <button onClick={() => getWalletAddress()} className='btn poolbtn'>{acc === "No Wallet" ? "Connect Wallet" : acc === "Connect Wallet" ? "Connect" : acc === "Wrong Network" ? acc : acc.substring(0, 4) + "..." + acc.substring(acc.length - 4)}</button>

                    </div>
                </div>
                <div className='row d-flex justify-content-center justify-content-around'>
                    <div className='col-3 staking-box'>
                        <SideBar />
                    </div>
                    <div className='col-11 mb-3 staking-coll'>
                        <MediaSidebar />
                    </div>
                    <div className='col-lg-8 col-11 mb-md-1 pb-5 mb-4'>
                        <div className='row'>
                            <div className='col-lg-12 col-12 staking-box1111'>
                                <div className='row'>
                                    <div className='col-md-7 col-8 pt-4 pb-4 ps-md-4'>

                                        <h4 className='staking-h4 pt-4 pb-3 text-start'>NFT Fighter Card Want?</h4>
                                        <p className='staking-pp pt-2'>Need energy point to mint NFTs </p>
                                        <p className='staking-pp pt-2'>Stake ROAD token to earn energy points now!</p>

                                    </div>
                                    <div className='col-md-5 col-4 pt-3 pb-3 staking-colllll'>
                                        <img src={image2} className="Staking-image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row d-flex justify-content-center mt-4 mb-4'>
                            <div className='col-lg-12 col-11 presale-box1'>
                                <div className='row d-flex justify-content-center justify-content-evenly mt-4'>
                                    <div className='col-lg-5 col-md-9 col-11 staking-box1111a mb-4'>
                                        <div className='row'>
                                            <div className='col-12 staking-col12-Box pb-2 pt-2'>

                                                <div className='row'>
                                                    <div className='col-10'>
                                                        $ROAD STAKING
                                                    </div>
                                                    <div className='col-2'>
                                                        <div class="social">
                                                            <div class="social__container">
                                                                <div class="social__content">
                                                                    <ImInfo className='social__icon' />
                                                                    <div class="social__tooltip social__tooltip-bottom">
                                                                        <img src={Group636} className="staking-info-pic" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-flex justify-content-center">
                                            <div className='col-11 mt-4 d-flex justify-content-center align-items-center'>
                                                <img src={rare2} width="230px" />
                                            </div>
                                        </div>
                                        <div className='col-11 Staking-boxese d-flex justify-content-between mt-5 mb-3 pt-3 pb-3'>
                                            <span className='staking-span98 ps-2'>Wallet:</span>
                                            <span className='staking-span97'>{thbBal.toLocaleString()}</span>
                                        </div>
                                        <div className='col-11 Staking-boxese d-flex justify-content-between mt-2 mb-3 pt-3 pb-3'>
                                            <span className='staking-span98 ps-2'>Energy Point:</span>
                                            <span className='staking-span97'>{brlPoint}</span>
                                        </div>
                                        <div className='col-11 Staking-boxese d-flex justify-content-between mt-2 mb-3 pt-3 pb-3'>
                                            <span className='staking-span98 ps-2'>Staked:</span>
                                            <span className='staking-span97'>{tamount}</span>
                                        </div>
                                        <div className='col-11 Staking-boxese d-flex justify-content-between align-item-center mt-2 mb-3 pt-2 pb-2'>
                                            <div className='col-5 pt-3'>
                                                <span className='staking-span988 ' style={{ fontSize: "17px" }}>Enter $ROAD:</span>
                                            </div>
                                            {/* <span className='staking-span988 pt-3' style={{fontSize: "17px"}}>Enter $ROAD:</span> */}
                                            <div className='col-6'>

                                                <input
                                                    style={{ backgroundColor: "#1C1F26", color: "white   " }}
                                                    className="pointinput form-control staking-tab-b0xes"
                                                    ref={stakeAmount}
                                                    type="number"
                                                    placeholder="0"
                                                    min={1}
                                                    aria-label="Recipient's username with two button addons"
                                                />
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-6'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn btn-staking-button'
                                                        onClick={() => stakeVal("stake")}
                                                    >
                                                        Stake
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn btn-staking-button'
                                                        onClick={() => stakeVal("unStake")}
                                                    >
                                                        Unstake
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                                            <div className='col-12'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn btn-staking-redeem'
                                                        onClick={redeem}
                                                    >
                                                        Redeem
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className='row d-flex justify-content-center mt-4 '>
                                            <div className='col-11 staking-box-col10'>
                                                <div className='row'>
                                                    <div className='col-12 pt-2 pb-2'>
                                                        <span className='staking-spann'>POOL INFO</span>
                                                    </div>
                                                    <div className='col-12 pt-2 pb-3 d-flex justify-content-between align-items-center' style={{ borderTop: "2px solid #5A5C6A" }}>
                                                        <span id='Skaing-span'>Total ROAD Staked</span>
                                                        <span id='Skaing-spans'>0.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* <div className='row d-flex justify-content-center mt-4 '>
                                            <div className='col-11 staking-box-col10'>
                                                <div className='row'>
                                                    <div className='col-12 pt-2 pb-2'>
                                                        <span className='staking-spann'>POOL INFO</span>
                                                    </div>
                                                    <div className='col-12 pt-3 pb-3 d-flex justify-content-between align-items-center' style={{ borderTop: "2px solid #5A5C6A" }}>
                                                        <span id='Skaing-span'>Current ROAD Amount</span>
                                                        <span id='Skaing-span'>Est ROAD per day</span>
                                                    </div>
                                                    <div className='col-12  pb-3 d-flex justify-content-around align-items-center'>
                                                        <span id='Skaing-spans'>0.0000</span>
                                                        <span id='Skaing-spans'>0.0000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* <div className='row d-flex justify-content-center mt-4'>
                                            <div className='col-11 staking-boxes'>
                                                <div className='row d-flex justify-content-center'>
                                                    <div className='col-12 staking-col12-Box pb-2 pt-2'>
                                                        MY BALANCE
                                                    </div>
                                                    <div className='col-6 d-flex flex-column justify-content-center align-items-center mt-3'>
                                                        <img src={roadsign} width="30px" />
                                                        <span id='Skaing-span' className='mt-1'>ROAD</span>
                                                        <span id='Skaing-spans' className='mt-1'>0.0000</span>
                                                    </div>
                                                    <div className='col-6 d-flex flex-column justify-content-center align-items-center mt-3'>
                                                        <img src={tin} width="20px" />
                                                        <span id='Skaing-span' className='mt-1'>ENERGY POINT</span>
                                                        <span id='Skaing-spans' className='mt-1'>0.0000</span>
                                                    </div>
                                                    <div className='col-12' data-aos="zoom-in-down" ata-aos-offset="200"
                                                        data-aos-delay="50"
                                                        data-aos-duration="1000"
                                                        data-aos-easing="ease-in-out"
                                                        data-aos-mirror="true"
                                                        data-aos-once="false">
                                                        <div class="tab-wrap">
                                                            <input type="radio" id="tab1" name="tabGroup1" className="tab" checked />
                                                            <label for="tab1" >Stake</label>
                                                            <input type="radio" id="tab2" name="tabGroup1" className="tab" />
                                                            <label for="tab2">UNSTAKE</label>
                                                            <div className="tab__content">
                                                                <div className='row d-flex justify-content-center mt-4'>
                                                                    <div className='col-8 '>

                                                                        <InputGroup >
                                                                            <FormControl
                                                                                ref={stakeAmount}
                                                                                className="pointinput form-control staking-tab-b0xes"
                                                                                type="number"
                                                                                placeholder="0.0"
                                                                                min={1}
                                                                                aria-label="Recipient's username with two button addons"
                                                                            />
                                                                            <InputGroup.Text className="presale-span1 staking-tab-b0xes">Road</InputGroup.Text>
                                                                        </InputGroup>

                                                                    </div>
                                                                    <div className='col-2 mt-2'>
                                                                        <button onClick={() => stakeAmount.current.value = tamount} className="btn btn-secondary" bg="secondary">Max</button>

                                                                    </div>
                                                                    <div className='col-7 mt-3 mb-2'>
                                                                        <div className="d-grid gap-2">
                                                                            <button onClick={() => stakeVal()} variant="primary" className='btn staking-tab-btn' size="lg">
                                                                                Connect
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab__content">
                                                                <div className='row d-flex justify-content-center mt-3'>
                                                                    <div className='col-12 mb-2'>
                                                                        <span id='Skaing-span' className=''>Locked until 2022-06-02 utc 19:00</span>
                                                                    </div>
                                                                    <div className='col-8 staking-tab-b0xes pt-2'>
                                                                        <span className='staking-tab-span'>{tamount.toLocaleString()}</span>&nbsp;<span className='presale-span1'>road</span>
                                                                    </div>
                                                                    <div className='col-2'>
                                                                        <div className='col-2 mt-1'>
                                                                            <button className="btn btn-secondary" bg="secondary">Max</button>

                                                                        </div>
                                                                    </div>
                                                                    <div className='col-7 mt-3 mb-2'>
                                                                        <div className="d-grid gap-2">
                                                                            <button onClick={() => unstake()} variant="primary" className='btn staking-tab-btn' size="lg">
                                                                                Connect
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className='col-lg-5 col-md-9 col-11 staking-box1111a mb-4'>
                                        <div className='row'>
                                            <div className='col-12 staking-col12-Box pb-2 pt-2'>
                                                <div className='row'>
                                                    <div className='col-10'>
                                                        $ROAD/$BNB STAKING
                                                    </div>
                                                    <div className='col-2'>
                                                        <div class="social">
                                                            <div class="social__container">

                                                                <div class="social__content">
                                                                    <ImInfo className='social__icon' />
                                                                    <div class="social__tooltip social__tooltip-bottom">
                                                                        <img src={Group637} className="staking-info-pic" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-flex justify-content-center">
                                            <div className='col-11 mt-4 d-flex justify-content-center align-items-center'>
                                                <img src={epic2} width="230px" />
                                            </div>
                                        </div>
                                        <div className='col-11 Staking-boxese d-flex justify-content-between mt-5 mb-3 pt-3 pb-3'>
                                            <span className='staking-span98 ps-2'>Wallet:</span>
                                            <span className='staking-span97'>{thbLpBal.toLocaleString()}</span>
                                        </div>
                                        <div className='col-11 Staking-boxese d-flex justify-content-between mt-2 mb-3 pt-3 pb-3'>
                                            <span className='staking-span98 ps-2'>Energy Point:</span>
                                            <span className='staking-span97'>{brlLPPoint.toLocaleString()}</span>
                                        </div>
                                        <div className='col-11 Staking-boxese d-flex justify-content-between mt-2 mb-3 pt-3 pb-3'>
                                            <span className='staking-span98 ps-2'>Staked:</span>
                                            <span className='staking-span97'>{tamountlp}</span>
                                        </div>

                                        <div className='col-11 Staking-boxese d-flex justify-content-between align-item-center mt-2 mb-3 pt-2 pb-2'>
                                            <div className='col-5 pt-3'>
                                                <span className='staking-span988 ' style={{ fontSize: "17px" }}>Enter $ROAD LP:</span>
                                            </div>
                                            <div className='col-6'>

                                                <input
                                                    style={{ backgroundColor: "#1C1F26", color: "white" }}
                                                    className="pointinput form-control staking-tab-b0xes"
                                                    ref={stakeAmountLp}
                                                    type="number"
                                                    placeholder="0"
                                                    min={1}
                                                    aria-label="Recipient's username with two button addons"
                                                />
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-6'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn btn-staking-button'
                                                        onClick={() => {
                                                            stakeLpVal("stake")
                                                        }}
                                                    >
                                                        Stake
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn btn-staking-button'
                                                        onClick={() => {
                                                            stakeLpVal("unStake")
                                                        }}
                                                    >
                                                        Unstake
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                                            <div className='col-12'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn btn-staking-redeem'
                                                        onClick={redeemLp}
                                                    >
                                                        Redeem
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className='row d-flex justify-content-center mt-4 '>
                                            <div className='col-11 staking-box-col10'>
                                                <div className='row'>
                                                    <div className='col-12 pt-2 pb-2'>
                                                        <span className='staking-spann'>POOL INFO</span>
                                                    </div>
                                                    <div className='col-12 pt-2 pb-3 d-flex justify-content-between align-items-center' style={{ borderTop: "2px solid #5A5C6A" }}>
                                                        <span id='Skaing-span'>Total ROAD Staked</span>
                                                        <span id='Skaing-spans'>0.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* <div className='row d-flex justify-content-center mt-4 '>
                                            <div className='col-11 staking-box-col10'>
                                                <div className='row'>
                                                    <div className='col-12 pt-2 pb-2'>
                                                        <span className='staking-spann'>POOL INFO</span>
                                                    </div>
                                                    <div className='col-12 pt-3 pb-3 d-flex justify-content-between align-items-center' style={{ borderTop: "2px solid #5A5C6A" }}>
                                                        <span id='Skaing-span'>Current ROAD Amount</span>
                                                        <span id='Skaing-span'>Est ROAD per day</span>
                                                    </div>
                                                    <div className='col-12  pb-3 d-flex justify-content-around align-items-center'>
                                                        <span id='Skaing-spans'>0.0000</span>
                                                        <span id='Skaing-spans'>0.0000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* <div className='row d-flex justify-content-center mt-4'>
                                            <div className='col-11 staking-boxes'>
                                                <div className='row d-flex justify-content-center'>
                                                    <div className='col-12 staking-col12-Box pb-2 pt-2'>
                                                        MY BALANCE
                                                    </div>
                                                    <div className='col-6 d-flex flex-column justify-content-center align-items-center mt-3'>
                                                        <img src={roadsign} width="30px" />
                                                        <span id='Skaing-span' className='mt-1'>ROAD</span>
                                                        <span id='Skaing-spans' className='mt-1'>0.0000</span>
                                                    </div>
                                                    <div className='col-6 d-flex flex-column justify-content-center align-items-center mt-3'>
                                                        <img src={tin} width="20px" />
                                                        <span id='Skaing-span' className='mt-1'>ENERGY POINT</span>
                                                        <span id='Skaing-spans' className='mt-1'>0.0000</span>
                                                    </div>
                                                    <div className='col-12' data-aos="zoom-in-left" ata-aos-offset="200"
                                                        data-aos-delay="50"
                                                        data-aos-duration="1000"
                                                        data-aos-easing="ease-in-out"
                                                        data-aos-mirror="true"
                                                        data-aos-once="false">
                                                        <div class="tab-wrap">
                                                            <input type="radio" id="tab3" name="tabGroup2" className="tab" checked />
                                                            <label for="tab3" >Stake</label>
                                                            <input type="radio" id="tab4" name="tabGroup2" className="tab" />
                                                            <label for="tab4">UNSTAKE</label>
                                                            <div className="tab__content">
                                                                <div className='row d-flex justify-content-center mt-4'>
                                                                    <div className='col-8 '>

                                                                        <InputGroup >
                                                                            <FormControl
                                                                                ref={stakeAmountLp}
                                                                                className="pointinput form-control staking-tab-b0xes"
                                                                                type="number"
                                                                                placeholder="0.0"
                                                                                min={1}
                                                                                aria-label="Recipient's username with two button addons"
                                                                            />
                                                                            <InputGroup.Text className="presale-span1 staking-tab-b0xes">Road</InputGroup.Text>
                                                                        </InputGroup>

                                                                    </div>
                                                                    <div className='col-2 mt-2'>
                                                                        <button onClick={() => stakeAmountLp.current.value = tamountlp} className="btn btn-secondary" bg="secondary">Max</button>
                                                                    </div>

                                                                    <div className='col-7 mt-3 mb-2'>
                                                                        <div className="d-grid gap-2">
                                                                            <button onClick={() => stakeLpVal()} variant="primary" className='btn staking-tab-btn' size="lg">
                                                                                Connect
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab__content">
                                                                <div className='row d-flex justify-content-center mt-3'>
                                                                    <div className='col-12 mb-2'>
                                                                        <span id='Skaing-span' className=''>Locked until 2022-06-02 utc 19:00</span>
                                                                    </div>
                                                                    <div className='col-8 staking-tab-b0xes pt-2'>
                                                                        <span className='staking-tab-span'>{tamountlp.toLocaleString()}</span>&nbsp;<span className='presale-span1'>road</span>
                                                                    </div>
                                                                    <div className='col-2 mt-1'>
                                                                        <button className="btn btn-secondary" bg="secondary">Max</button>

                                                                    </div>

                                                                    <div className='col-7 mt-3 mb-2'>
                                                                        <div className="d-grid gap-2">
                                                                            <button onClick={() => unstakeLp()} variant="primary" className='btn staking-tab-btn' size="lg">
                                                                                Connect
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staking