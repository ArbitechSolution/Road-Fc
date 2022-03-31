import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from "react-router-dom";
import "./NFTstaking.css"
import image2 from "../../Assets/image 2.png"
import pool1 from "../../Assets/pool1 1.png"
import pool2 from "../../Assets/pool2 1.png"
import pool3 from "../../Assets/pool3 1.png"
import pool4 from "../../Assets/pool4 1.png"
import pool5 from "../../Assets/pool5 1.png"
import pool6 from "../../Assets/pool6 1.png"
import Rectangle572 from "../../Assets/Rectangle 572.png"
import Vector22 from "../../Assets/Vector22.png"
import Vector33 from "../../Assets/Vector33.png"
import Growth from "../../Assets/Growth.png"
import Frame2 from "../../Assets/Frame 2.png"
import Frame3 from "../../Assets/Frame 3.png"
import Box from "../../Assets/Box.png"
import nft1 from "../../Assets/nft 1.png"
import marketplace1 from "../../Assets/marketplace 1.png"
import Group593 from "../../Assets/Group 593.png"
import Title22 from "../../Assets/Title22.png"
import SideBar from "../SideBar/SideBar"
import MediaSidebar from '../SideBar/MediaSidebar';
function NFTstaking() {
    return (
        <div className='imagePool'>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-center pt-5 pb-3'>
                    <div className='col-lg-2 col-md-3 col-4 d-flex justify-content-start' >
                        <span id="presale-back"><Link to="/"><MdOutlineKeyboardBackspace size={40} style={{ color: "white" }} /></Link> Back</span>
                    </div>
                    <div className='col-lg-2 col-md-3 col-5' >
                        <button className='btn poolbtn'>CONNECT</button>
                    </div>
                </div>
                <div className='row d-flex justify-content-center justify-content-around'>
                    <div className='col-3 staking-box'>
                        <SideBar />
                    </div>
                    <div className='col-11 mb-3 staking-coll'>
                        <MediaSidebar />
                    </div>

                    <div className='col-lg-8 col-11 mb-md-1 pb-5 mb-4 mt-4'>
                        <div className='row d-flex justify-content-center mt-2 mb-1'>
                            <div className='col-lg-12 col-11 presale-box1'>
                                <img src={Title22} className="mint-image" />
                                <div className='row'>
                                    <div className='col-12'>
                                        <span className='staking-span'>With NFTs card Stake and get your reward with $ROAD token!</span>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center mt-3 mb-3 ms-lg-1'>
                                    <div className='col-lg-4 col-11 NFTstaking-boxes'>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-12 NFTstaking-boxes1'>
                                                <p className='nftstaking-p'>Total Rewards:</p>
                                                <p className='nftstaking-p1'>1,500,000,000</p>
                                            </div>
                                            <div className='col-11 boxs-staking d-flex justify-content-between align-items-center mt-3'>
                                                <span className='nftstaking-span2'>Remaining Rewards:</span>
                                                <span className='nftstaking-span3'>450,000,000</span>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center justify-content-around'>
                                            <div className='col-5  boxs-staking d-flex flex-column mt-3' >
                                                <span className='nft-staking-p pb-2'>500,000</span>
                                                <span className='nft-staking-p1'>Total Mining Power</span>
                                            </div>
                                            <div className='col-5 boxs-staking d-flex flex-column mt-3' >
                                                <span className='nft-staking-p pb-2'>1,000</span>
                                                <span className='nft-staking-p1'>My Mining Power</span>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center justify-content-around'>
                                            <div className='col-5 boxs-staking d-flex flex-column mt-3' >
                                                <span className='nft-staking-p pb-2'>250,000</span>
                                                <span className='nft-staking-p1'>Total Staked Amount</span>
                                            </div>
                                            <div className='col-5 boxs-staking d-flex flex-column mt-3' >
                                                <span className='nft-staking-p pb-2'>12,122</span>
                                                <span className='nft-staking-p1'>My Staked Amount</span>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center '>
                                            <div className='col-11 boxs-staking d-flex justify-content-between align-items-center mt-3'>
                                                <span className='nftstaking-span2'>Total Staked Tokens($ROAD):</span>
                                                <span className='nftstaking-span3'>100,000</span>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center '>
                                            <div className='col-11 boxs-staking d-flex justify-content-between align-items-center mt-3'>
                                                <span className='nftstaking-span2'>My Staked Tokens($ROAD):</span>
                                                <span className='nftstaking-span3'>1,000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-8'>
                                        <div className='row d-flex justify-content-center justify-content-around'>
                                            <div className='col-md-4 nft-staking-b0xxs p-2 mt-2 mb-1'>
                                                <div>
                                                    <img src={pool1} className="nftstaking-img mt-2" />
                                                    <p className='text-center mt-2' style={{ color: "white", }}>Pepe</p>
                                                </div>
                                                <div className=' d-flex flex-row justify-content-center justify-content-evenly'>
                                                    <div className=''>
                                                        <button className='btn nft-staking-btn'>Stake</button>
                                                    </div>
                                                    <div className=''>
                                                        <button className='btn nft-staking-btn1'>Unstake</button>
                                                    </div>
                                                    <div>
                                                        <button className='btn nft-staking-btn3'>Claim</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='col-md-4 nft-staking-b0xxs p-2 mt-2'>
                                                <div>
                                                    <img src={pool2} className="nftstaking-img mt-2" />
                                                    <p className='text-center mt-2' style={{ color: "white", }}>Frankenstein</p>
                                                </div>
                                                <div className='row d-flex justify-content-center justify-content-md-around'>
                                                    <div className=' d-flex flex-row justify-content-center justify-content-evenly'>
                                                        <div className=''>
                                                            <button className='btn nft-staking-btn'>Stake</button>
                                                        </div>
                                                        <div className=''>
                                                            <button className='btn nft-staking-btn1'>Unstake</button>
                                                        </div>
                                                        <div>
                                                            <button className='btn nft-staking-btn3'>Claim</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='col-md-4 nft-staking-b0xxs p-2 mt-2'>
                                                <div>
                                                    <img src={pool3} className="nftstaking-img mt-2" />
                                                    <p className='text-center mt-2' style={{ color: "white", }}>Vampire</p>
                                                </div>
                                                <div className=' d-flex justify-content-center'>
                                                    <div className=''>
                                                        <button className='btn nft-staking-btn'>Stake</button>
                                                    </div>
                                                    <div className=''>
                                                        <button className='btn nft-staking-btn1'>Unstake</button>
                                                    </div>
                                                    <div>
                                                        <button className='btn nft-staking-btn3'>Claim</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='col-md-4 nft-staking-b0xxs p-2 mt-2'>
                                                <div>
                                                    <img src={pool4} className="nftstaking-img mt-2" />
                                                    <p className='text-center mt-2' style={{ color: "white", }}>Alien</p>
                                                </div>
                                                <div className=' d-flex justify-content-center '>
                                                    <div className=''>
                                                        <button className='btn nft-staking-btn'>Stake</button>
                                                    </div>
                                                    <div className=''>
                                                        <button className='btn nft-staking-btn1'>Unstake</button>
                                                    </div>
                                                    <div>
                                                        <button className='btn nft-staking-btn3'>Claim</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4 nft-staking-b0xxs p-2 mt-2'>
                                                <div>
                                                    <img src={pool5} className="nftstaking-img mt-2" />
                                                    <p className='text-center mt-2' style={{ color: "white", }}>Ape</p>
                                                </div>
                                                <div className=' d-flex justify-content-center'>
                                                    <div className=''>
                                                        <button className='btn nft-staking-btn'>Stake</button>
                                                    </div>
                                                    <div className=''>
                                                        <button className='btn nft-staking-btn1'>Unstake</button>
                                                    </div>
                                                    <div>
                                                        <button className='btn nft-staking-btn3'>Claim</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='col-md-4 nft-staking-b0xxs p-2 mt-2'>
                                                <div>
                                                    <img src={pool6} className="nftstaking-img mt-2" />
                                                    <p className='text-center mt-2' style={{ color: "white", }}>Wolf</p>
                                                </div>
                                                <div className=' d-flex justify-content-center'>
                                                <div className=''>
                                                            <button className='btn nft-staking-btn'>Stake</button>
                                                        </div>
                                                        <div className=''>
                                                            <button className='btn nft-staking-btn1'>Unstake</button>
                                                        </div>
                                                        <div>
                                                            <button className='btn nft-staking-btn3'>Claim</button>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row d-flex flex-row justify-content-center justify-content-evenly mb-4 mt-4' >

                                            <div className='col-1 d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={Rectangle572} style={{ position: "absolute" }} />
                                                <img src={Vector22} style={{ position: " relative" }} />
                                            </div>
                                            <div className='col-lg-3 col-md-5 col d-flex flex-row align-items-center justify-content-evenly'>
                                                <span className='MyCollectionspan'>Current</span>
                                                <div className='bosCollection'>
                                                    <span className='mycollectionsP '>1</span>
                                                </div>
                                                <span className='MyCollectionspan'>/3</span>
                                            </div>

                                            {/* <button className='btn '> */}
                                            <div className='col-1 d-flex align-items-center justify-content-center ms-4' style={{ cursor: "pointer" }}>
                                                <img src={Rectangle572} style={{ position: "absolute" }} />
                                                <img src={Vector33} style={{ position: " relative" }} />
                                            </div>
                                            {/* </button> */}

                                        </div>
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

export default NFTstaking