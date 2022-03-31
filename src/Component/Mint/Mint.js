import React, { useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from "react-router-dom";

import "./Mint.css"
import Modal from 'react-bootstrap/Modal'
import Title from "../../Assets/Title.png"
import tiger from "../../Assets/tiger 1 1.png"
import Vector from "../../Assets/Vector.png"
import Mins from "../../Assets/Mins.png"
import plus from "../../Assets/plus.png"
import Group609 from "../../Assets/Group 609.png"
import SideBar from "../SideBar/SideBar"
import MediaSidebar from '../SideBar/MediaSidebar';
function Mint() {

    let [value, setValue] = useState(1)
    const [modalShow, setModalShow] = useState(false);
    const increaseValue = () => {
        setValue(++value)
    }
    const decreaseValue = () => {
        if (value > 1) {

            setValue(--value)
        }
    }
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
                       <MediaSidebar/>
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

                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <img src={tiger} className="mint-pic1 pt-4 pb-3" />
                                    </div>
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
                                            <button className='btn btn1-congrats' size="lg">
                                                Breed
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-md-3 mt-3 mb-3'>
                                        <div className="d-grid gap-2">
                                            <button className='btn btn2-congrats' size="lg">
                                                Breed
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal> : <></>}

                        <div className='row d-flex justify-content-center mt-4 mb-5'>
                            <div className='col-lg-12 col-11 presale-box1'>
                                <img src={Title} className="mint-image" />

                                <div className='row d-flex justify-content-center mt-1 mb-2'>
                                    <div className='col-md-11 col-11 mint-boxs  pb-4 mb-5'>
                                        <div className='row d-flex justify-content-center m-3'>
                                            <div className='col-lg-6 d-flex justify-content-center align-items-center mt-3 mb-3' >
                                                <img src={tiger} id="mint-pic" />
                                            </div>
                                            <div className='col-lg-6 d-flex flex-column justify-content-center'>
                                                <div className='col-11 mint-boxes d-flex justify-content-between mb-3 pt-3 pb-3'>
                                                    <span className='mint-span ps-2'>Your Energy:</span>
                                                    <span className='mint-span1'>1,000 Point &nbsp;<img src={Vector} /></span>
                                                </div>
                                                <div className='col-11 mint-boxes d-flex justify-content-between mt-3 pt-3 pb-3'>
                                                    <span className='mint-span ps-2'>Energy Spend:</span>
                                                    <span className='mint-span1'>500 Point &nbsp;<img src={Vector} /></span>
                                                </div>

                                                <div className=' d-flex justify-content-center justify-content-around align-items-center mt-4'>
                                                    <a onClick={decreaseValue} style={{ cursor: "pointer" }}><img src={Mins} /></a>
                                                    <div className='boxess d-flex justify-content-center align-items-center'>{value}</div>
                                                    <a onClick={increaseValue} style={{ cursor: "pointer" }}> <img src={plus} /></a>
                                                </div>

                                                <div className=' d-flex justify-content-center align-items-center mt-lg-3 mt-3'>
                                                    <button className='btn mintbtn ' onClick={() => setModalShow(true)}>MINT</button>
                                                </div>
                                                <span className='mintspan23 pt-lg-4 pt-3'>MAXIMUM OF 3 tiger nfts CARD PER tx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mb-5'>
                                    <div className='col-md-12 col-11 mint-Page-border mb-4'>
                                        <div className='row pt-3 text-start text-sm-center '>
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

export default Mint