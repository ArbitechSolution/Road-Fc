import React, { useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from "react-router-dom";
import "./Breed.css"
import { IoMdClose } from "react-icons/io";
import Breedimag from "../../Assets/Breed.png"
import Group195 from "../../Assets/Group 195.png"
import On from "../../Assets/On.png"
import tiger from "../../Assets/tiger 1 1.png"
import Group609 from "../../Assets/Group 609.png"
import Rectangle456 from "../../Assets/Rectangle 456.png"
import Rectangle457 from "../../Assets/Rectangle 457.png"
import Rectangle458 from "../../Assets/Rectangle 458.png"
import Rectangle463 from "../../Assets/Rectangle 463.png"
import Modal from 'react-bootstrap/Modal';
import card1 from "../../Assets/card 1.png"
import SideBar from "../SideBar/SideBar"
import MediaSidebar from '../SideBar/MediaSidebar';
function Breed() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowone, setModalShowone] = useState(false);
    return (
        <div className='imagePool'>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-center pt-5 pb-3'>
                    <div className='col-lg-2 col-md-3 col-4 d-flex justify-content-start' >
                        <span id="presale-back"><Link to="/"><MdOutlineKeyboardBackspace className='icon-rea' style={{ color: "white" }} /></Link> Back</span>
                    </div>
                    <div className='col-lg-2 col-md-3 col-5 d-flex justify-content-end' >
                        <button className='btn poolbtn'>CONNECT</button>
                    </div>
                </div>
                <div className='row d-flex justify-content-center justify-content-between'>
                    <div className='col-3 staking-box'>
                    <SideBar />
                    </div>

                    {/* <div className='col-11 mb-3 staking-coll'>
                    <MediaSidebar />
                    </div> */}
                    <div className='col-lg-8  col-11 mb-md-1 mb-4 mt-4 '>
                        {modalShow ? <Modal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered

                        >
                            {/* <Modal.Header closeButton className='Breed-model-image'>
                                <Modal.Title id="contained-modal-title-vcenter" style={{ color: "white", fontSize: "30px" }}>
                                    Breed
                                </Modal.Title>
                            </Modal.Header> */}
                            <Modal.Body className='mynfts-model-image mt=3' style={{ border: "2px solid #FF5043", }}>
                            <img src={Breedimag} className="breed-image2" />
                                <div className='row d-flex justify-content-center' >
                                    <div className='col-12 d-flex- justify-content-end'>
                                        <IoMdClose
                                            onClick={() => setModalShow(false)}
                                            size={28}
                                            style={{ color: "white", cursor: "pointer" }}
                                        />
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center' >
                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <img className='pt-3 congrat-image' src={Group609} />
                                    </div>
                                    <div className='col-md-12 d-flex justify-content-center mt-4'>
                                        <p className='breed-p'>You got a fighter now!</p>
                                    </div>
                                    <div className='col-md-12 d-flex justify-content-center breed-imagess mt-3 mb-3'>
                                        <img src={card1} className="mint-pic pt-4 pb-3" />
                                    </div>
                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <span className='congrat-span'>Do you want to Breed card or sell in the market?</span>
                                    </div>

                                </div>
                                <div className='d-flex justify-content-center'>

                                            <button className='btn btn-congrats m-sm-3 m-2' size="lg">
                                                Breed
                                            </button>

                                            <button className='btn btn1-congrats m-sm-3 m-2' size="lg" onClick={() => setModalShowone(true)}>
                                                Sell
                                            </button>

                                            <button className='btn btn2-congrats m-sm-3 m-2'  size="lg">
                                                Do it Later
                                            </button>

                                </div>
                            </Modal.Body>
                        </Modal> : <></>}

                        {modalShowone ? <Modal
                            show={modalShowone}
                            onHide={() => setModalShowone(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            style={{ backgroundColor: "#292C38" }}
                        >
                            <Modal.Body className='mynfts-model-image' style={{ border: "2px solid #FF5043", }}>
                            <img src={Breedimag} className="breed-image2" />
                                <div className='row d-flex justify-content-center' >
                                    <div className='col-12 d-flex- justify-content-end'>
                                        <IoMdClose
                                            onClick={() => setModalShowone(false)}
                                            size={28}
                                            style={{ color: "white", cursor: "pointer" }}
                                        />
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center' >
                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <img className='pt-3 congrat-image' src={Group609} />
                                    </div>
                                    <div className='col-md-12 d-flex justify-content-center mt-4'>
                                        <p className='breed-p'>You got a fighter now!</p>
                                    </div>
                                    <div className='col-md-12 d-flex justify-content-center breed-imagess mt-3 mb-3'>
                                        <img src={card1} className="mint-pic pt-4 pb-3" />
                                    </div>
                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <p className='breed-p'>Enter the Selling Price</p>
                                    </div>

                                </div>
                                <div className="row d-flex justify-content-center mt-3">
                                    <div className="col-lg-3 col-6">
                                        <form>
                                            <input type='number' class="form-control" placeholder='0' />
                                        </form>

                                    </div>
                                    <div className="col-lg-3 col-4 d-flex align-items-center">

                                        <p className='breed-sell-span'>ROAD ($  )</p>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-lg-2 col-md-3 mt-3 mb-3'>
                                        <div className="d-grid gap-2">
                                            <button className='btn btn-congrats' size="lg">
                                                SUMBIT
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </Modal.Body>
                        </Modal> : <></>}
                        <div className='row d-flex justify-content-center mt-4 mb-5 ms-2'>
                            <div className='col-lg-12 col-11 presale-box1'>
                                <img src={Breedimag} className="mint-image" />

                                <div className='row d-flex justify-content-lg-start justify-content-center'>
                                    <div className='col-lg-7'>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-lg-12 col-11 Breed-box p-3 ms-2'>
                                                <span>Select two Trainer Fighters who will perform the breed to make more powerful fighter. You can check rarity level HERE.</span>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center'>
                                            <div className="col-6  mb-lg-1 mb-5">
                                                <p className='breedtext1 mt-3'>TRAINER</p>
                                                <div className=' BreedBoxs'>
                                                    <img src={Group195} className='plus-breed pt-sm-5 pt-4 pb-sm-5 pb-4' />
                                                    <div className='BreedminiBox p-2'>
                                                        Trainer 1
                                                    </div>
                                                    <p className='Breedtext pt-sm-4 pt-3 pb-sm-4 pb-3'></p>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-lg-1 mb-5">
                                                <p className='breedtext1 mt-3'>TRAINER</p>
                                                <div className=' BreedBoxs'>
                                                    <img src={Group195} className='plus-breed pt-sm-5 pt-4 pb-sm-5 pb-4' />
                                                    <div className='BreedminiBox  p-2'>
                                                  Trainer 2
                                                    </div>
                                                    <p className='Breedtext pt-sm-4 pt-3 pb-sm-4 pb-3'></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-center justify-conten-around mt-sm-3 '>
                                            <div className='col-md-7 col-11 d-flex justify-content-between boxes-breed pt-3 pb-3  '>
                                                <span className='breed-psans'>Available:</span>
                                                <span className='bredd-span'>0,000 BNB</span>
                                            </div>
                                            <div className='col-md-7 col-11 d-flex justify-content-between boxes-breed pt-3 pb-3  mt-3'>
                                                <span className='breed-psans'>Breed Cost:</span>
                                                <span className='bredd-span'>200 USD</span>
                                            </div>

                                        </div>
                                        <div className='row d-flex justify-content-center'>

                                        <div className='col-lg-5 col-md-7 col-10 mt-sm-3 mt-3 mb-5'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn breed-btn mt-3' size="lg" onClick={() => setModalShow(true)}>
                                                        Breed
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-10 breed-box11 mb-3'>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-lg-10 col-11 breedboxs12'>
                                                <div className='row'>
                                                    <div className='col-12 d-flex flex-row'>
                                                        <div>
                                                            <img src={On} />
                                                        </div>

                                                        <div className='text-center offset-lg-2'>
                                                            <span className='breedtext1 '>MY COLLECTION</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=' breedboxs123 mt-2 my-custom-scrollbar d-flex flex-row flex-wrap justify-content-between p-2'>
                                                    <img src={Rectangle456} className='breedImages  mt-2' />
                                                    <img src={Rectangle457} className='breedImages mt-2' />
                                                    <img src={Rectangle458} className='breedImages mt-2' />
                                                    <img src={Rectangle463} className='breedImages mt-2' />
                                                    <img src={Rectangle456} className=' breedImages mt-2' />
                                                    <img src={Rectangle457} className='breedImages mt-2' />
                                                    <img src={Rectangle458} className='breedImages mt-2' />
                                                    <img src={Rectangle463} className='breedImages mt-2' />
                                                    <img src={Rectangle456} className='breedImages mt-2' />
                                                    <img src={Rectangle457} className=' breedImages mt-2' />
                                                    <img src={Rectangle458} className='breedImages mt-2' />
                                                    <img src={Rectangle463} className='breedImages mt-2' />
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

export default Breed