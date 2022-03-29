import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import "./Presale.css"
import p305 from "../../Assets/305 1.png"
import { getWallet } from '../Redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux';
import {stakingContractAddress,stakingContractAbi} from '../Utils/stakingContract'
import ProgressBar from 'react-bootstrap/ProgressBar'
function Presale() {

    let dispatch = useDispatch();   
    let { acc } = useSelector(state => state.connectWallet);

    const getWalletAddress = () => {
        dispatch(getWallet());
        // allImagesNfts()

    }

    return (
        <div className='imagePool'>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-center pt-5 pb-3'>
                    <div className='col-lg-2 d-flex justify-content-start' >
                        <span id="presale-back"><MdOutlineKeyboardBackspace size={40} style={{ color: "white" }} /> Back</span>
                    </div>
                    <div className='col-lg-2 col-md-3'>
                    <button onClick={() => getWalletAddress()} className='btn poolbtn'>{acc === "No Wallet" ? "Insatll metamask" : acc === "Connect Wallet" ? acc : acc === "Connect to Rinkebey" ? acc : acc.substring(0, 5) + "..." + acc.substring(acc.length - 5)}</button>

                    </div>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-12 col-11  presale-box pb-4 mb-2'>
                        <div className='row'>
                            <div className='col-md-6 col-8'>
                                <p className='Presale-p pt-3 pt-2 ps-md-3 pb-md-3'>Road Token Pre-Sale is Live</p>
                                <p className='presale-p1 ps-md-3 pb-md-3'>Available Now</p>
                                <div className='d-flex justify-content-start align-items-center ps-md-3 '>
                                    <button className='btn presalebtn'>Buy ROAD Token</button>&nbsp;

                                    <span id="presale-span1">Price: $0.009</span>
                                </div>
                            </div>
                            <div className='col-md-6 col-4 d-flex justify-content-end align-items-end'>
                                <img src={p305} className="presale-image"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row d-flex justify-content-center pb-5'>
                    <div className='col-md-12 col-11 presale-box1 pb-4 mb-2'>
                        <h4 className='pool-h4 pt-3'>ROAD PRE-SALE POOL HAS STARTED</h4>
                        <p className='pool-p2 pt-2'>Buy ROAD And Stake ! Get Energy point for NFTs Card</p>

                        <div className='row d-flex justify-content-center justify-content-evenly'>
                            <div className='col-lg-5 col-md-7 col-11 pool-box3 mb-4'>
                                <h5 className='bool-h55 pt-5 fw-bold'>PRE-SALE</h5>
                                <div className='row d-flex justify-content-center pt-4 pb-2'>
                                    <div className='col-11 text-start'>
                                        <form>
                                            <label className="form-label  fw-bold" style={{ color: "#5E606E" }}>BNB</label>
                                            <input type='number' class="form-control" placeholder='0.00' />
                                        </form>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center pt-4 pb-2'>
                                    <div className='col-11 text-start'>
                                        <form>
                                            <label className="form-label fw-bold" style={{ color: "#5E606E" }}>ROAD</label>
                                            <input type='number' class="form-control" placeholder='0.00' />
                                        </form>
                                    </div>
                                </div>

                                <div className='row d-flex justify-content-center pt-5 pb-2'>
                                    <div className='col-6'>
                                        <div className="d-grid gap-2">
                                            <button className='btn poolbtn1' size="lg">
                                                Buy ROAD
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center pt-5 pb-2'>
                                    <div className='col-11 d-flex justify-content-between align-items-center'>
                                        <span className='presale-span'>Progress</span>
                                        <span className='presale-span1'>Current Pool</span>
                                    </div>
                                    <div className='col-11 presale-b0x1 pt-4 pb-4 mt-2'>
                                        <ProgressBar variant="warning" style={{ Color: "#E24034" }} now={40} />
                                        <div className='d-flex justify-content-between pt-1'>
                                            <span className='span-presale'>100%</span>
                                            <span className='span-presale'>120,000,000 ROAD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-7 col-11 pool-box3 mb-4'>
                                <h5 className='bool-h55 pt-5 fw-bold'>PRE-SALE POOL</h5>

                                <div className='row d-flex justify-content-center mt-4'>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-2'>
                                        <span className='presale-span21'>Total Supply</span>
                                        <span className='presale-span22'>10,000,000,000 &nbsp;<span className='presale-span1'>ROAD</span></span>
                                    </div>
                                    <div className='col-11 mt-3' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Token for Presales</span>
                                        <span className='presale-span22'>120,000,000 &nbsp;<span className='presale-span1'>ROAD</span></span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Price</span>
                                        <span className='presale-span22'>$0.009</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Minimum Purchase</span>
                                        <span className='presale-span22'>0.1 BNB</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Max Purchase</span>
                                        <span className='presale-span22'>12 BNB</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Presale Start time</span>
                                        <span className='presale-span22'>10 Feb, 2022 UTC 21:00</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Presale End time</span>
                                        <span className='presale-span22'>10 Feb, 2022 UTC 21:00</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Soft Cap</span>
                                        <span className='presale-span22'>1,000 BNB</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center '>
                                    <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                        <span className='presale-span21'>Hard Cap</span>
                                        <span className='presale-span22'>2,000 BNB</span>
                                    </div>
                                    <div className='col-11 mt-2' >
                                        <p style={{ border: "1px solid #292C38" }}></p>
                                    </div>
                                </div>

                                <h5 className='bool-h55 pt-3 fw-bold'>We accepted BNB</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presale
