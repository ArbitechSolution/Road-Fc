import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from "react-router-dom";
import "./MyNFTs.css"
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
function MyNFTs() {
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
                        <div className='row d-flex justify-content-center mt-5 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center ' >
                                        <img src={Growth} width="30px" />&nbsp;&nbsp; Staking & Point
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center ' >
                                        <img src={Frame2} width="30px" />&nbsp;&nbsp; Mint
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={Frame3} width="24px" />&nbsp;&nbsp; Breed
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={Box} width="30px" />&nbsp;&nbsp; Mystery Box
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={nft1} width="30px" />&nbsp;&nbsp; NFT Staking
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={marketplace1} width="30px" />&nbsp;&nbsp; NFT Market
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center active' >
                                        <img src={Group593} width="30px" />&nbsp;&nbsp; My NFT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-11 mb-3 staking-coll'>

                        <div class="accordion " id="accordionFlushExample">
                            <div class="accordion-item staking-boxResponsive">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" style={{ color: "white" }} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <div className='col-10 active' >
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Growth} width="30px" />&nbsp;&nbsp; Staking & Point
                                                </button>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div className='col-10'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Frame2} width="30px" />&nbsp;&nbsp; Mint
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Frame3} width="24px" />&nbsp;&nbsp; Breed
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Box} width="30px" />&nbsp;&nbsp; Mystery Box
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={nft1} width="30px" />&nbsp;&nbsp; NFT Staking
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2 '>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={marketplace1} width="30px" />&nbsp;&nbsp; NFT Market
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Group593} width="30px" />&nbsp;&nbsp; My NFT
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-8 col-11 mb-md-1 mb-4'>
                        <div className='row d-flex justify-content-center mb-1'>
                            <div className='col-12'>
                                <h4 className='nft-h4'>MY NFTs</h4>
                                <p className='nft-p'>Total <span className='nft-span'>(58)</span></p>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center justify-content-md-between mb-3'>
                            <div className='col-md-3 nft-boxx p-2 mt-lg-1'>
                                <img src={image2} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>#20211 Trainer</span>
                                    <span className='nfts-pp'>Common</span>
                                </div>
                                <div className="d-grid gap-2 mt-4 mb-2">
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-lg-1 mt-2'>
                                <img src={image2} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>#20211 Trainer</span>
                                    <span className='nfts-pp'>Common</span>
                                </div>
                                <div className="d-grid gap-2 mt-4 mb-2">
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-lg-1 mt-3'>
                                <img src={image2} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>#20211 Trainer</span>
                                    <span className='nfts-pp'>Common</span>
                                </div>
                                <div className="d-grid gap-2 mt-4 mb-2">
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <img src={image2} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>#20211 Trainer</span>
                                    <span className='nfts-pp'>Common</span>
                                </div>
                                <div className="d-grid gap-2 mt-4 mb-2">
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <img src={image2} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>#20211 Trainer</span>
                                    <span className='nfts-pp'>Common</span>
                                </div>
                                <div className="d-grid gap-2 mt-4 mb-2">
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <img src={image2} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>#20211 Trainer</span>
                                    <span className='nfts-pp'>Common</span>
                                </div>
                                <div className="d-grid gap-2 mt-4 mb-2">
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <img src={image2} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>#20211 Trainer</span>
                                    <span className='nfts-pp'>Common</span>
                                </div>
                                <div className="d-grid gap-2 mt-4 mb-2">
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <img src={image2} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>#20211 Trainer</span>
                                    <span className='nfts-pp'>Common</span>
                                </div>
                                <div className="d-grid gap-2 mt-4 mb-2">
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <img src={image2} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>#20211 Trainer</span>
                                    <span className='nfts-pp'>Common</span>
                                </div>
                                <div className="d-grid gap-2 mt-4 mb-2">
                                    <button className='btn btnStakePage' size="lg">
                                        Transfer
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='row d-flex flex-row justify-content-center justify-content-evenly mb-4' >

                            <div className='col-1 d-flex align-items-center justify-content-center'  style={{ cursor: "pointer" }}>
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