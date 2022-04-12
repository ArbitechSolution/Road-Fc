import React, { useState, useEffect } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from "react-router-dom";
import Common1000 from "../../Assets/tiger 1 1.png"
import "./Mint.css"
import off from "../../Assets/Off.png"
import speaker from "../../Assets/speaker.png"
import Modal from 'react-bootstrap/Modal'
import Title from "../../Assets/Title.png"
import tiger from "../../Assets/1-Common-1000x1000.gif"
import Vector from "../../Assets/Vector.png"
import Mins from "../../Assets/Mins.png"
import plus from "../../Assets/plus.png"
import Group609 from "../../Assets/Group 609.png"
import SideBar from "../SideBar/SideBar"
import MediaSidebar from '../SideBar/MediaSidebar';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import { getWallet, getTotalEnergy } from '../Redux/actions/actions'
import { nftContractAbi, nftContratAddress } from '../Utils/Nft'
import { stakingContractAbi, stakingContractAddress } from '../Utils/Staking'

import { formHelperTextClasses } from '@mui/material';
import axios from 'axios';
import url from '../../Assets/mintSound.wav';
import useAudio from "./useAudio";
function Mint() {
    const dispatch = useDispatch()
  
const [playing, toggle] = useAudio(url);  
const playingSound = () => {
    toggle();    
};
useEffect(() => {
    setTimeout(() => {
      playingSound();
    }, 1000);
  }, []);
    let { acc } = useSelector(state => state.connectWallet)
    let { energyPoint, minintPrice } = useSelector(state => state.mintngInfo);
    let [spendEnergy,setSpendEnergy] =useState(100000)
    let [mintArray, setMintArray] = useState([]);
    let [isDetail, setIsDetail] = useState(false)
    let [transctionData, setTransctionData] = useState({})
    let [value, setValue] = useState(1)
    const [modalShow, setModalShow] = useState(false);
    const [modalShowOne, setModalShowOne] = useState(false);
    const increaseValue = () => {
        if (value < 3) {
            let val = 100000;
            setValue(++value)
            setSpendEnergy(val * value)
        }
    }
    const decreaseValue = () => {
        if (value > 1) {
            let val = 100000;
            setValue(--value)
            setSpendEnergy(val * value)
        }
    }

    const mint = async () => {
        try {
            if (acc == "No Wallet") {
                //   setBtTxt("Connect Wallet")
                toast.info("Not Connected")
            }
            else if (acc == "Wrong Network") {
                //   setBtTxt("Wrong Network")
                toast.info("Not Connected")
            } else if (acc == "Connect Wallet") {
                toast.info("Not Connected")
            } else {
                const web3 = window.web3;
                const stakingContract = new web3.eth.Contract(stakingContractAbi, stakingContractAddress);
                let stakingTime = await stakingContract.methods.getstakeTime(acc).call();
                stakingTime = parseInt(stakingTime);

                console.log("stakingTime", stakingTime);
                let currentTime = Math.floor(new Date().getTime() / 1000.0);
                currentTime = currentTime;
                console.log("currentTime", currentTime);
                console.log("compare", currentTime >= stakingTime);
                if (currentTime >= stakingTime) {
                    let count = minintPrice * value;
                    if (count <= energyPoint) {

                        const nftContract = new web3.eth.Contract(nftContractAbi, nftContratAddress);
                        await nftContract.methods.mint(value).send({
                            from:acc
                        }) .on("receipt", (receipt) => {
                            console.log("mintValue", receipt);

                            setTransctionData(receipt);
                          });
                        dispatch(getTotalEnergy())
                        setIsDetail(true)
                        getCurrentNfts()

                    } else {

                        toast.info(`Requied energy:${count}`)
                    }
                } else {
                    toast.info("your time is remaning")
                }
            }
        } catch (e) {
            console.error("error while mint", e);
        }
    }

    const getCurrentNfts = async () => {
        try {
            if (acc == "No Wallet") {
                //   setBtTxt("Connect Wallet")
                toast.info("Not Connected")
            }
            else if (acc == "Wrong Network") {
                //   setBtTxt("Wrong Network")
                toast.info("Not Connected")
            } else if (acc == "Connect Wallet") {
                toast.info("Not Connected")
            } else {
                const web3 = window.web3;
                const nftContract = new web3.eth.Contract(nftContractAbi, nftContratAddress);
                let totalIds = await nftContract.methods.walletOfOwner(acc).call();

                totalIds = totalIds.slice(-value)
                let simplleArray = [];
                totalIds.forEach(async (ids) => {
                    let res = await axios.get(`/config/json/${ids}.json`)
                    let imageUrl = res.data.image;
                    let imageName = res.data.name;
                    simplleArray = [...simplleArray, { imageUrl, imageName }];
                    setMintArray(simplleArray);
                })
                setModalShow(true)
            }
        } catch (e) {
            console.error("error while get current nfts", e);
        }
    }

    const getWalletAddress = () => {
        dispatch(getWallet());
        dispatch(getTotalEnergy())
        
    }
    const getData = () => {
        if (acc != "No Wallet" && acc != "Wrong Network" && acc != "Connect Wallet") {
            dispatch(getTotalEnergy())
            
        }
    }
    useEffect(() => {
        getData()

    }, [acc])
    return (
        <div className='imagePool'>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-center pt-5 pb-3'>
                    <div className='col-lg-2 col-md-3 col-4 d-flex justify-content-start' >
                        <span id="presale-back"><Link to="/"><MdOutlineKeyboardBackspace size={40} style={{ color: "white" }} /></Link> Back</span>
                    </div>
                    <div className='col-lg-2 col-md-3 col-5' >
                        <button className='btn poolbtn'
                            onClick={getWalletAddress}
                        >{acc === "No Wallet" ? "Connect Wallet" : acc === "Connect Wallet" ? "Connect" : acc === "Wrong Network" ? acc : acc.substring(0, 4) + "..." + acc.substring(acc.length - 4)}</button>
                    </div>
                </div>
                <div className='row d-flex justify-content-center justify-content-around'>
                    <div className='col-3 staking-box'>
                        <SideBar />
                    </div>
                    <div className='col-11 mb-3 staking-coll'>
                        <MediaSidebar />
                    </div>
                    <div className='col-lg-8 col-11 mb-md-1 mb-4 mt-4'>
                        {modalShow ? <Modal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton className='model-image'>
                                <Modal.Title id="contained-modal-title-vcenter" style={{ color: "white", fontSize: "30px" }}>
                                    Mint
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='model-image'>
                                <div className='row d-flex justify-content-center' >
                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <img className='pt-3 congrat-image' src={Group609} />
                                    </div>
                                    {mintArray.length == 1 ? <div className=' d-flex justify-content-center mb-3 mt-3' >{
                                        mintArray?.map((item, index) => {
                                            return (
                                                <>
                                                    <div key={index}>
                                                        <div>

                                                            <img src={`/config/${item.imageUrl}`} className=" pt-4 pb-3" width="200px" />
                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        })
                                    } </div> : <div className="row d-flex flex-row justify-content-center justify-content-evenly mt-4 mb-3">
                                        {mintArray.map((item, index) => {
                                            return (

                                                <div className="col-lg-3 uperimg col-md-5 d-flex justify-content-center align-items-center mt-2">
                                                    <img
                                                        alt="greetings"
                                                        src={`/config/${item.imageUrl}`}
                                                        className="model-i"
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>}
                                    {/* <div className="row d-flex flex-row justify-content-center justify-content-evenly mt-4 mb-3">
                                        {mintArray.map((item, index) => {
                                            return (
                                                <div className="col-lg-3 uperimg col-md-5 d-flex justify-content-center align-items-center mt-2">
                                                    <img
                                                        alt="greetings"
                                                        src={`/config/${item.imageUrl}`}
                                                        className="model-i"
                                                    />

                                                </div>

                                            );
                                        })}
                                    </div> */}

                                    {/* <div className='row d-flex flex-md-row justify-content-center justify-content-md-evenly mb-3 mt-3' style={{border: "2px solid red"}}>
                                        {
                                            mintArray?.map((item, index) => {
                                                return (
                                                    <>
                                                        <div key={index}>
                                                            <div className='col-lg-3 uperimg d-flex justify-content-center align-items-center mt-2 ' style={{border: "2px solid red"}}>

                                                                <img src={`/config/${item.imageUrl}`} className="mint-pic1 model-i pt-4 pb-3" width="200px" />
                                                            </div>


                                                        </div>

                                                    </>
                                                )
                                            })
                                        } */}
                                    {/* </div> */}
                                    {/* <div className='row d-flex flex-row justify-content-center'>
                                    {
                                        mintArray?.map((item, index)=>{
                                            return (
                                                <>
                                                <div key={index}>
                                                <div>

                                        <img src={`/config/${item.imageUrl}`} className="mint-pic1 pt-4 pb-3" width="200px" />
                                                </div>

                                        <div className='text-white text-center mb-3' >{item.imageName}</div>
                                                </div>
                                                &nbsp;&nbsp;
                                                </>
                                            )
                                        })
                                    }
                                    </div> */}
                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <span className='congrat-span'>Do you want to Breed card or sell in the market?</span>
                                    </div>

                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-lg-2 col-md-3 mt-3 mb-3'>
                                        <div className="d-grid gap-2">
                                            <button className='btn btn-congrats' size="lg">
                                                Breed
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-md-3 mt-3 mb-3'>
                                        <div className="d-grid gap-2">
                                            <button className='btn btn1-congrats' size="lg" onClick={() => setModalShowOne(true)}>
                                                Sell
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-3 mt-3 mb-3'>
                                        <div className="d-grid gap-2">
                                            <button className='btn btn2-congrats' size="lg">
                                                Do it Later
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal> : <></>}


                        {modalShowOne ? <Modal
                            show={modalShowOne}
                            onHide={() => setModalShowOne(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            style={{ backgroundColor: "#13151b" }}
                        >
                            <Modal.Header closeButton className='model-image'>
                                <Modal.Title id="contained-modal-title-vcenter" style={{ color: "white", fontSize: "30px" }}>
                                    Mint
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='model-image'>
                                <div className='row d-flex justify-content-center' >
                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <img className='pt-3 congrat-image' src={Group609} />
                                    </div>
                                    {mintArray.length == 1 ? <div className=' d-flex flex-column justify-content-center mb-3 mt-3' >{
                                        mintArray?.map((item, index) => {
                                            return (
                                                <>
                                                    <div key={index}>
                                                        <div className='d-flex justify-content-center'>

                                                            <img src={`/config/${item.imageUrl}`} className=" pt-4 pb-3" width="200px" />
                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        })
                                    } <div className='col-md-12 d-flex justify-content-center'>
                                            <span className='congrat-span'>Enter the Selling Price</span>
                                        </div>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-2 col-5'>
                                                <form>
                                                    <input type='number' class="form-control" placeholder='0' style={{ border: "2px solid " }} />
                                                </form>
                                            </div>
                                            <div className='col-md-3 col-5 d-flex align-items-center'>
                                                <span className='text-infom'>ROAD ($100.82)</span>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-lg-3 col-md-3 mt-3 mb-3'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn btn-congrats' size="lg">
                                                        SUMBIT
                                                    </button>
                                                </div>
                                            </div>
                                        </div></div> : <div className="row d-flex flex-row justify-content-center justify-content-evenly mt-4 mb-3">
                                        {mintArray.map((item, index) => {
                                            return (
                                                <div className='col-md-3 box-Mint mt-3 '>
                                                    <div className="col-lg-3 uperimg col-md-5 d-flex justify-content-center align-items-center m-2 mt-3">
                                                        <img
                                                            alt="greetings"
                                                            src={`/config/${item.imageUrl}`}
                                                            className="model-i"
                                                        />
                                                    </div>
                                                    <div className='text-center mt-3'>
                                                        <span className='congrat-span'>Enter the Selling Price</span>
                                                    </div>
                                                    <div className='d-flex flex-row justify-content-center  mt-3 mb-3'>
                                                        <div className='col-md-6 col-5'>
                                                            <form>
                                                                <input type='number' class="form-control" placeholder='0' style={{ border: "2px solid " }} />
                                                            </form>
                                                        </div>
                                                        <div className='col-md-6 col-5 d-flex align-items-center'>
                                                            <span className='text-infom'>ROAD ($100.82)</span>
                                                        </div>
                                                    </div>
                                                    <div className='col-10 d-flex justify-content-center mb-3'>
                                                        <div className="d-grid gap-2">
                                                            <button className='btn btn-congrats' size="lg">
                                                                SUMBIT
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                // <div className="col-lg-3 uperimg col-md-5 d-flex justify-content-center align-items-center mt-2">
                                                //     <img
                                                //         alt="greetings"
                                                //         src={`/config/${item.imageUrl}`}
                                                //         className="model-i"
                                                //     />
                                                // </div>
                                            );
                                        })}
                                    </div>}


                                </div>

                            </Modal.Body>
                        </Modal> : <></>}




                        <div className='row d-flex justify-content-center mt-4 mb-5'>
                            <div className='col-lg-12 col-11 presale-box1'>
                                <img src={Title} className="mint-image" />
                                <div className='row'>
                                    <div className='col-11 ps-sm-5  text-end mt-3 mb-1'>
                                        {
                                            !playing ?
                                            <img src={off}
                                        onClick={playingSound}
                                        />
                                            :
                                            <img src={speaker}
                                           onClick={playingSound}
                                           />
                                        }
                                        
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center mt-1 mb-2'>
                                    <div className='col-md-11 col-11 mint-boxs  pb-4 mb-5'>
                                        <div className='row d-flex justify-content-center m-3'>
                                            <div className='col-lg-6 d-flex justify-content-center align-items-center mt-3 mb-3' >
                                                <img src={tiger} id="mint-pic" />
                                            </div>
                                            <div className='col-lg-6 d-flex flex-column justify-content-center'>
                                                <div className='col-11 mint-boxes d-flex justify-content-between mb-3 pt-3 pb-3'>
                                                    <span className='mint-span ps-2'>Your Energy:</span>
                                                    <span className='mint-span1'>{(energyPoint).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}&nbsp;<img src={Vector} /></span>
                                                    {/* <span className='mint-span1'>{parseFloat(energyPoint)toFixed(2)}<img src={Vector} /></span> */}

                                                </div>
                                                <div className='col-11 mint-boxes d-flex justify-content-between mt-3 pt-3 pb-3'>
                                                    <span className='mint-span ps-2'>Energy Spend:</span>
                                                    <span className='mint-span1'>{spendEnergy} &nbsp;<img src={Vector} /></span>
                                                </div>

                                                <div className=' d-flex justify-content-center justify-content-around align-items-center mt-4'>
                                                    <a onClick={decreaseValue} style={{ cursor: "pointer" }}><img src={Mins} /></a>
                                                    <div className='boxess d-flex justify-content-center align-items-center'>{value}</div>
                                                    <a onClick={increaseValue} style={{ cursor: "pointer" }}> <img src={plus} /></a>
                                                </div>

                                                <div className=' d-flex justify-content-center align-items-center mt-lg-3 mt-3'>
                                                    <button className='btn mintbtn ' onClick={() => mint(true)}>MINT</button>
                                                </div>
                                                <span className='mintspan23 pt-lg-4 pt-3'>MAXIMUM OF 3 NFTs CARD PER tx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mb-5'>
                                    <div className='col-md-12 col-11 mint-Page-border mb-4 scroll-tab'>
                                        <table class="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className='Mint-Time text-start'>Time</th>
                                                    <th scope="col" className='Mint-Time'>Type</th>
                                                    <th scope="col" className='Mint-Time'>Amount</th>
                                                    <th scope="col" className='Mint-Time'>Status</th>
                                                    <th scope="col" className='Mint-Time'>TX</th>
                                                </tr>
                                            </thead>
                                            {isDetail && (<tbody>
                                                <tr>
                                                    <th scope="col" className='Mint-Time text-start'>{new Date().toLocaleTimeString()}</th>
                                                    <th scope="col" className='Mint-Time'>Mint</th>
                                                    <th scope="col" className='Mint-Time'>{value}</th>
                                                    <th scope="col" className='Mint-Time'>True</th>
                                                    <th scope="col" className='Mint-Time'><a
                                                        href={`https://testnet.bscscan.com/tx/${transctionData.transactionHash}`}
                                                        target="blank"
                                                    >
                                                        {transctionData.transactionHash?.substring(0, 3) +
                                                            "..." +
                                                            transctionData.transactionHash?.substring(
                                                                transctionData.transactionHash?.length - 3
                                                            )}
                                                    </a></th>
                                                </tr>
                                            </tbody>)}

                                        </table>
                                        {/* <div className='row pt-3 text-start text-sm-center '>
                                            <div className='col-sm-4 text-start' >
                                                <span className='Mint-Time '>Time</span>
                                            </div>
                                            <div className='col-sm-2 text-start'>
                                                <span className='Mint-Time'>Type</span>
                                            </div>
                                            <div className='col-sm-2 text-start'>
                                                <span className='Mint-Time'>Amount</span>
                                            </div>
                                            <div className='col-sm-2 text-start'>
                                                <span className='Mint-Time'>Status</span>
                                            </div>
                                            <div className='col-sm-2 text-start'>
                                                <span className='Mint-Time'>TX</span>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                {/* {isDetail && <div className='row mb-5'>
                                    <div className='col-md-12 col-11 mint-Page-border mb-4'>
                                        <div className='row pt-3 text-start text-sm-center '>
                                            <div className='col-sm-4 text-start' >
                                                <span className='Mint-Time '>{new Date().toLocaleTimeString()}</span>
                                            </div>
                                            <div className='col-sm-2 text-start'>
                                                <span className='Mint-Time'>Mint</span>
                                            </div>
                                            <div className='col-sm-2 text-start'>
                                                <span className='Mint-Time'>{value}</span>
                                            </div>
                                            <div className='col-sm-2 text-start'>
                                                <span className='Mint-Time'>True</span>
                                            </div>
                                            <div className='col-sm-2 text-start'>
                                                <span className='Mint-Time'>
                                                    <a
                                                        href={`https://testnet.bscscan.com/tx/${transctionData.transactionHash}`}
                                                        target="blank"
                                                    >
                                                        {transctionData.transactionHash?.substring(0, 3) +
                                                            "..." +
                                                            transctionData.transactionHash?.substring(
                                                                transctionData.transactionHash?.length - 3
                                                            )}
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Mint