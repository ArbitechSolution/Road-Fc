import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import "./Staking.css"
import { Link } from "react-router-dom";

import Badge from 'react-bootstrap/Badge'
import Growth from "../../Assets/Growth.png"
import Frame2 from "../../Assets/Frame 2.png"
import Frame3 from "../../Assets/Frame 3.png"
import Box from "../../Assets/Box.png"
import nft1 from "../../Assets/nft 1.png"
import marketplace1 from "../../Assets/marketplace 1.png"
import Group593 from "../../Assets/Group 593.png"
import image2 from "../../Assets/image 2.png"
import roadsign from "../../Assets/road-sign 1.png"
import tin from "../../Assets/--40 1.png"
import { ImInfo } from 'react-icons/im';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import Group494 from "../../Assets/Group 494.png"
import Group493 from "../../Assets/Group 493.png"
function Staking() {
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
                                    <button className='btn staking-btn text-start d-flex align-items-center active' >
                                        <img src={Growth} width="30px" />&nbsp;&nbsp; Staking & Point
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
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
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
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
                        <div className='row'>
                            <div className='col-lg-12 col-12 staking-box1111'>
                                <div className='row'>
                                    <div className='col-md-6 col-8 pt-4 pb-4 ps-md-4'>
                                        <h4 className='staking-h4 pt-4 text-start'>NFT Fighter Card Want?</h4>
                                        <p className='staking-pp pt-2'>Need energy point to mint NFTs Stake ROAD token to earn energy points now !</p>
                                    </div>
                                    <div className='col-md-6 col-4 pt-3 pb-3 staking-colllll'>
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
                                                    ROAD STAKING
                                                    </div>
                                                    <div className='col-2'>
                                                        <div class="social">
                                                            <div class="social__container">
                                                                <div class="social__content">
                                                                    <ImInfo className='social__icon' />
                                                                    <div class="social__tooltip social__tooltip-bottom">
                                                                        <img src={Group493} className="staking-info-pic"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center mt-4 '>
                                            <div className='col-11 staking-box-col10'>
                                                <div className='row'>
                                                    <div className='col-12 pt-2 pb-2'>
                                                        <span className='staking-spann'>POOL INFO</span>
                                                    </div>
                                                    <div className='col-12 pt-2 pb-3 d-flex justify-content-between align-items-center' style={{ borderTop: "2px solid #5A5C6A" }}>
                                                        <span id='Skaing-span'>Total ROAD Staked</span>
                                                        <span id='Skaing-spans'>3,014,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-center mt-4 '>
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
                                        </div>

                                        <div className='row d-flex justify-content-center mt-4'>
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
                                                    <div className='col-12'>
                                                        <div class="tab-wrap">
                                                            <input type="radio" id="tab1" name="tabGroup1" className="tab" checked />
                                                            <label for="tab1" >Stake</label>
                                                            <input type="radio" id="tab2" name="tabGroup1" className="tab" />
                                                            <label for="tab2">UNSTAKE</label>
                                                            <div className="tab__content">
                                                                <div className='row d-flex justify-content-center mt-4'>
                                                                    <div className='col-8 staking-tab-b0xes'>
                                                                        <span className='staking-tab-span'>0.00</span>&nbsp;<span className='presale-span1'>road</span>
                                                                    </div>
                                                                    <div className='col-2'>
                                                                        <Badge bg="secondary">Max</Badge>
                                                                    </div>
                                                                    <div className='col-7 mt-3 mb-2'>
                                                                        <div className="d-grid gap-2">
                                                                            <button variant="primary" className='btn staking-tab-btn' size="lg">
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
                                                                    <div className='col-8 staking-tab-b0xes'>
                                                                        <span className='staking-tab-span'>0.00</span>&nbsp;<span className='presale-span1'>road</span>
                                                                    </div>
                                                                    <div className='col-2'>
                                                                        <Badge bg="secondary">Max</Badge>
                                                                    </div>
                                                                    <div className='col-7 mt-3 mb-2'>
                                                                        <div className="d-grid gap-2">
                                                                            <button variant="primary" className='btn staking-tab-btn' size="lg">
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

                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-md-9 col-11 staking-box1111a mb-4'>
                                        <div className='row'>
                                            <div className='col-12 staking-col12-Box pb-2 pt-2'>
                                                <div className='row'>
                                                    <div className='col-10'>
                                                        ROAD/BNB STAKING
                                                    </div>
                                                    <div className='col-2'>
                                                        <div class="social">
                                                            <div class="social__container">

                                                                <div class="social__content">
                                                                    <ImInfo className='social__icon' />
                                                                    <div class="social__tooltip social__tooltip-bottom">
                                                                        <img src={Group494} className="staking-info-pic"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center mt-4 '>
                                            <div className='col-11 staking-box-col10'>
                                                <div className='row'>
                                                    <div className='col-12 pt-2 pb-2'>
                                                        <span className='staking-spann'>POOL INFO</span>
                                                    </div>
                                                    <div className='col-12 pt-2 pb-3 d-flex justify-content-between align-items-center' style={{ borderTop: "2px solid #5A5C6A" }}>
                                                        <span id='Skaing-span'>Total ROAD Staked</span>
                                                        <span id='Skaing-spans'>3,014,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-center mt-4 '>
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
                                        </div>

                                        <div className='row d-flex justify-content-center mt-4'>
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
                                                    <div className='col-12'>
                                                        <div class="tab-wrap">
                                                            <input type="radio" id="tab3" name="tabGroup2" className="tab" checked />
                                                            <label for="tab3" >Stake</label>
                                                            <input type="radio" id="tab4" name="tabGroup2" className="tab" />
                                                            <label for="tab4">UNSTAKE</label>
                                                            <div className="tab__content">
                                                                <div className='row d-flex justify-content-center mt-4'>
                                                                    <div className='col-8 staking-tab-b0xes'>
                                                                        <span className='staking-tab-span'>0.00</span>&nbsp;<span className='presale-span1'>road</span>
                                                                    </div>
                                                                    <div className='col-2'>
                                                                        <Badge bg="secondary">Max</Badge>
                                                                    </div>
                                                                    <div className='col-7 mt-3 mb-2'>
                                                                        <div className="d-grid gap-2">
                                                                            <button variant="primary" className='btn staking-tab-btn' size="lg">
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
                                                                    <div className='col-8 staking-tab-b0xes'>
                                                                        <span className='staking-tab-span'>0.00</span>&nbsp;<span className='presale-span1'>road</span>
                                                                    </div>
                                                                    <div className='col-2'>
                                                                        <Badge bg="secondary">Max</Badge>
                                                                    </div>
                                                                    <div className='col-7 mt-3 mb-2'>
                                                                        <div className="d-grid gap-2">
                                                                            <button variant="primary" className='btn staking-tab-btn' size="lg">
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

export default Staking