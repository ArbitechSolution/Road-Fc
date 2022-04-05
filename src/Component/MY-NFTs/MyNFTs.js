import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from "react-router-dom";
import "./MyNFTs.css"
import { getWallet } from '../Redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux';
import Growth from "../../Assets/Growth.png"
import Frame2 from "../../Assets/Frame 2.png"
import Frame3 from "../../Assets/Frame 3.png"
import Box from "../../Assets/Box.png"
import nft1 from "../../Assets/nft 1.png"
import marketplace1 from "../../Assets/marketplace 1.png"
import Group593 from "../../Assets/Group 593.png"
import image2 from "../../Assets/image 2.png"
import Rectangle572 from "../../Assets/Rectangle 572.png"
import Vector22 from "../../Assets/Vector22.png"
import Vector33 from "../../Assets/Vector33.png"
import SideBar from "../SideBar/SideBar"
import MediaSidebar from '../SideBar/MediaSidebar';
import tiger10 from "../../Assets/tiger 1 10.png"
import tiger11 from "../../Assets/tiger 1 11.png"
import tiger12 from "../../Assets/tiger 1 12.png"
import tiger13 from "../../Assets/tiger 1 13.png"
function MyNFTs() {
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
                    <div className='col-lg-2 col-md-3 col-4 d-flex justify-content-start' >
                        <span id="presale-back"><Link to="/"><MdOutlineKeyboardBackspace size={40} style={{ color: "white" }} /></Link> Back</span>
                    </div>
                    <div className='col-lg-2 col-md-3 col-5' >
                    <button onClick={() => getWalletAddress()} className='btn poolbtn'>{acc === "Wrong Network" ? "Wrong Networkk":acc === "Connect" ? "Connect" : acc === "No Wallet" ? "Connect" : acc.substring(0, 5) + "..." + acc.substring(acc.length - 5)}</button>

                    </div>
                </div>
                <div className='row d-flex justify-content-center justify-content-around pb-5'>
                    <div className='col-3 staking-box'>
                        <SideBar />
                    </div>
                    <div className='col-11 mb-3 staking-coll'>
                        <MediaSidebar />
                    </div>

                    <div className='col-lg-8 col-11 mb-md-1 mb-4'>
                        <div className='row d-flex justify-content-center mb-1'>
                            <div className='col-12'>
                                <h4 className='nft-h4'>MY NFTs</h4>
                                <p className='nft-p'>Total <span className='nft-span'>(58)</span></p>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center justify-content-between mb-3'>
                            <div className='col-md-2 nft-boxx p-2 mt-3 '>
                                <img src={image2} className="nfts-image " />
                                <p className='nfts-h6 mt-3'>#20211 Trainer</p>
                                <p className='nfts-pp text-start'>Common</p>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <button className='btn btnStakePage32' size="lg">
                                        Sell
                                    </button>
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 nft-boxx p-2 mt-3'>
                                <img src={tiger10} className="nfts-image " />
                                <p className='nfts-h6 mt-3'>#20211 Trainer</p>
                                <p className='nfts-pp text-start'>Common</p>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <button className='btn btnStakePage32' size="lg">
                                        Sell
                                    </button>
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 nft-boxx p-2  mt-3'>
                                <img src={tiger11} className="nfts-image " />
                                <p className='nfts-h6 mt-3'>#20211 Trainer</p>
                                <p className='nfts-pp text-start'>Common</p>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <button className='btn btnStakePage32' size="lg">
                                        Sell
                                    </button>
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 nft-boxx p-2 mt-3'>
                                <img src={tiger12} className="nfts-image " />
                                <p className='nfts-h6 mt-3'>#20211 Trainer</p>
                                <p className='nfts-pp text-start'>Common</p>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <button className='btn btnStakePage32' size="lg">
                                        Sell
                                    </button>
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 nft-boxx p-2 mt-3'>
                                <img src={image2} className="nfts-image " />
                                <p className='nfts-h6 mt-3'>#20211 Trainer</p>
                                <p className='nfts-pp text-start'>Common</p>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <button className='btn btnStakePage32' size="lg">
                                        Sell
                                    </button>
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 nft-boxx p-2 mt-3'>
                                <img src={tiger10} className="nfts-image " />
                                <p className='nfts-h6 mt-3'>#20211 Trainer</p>
                                <p className='nfts-pp text-start'>Common</p>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <button className='btn btnStakePage32' size="lg">
                                        Sell
                                    </button>
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 nft-boxx p-2 mt-3'>
                                <img src={tiger11} className="nfts-image " />
                                <p className='nfts-h6 mt-3'>#20211 Trainer</p>
                                <p className='nfts-pp text-start'>Common</p>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <button className='btn btnStakePage32' size="lg">
                                        Sell
                                    </button>
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 nft-boxx p-2 mt-3'>
                                <img src={tiger12} className="nfts-image " />
                                <p className='nfts-h6 mt-3'>#20211 Trainer</p>
                                <p className='nfts-pp text-start'>Common</p>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <button className='btn btnStakePage32' size="lg">
                                        Sell
                                    </button>
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 nft-boxx p-2 mt-3'>
                                <img src={image2} className="nfts-image " />
                                <p className='nfts-h6 mt-3'>#20211 Trainer</p>
                                <p className='nfts-pp text-start'>Common</p>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <button className='btn btnStakePage32' size="lg">
                                        Sell
                                    </button>
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 nft-boxx p-2 mt-3'>
                                <img src={tiger10} className="nfts-image " />
                                <p className='nfts-h6 mt-3'>#20211 Trainer</p>
                                <p className='nfts-pp text-start'>Common</p>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <button className='btn btnStakePage32' size="lg">
                                        Sell
                                    </button>
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 nft-boxx p-2 mt-3'>
                                <img src={tiger11} className="nfts-image " />
                                <p className='nfts-h6 mt-3'>#20211 Trainer</p>
                                <p className='nfts-pp text-start'>Common</p>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <button className='btn btnStakePage32' size="lg">
                                        Sell
                                    </button>
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 nft-boxx p-2 mt-3'>
                                <img src={tiger12} className="nfts-image " />
                                <p className='nfts-h6 mt-3'>#20211 Trainer</p>
                                <p className='nfts-pp text-start'>Common</p>
                                <div className="d-flex justify-content-between mt-2 mb-2">
                                    <button className='btn btnStakePage32' size="lg">
                                        Sell
                                    </button>
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='row d-flex flex-row justify-content-center justify-content-evenly mt-3 mb-4' >

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
    )
}

export default MyNFTs