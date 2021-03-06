import React, { useState } from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import "../MY-NFTs/MyNFTs.css";
import "./Marketplace.css";
import { getWallet } from "../Redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import Growth from "../../Assets/Growth.png";
import Frame2 from "../../Assets/Frame 2.png";
import Frame3 from "../../Assets/Frame 3.png";
import Box from "../../Assets/Box.png";
import nft1 from "../../Assets/nft 1.png";
import marketplace1 from "../../Assets/marketplace 1.png";
import Group593 from "../../Assets/Group 593.png";
import image2 from "../../Assets/image 2.png";
import Rectangle572 from "../../Assets/Rectangle 572.png";
import Vector22 from "../../Assets/Vector22.png";
import Vector33 from "../../Assets/Vector33.png";
import SideBar from "../SideBar/SideBar";
import MediaSidebar from "../SideBar/MediaSidebar";
import tiger10 from "../../Assets/tiger 1 10.png";
import tiger11 from "../../Assets/tiger 1 11.png";
import tiger12 from "../../Assets/tiger 1 12.png";
import tiger13 from "../../Assets/tiger 1 13.png";
import ButtonSelect from "../SideBar/ButtonSelect";
import Modal from 'react-bootstrap/Modal'
import tiger from "../../Assets/tiger 1 1.png"
import Group609 from "../../Assets/Group 609.png"
import Frame26 from "../../Assets/Frame 26.png";
import BinanceCoin from "../../Assets/Binance-Coin-BNB-icon 1.png"
import roadsign from "../../Assets/road-sign 3.png"
import grit from "../../Assets/grit 1.png"
import fourty from "../../Assets/--40 3.png"
// import Marketplace from "./Marketplace";
import { HiShoppingCart } from "react-icons/hi";
function MarketPlaceSell() {
  let dispatch = useDispatch();
  let { acc } = useSelector((state) => state.connectWallet);
  const [modalShow, setModalShow] = useState(false);
  const [congratsModalShow, setCongratsModalShow] = useState(false);


  const getWalletAddress = () => {
    dispatch(getWallet());
    // allImagesNfts()
  };
  return (
    <div className="imagePool">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center pt-5 pb-3" >
          <div className="col-lg-3  col-12 d-flex justify-content-start btnBack">
            <span id="presale-back">
              <Link to="/">
                <MdOutlineKeyboardBackspace
                  size={40}
                  style={{ color: "white" }}
                />
              </Link>{" "}
              Back
            </span>
          </div>


          <div className="col-lg-6 col-md-9 col-12 d-flex justify-content-left">
            <ButtonSelect />
            <div className="col-1 col-12 ms-2 boxmarket d-flex justify-content-center align-items-center">
              <HiShoppingCart size={30} style={{ color: "white" }} />
            </div>
          </div>

          <div className="col-lg-2 col-12 d-flex justify-content-end">
            <div class="popover__wrapper">
              <a href="#">
              <button onClick={() => getWalletAddress()} className="btn poolbtn">
              My Account
            </button>

              </a>
              <div class="popover__content">
                <p class="popover__message">Wallet</p>
                <div className='mini-box mb-3'>0X67...282A</div>
                <p style={{border: "1px solid #5E606E"}}></p>

                <div className=''>
                  <p className='marketplacetext-span text-start' style={{textAlign: "left"}}>Total Balance</p>

                  <p className='marketplacetext-span1'><img src={BinanceCoin}/>&nbsp; 0.0000 <span style={{color: "#5E606E"}}>BNB</span></p>
                  <p className='marketplacetext-span1'><img src={roadsign}/>&nbsp; 0.0000 <span style={{color: "#5E606E"}}>ROAD</span></p>
                  <p className='marketplacetext-span1'><img src={grit}/>&nbsp; 0.0000 <span style={{color: "#5E606E"}}>GRIT</span></p>
                  <p className='marketplacetext-span1 ps-1'><img src={fourty}/>&nbsp; 0.0000 <span style={{color: "#5E606E"}}>POINT</span></p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row d-flex justify-content-center justify-content-around pb-5" >
          <div className="col-3 staking-box">
            <SideBar />
          </div>
          <div className="col-11 mb-3 staking-coll">
            <MediaSidebar />
          </div>

          <div className="col-lg-8 col-11 mb-md-1 ">
            <div className="row d-flex justify-content-center mb-1">
              <div className="col-12">
                <h4 className="nft-h4">MY NFTs</h4>
                <p className="nft-p">
                  Total <span className="nft-span">(58)</span>
                </p>
              </div>
            </div>
            <div className="row d-flex justify-content-center justify-content-md-between">
              <div className="col-md-2 nft-boxx p-2 mt-3 ">
                <img src={image2} className="nfts-image " />
                <p className="nfts-h6 mt-3">#20211 Trainer</p>
                <p className="nfts-pp text-start">Common</p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <button className="btn btnStakePage32" size="lg" onClick={() => setModalShow(true)}>
                    Sell
                  </button>
                  <button className="btn btnStakePage" size="lg">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="col-md-2 nft-boxx p-2 mt-3">
                <img src={tiger10} className="nfts-image " />
                <p className="nfts-h6 mt-3">#20211 Trainer</p>
                <p className="nfts-pp text-start">Common</p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <button className="btn btnStakePage32" size="lg" onClick={() => setModalShow(true)}>
                    Sell
                  </button>
                  <button className="btn btnStakePage" size="lg">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="col-md-2 nft-boxx p-2  mt-3">
                <img src={tiger11} className="nfts-image " />
                <p className="nfts-h6 mt-3">#20211 Trainer</p>
                <p className="nfts-pp text-start">Common</p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <button className="btn btnStakePage32" size="lg" onClick={() => setModalShow(true)}>
                    Sell
                  </button>
                  <button className="btn btnStakePage" size="lg">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="col-md-2 nft-boxx p-2 mt-3">
                <img src={tiger12} className="nfts-image " />
                <p className="nfts-h6 mt-3">#20211 Trainer</p>
                <p className="nfts-pp text-start">Common</p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <button className="btn btnStakePage32" size="lg" onClick={() => setModalShow(true)}>
                    Sell
                  </button>
                  <button className="btn btnStakePage" size="lg">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="col-md-2 nft-boxx p-2 mt-3">
                <img src={image2} className="nfts-image " />
                <p className="nfts-h6 mt-3">#20211 Trainer</p>
                <p className="nfts-pp text-start">Common</p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <button className="btn btnStakePage32" size="lg" onClick={() => setModalShow(true)}>
                    Sell
                  </button>
                  <button className="btn btnStakePage" size="lg">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="col-md-2 nft-boxx p-2 mt-3">
                <img src={tiger10} className="nfts-image " />
                <p className="nfts-h6 mt-3">#20211 Trainer</p>
                <p className="nfts-pp text-start">Common</p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <button className="btn btnStakePage32" size="lg" onClick={() => setModalShow(true)}>
                    Sell
                  </button>
                  <button className="btn btnStakePage" size="lg">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="col-md-2 nft-boxx p-2 mt-3">
                <img src={tiger11} className="nfts-image " />
                <p className="nfts-h6 mt-3">#20211 Trainer</p>
                <p className="nfts-pp text-start">Common</p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <button className="btn btnStakePage32" size="lg" onClick={() => setModalShow(true)}>
                    Sell
                  </button>
                  <button className="btn btnStakePage" size="lg">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="col-md-2 nft-boxx p-2 mt-3">
                <img src={tiger12} className="nfts-image " />
                <p className="nfts-h6 mt-3">#20211 Trainer</p>
                <p className="nfts-pp text-start">Common</p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <button className="btn btnStakePage32" size="lg" onClick={() => setModalShow(true)}>
                    Sell
                  </button>
                  <button className="btn btnStakePage" size="lg">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="col-md-2 nft-boxx p-2 mt-3">
                <img src={image2} className="nfts-image " />
                <p className="nfts-h6 mt-3">#20211 Trainer</p>
                <p className="nfts-pp text-start">Common</p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <button className="btn btnStakePage32" size="lg" onClick={() => setModalShow(true)}>
                    Sell
                  </button>
                  <button className="btn btnStakePage" size="lg">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="col-md-2 nft-boxx p-2 mt-3">
                <img src={tiger10} className="nfts-image " />
                <p className="nfts-h6 mt-3">#20211 Trainer</p>
                <p className="nfts-pp text-start">Common</p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <button className="btn btnStakePage32" size="lg" onClick={() => setModalShow(true)}>
                    Sell
                  </button>
                  <button className="btn btnStakePage" size="lg">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="col-md-2 nft-boxx p-2 mt-3">
                <img src={tiger11} className="nfts-image " />
                <p className="nfts-h6 mt-3">#20211 Trainer</p>
                <p className="nfts-pp text-start">Common</p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <button className="btn btnStakePage32" size="lg" onClick={() => setModalShow(true)}>
                    Sell
                  </button>
                  <button className="btn btnStakePage" size="lg">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="col-md-2 nft-boxx p-2 mt-3">
                <img src={tiger12} className="nfts-image " />
                <p className="nfts-h6 mt-3">#20211 Trainer</p>
                <p className="nfts-pp text-start">Common</p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <button className="btn btnStakePage32" size="lg" onClick={() => setModalShow(true)}>
                    Sell
                  </button>
                  <button className="btn btnStakePage" size="lg">
                    Transfer
                  </button>
                </div>
              </div>
            </div>

            <div className="row d-flex flex-row justify-content-center justify-content-evenly mt-3 ">
              <div
                className="col-1 d-flex align-items-center justify-content-center"
                style={{ cursor: "pointer" }}
              >
                <img src={Rectangle572} style={{ position: "absolute" }} />
                <img src={Vector22} style={{ position: " relative" }} />
              </div>
              <div className="col-lg-3 col-md-5 col d-flex flex-row align-items-center justify-content-evenly">
                <span className="MyCollectionspan">Current</span>
                <div className="bosCollection">
                  <span className="mycollectionsP ">1</span>
                </div>
                <span className="MyCollectionspan">/3</span>
              </div>


              <div
                className="col-1 d-flex align-items-center justify-content-center ms-4"
                style={{ cursor: "pointer" }}
              >
                <img src={Rectangle572} style={{ position: "absolute" }} />
                <img src={Vector33} style={{ position: " relative" }} />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className=''>
        {modalShow ? <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className='model2-image'>
            <Modal.Title id="contained-modal-title-vcenter" style={{ color: "white", fontSize: "30px" }}>
              Mint
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='model2-image'>
            <div className='row d-flex justify-content-center' >


              <div className="col-md-3 nft-boxx p-2 mt-3">
                <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                  <span className="placespan">Lv. 10</span>
                  <span className="placespan1">
                    <img src={Frame26} width="24px" /> 1
                  </span>
                </div>
                <img src={tiger10} className="nfts-image " />
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="nfts-h6">Alien</span>
                  <span className="palce-h6">Legendary</span>

                </div>
              </div>
              <div className='row d-flex justify-content-center'>
                <div className='col-lg-2 col-md-3 mt-3 mb-3'>
                  <div className="d-grid gap-1">
                    <form>
                      <input type='number' class="form-control inputBox" placeholder='100.00' />
                    </form>
                  </div>
                </div>
                <div className='col-lg-2 col-md-3 mt-3 mb-3 d-flex align-items-center'>
                  <div className="d-grid gap-2">
                    <form>
                      <label className="form-label  fw-bold" style={{ color: "#5E606E", fontSize: "13px" }}>ROAD ($100.82)</label>
                    </form>
                  </div>
                </div>


              </div>
              <div className='row d-flex justify-content-center'>
                <div className='col-lg-2 col-md-3 mt-3 mb-3'>
                  <div className="d-grid gap-2">
                    <button className='btn btn-congrats' size="lg" type='submit' onClick={() => setCongratsModalShow(true)}>
                      Submit
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </Modal.Body>
        </Modal> : <></>}

      </div>
      <div className='col-lg-8 col-11'>
        {congratsModalShow ? <Modal
          show={congratsModalShow}
          onHide={() => setCongratsModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ backgroundColor: "#13151b" }}
        >
          <Modal.Header closeButton className='model2-image'>
            <Modal.Title id="contained-modal-title-vcenter" style={{ color: "white", fontSize: "30px" }}>
              Mint
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='model2-image'>
            <div className='row d-flex justify-content-center' >
              {/* <div className='col-md-12 d-flex justify-content-center'>
                <img className='pt-3 congrat-image' src={Group609} />
              </div> */}

              <div className="col-md-3 nft-boxx p-2 mt-3">
                <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                  <span className="placespan">Lv. 10</span>
                  <span className="placespan1">
                    <img src={Frame26} width="24px" /> 1
                  </span>
                </div>
                <img src={tiger10} className="nfts-image " />
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="nfts-h6">Alien</span>
                  <span className="palce-h6">Legendary</span>

                </div>
              </div>

              <div className='row d-flex justify-content-center'>
                <div className='col-lg-3 col-md-3 mt-3'>
                  <div className="d-grid gap-2">
                    <span className='congrtsText'>
                      Congratulations!
                    </span>
                  </div>
                </div>
              </div>
              <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-4 col-md-3 mt-1 mb-2 d-flex justify-content-center'>
                  <div className="d-grid gap-2" >
                    <span className='cardListedText' >
                      your card listed  in the market !
                    </span>
                  </div>
                </div>

              </div>
              <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-4 col-md-3 mt-1 mb-2 d-flex justify-content-center'>
                  <div className="d-grid gap-2" >
                    <span className='cardPriceText' >
                      Price : road 100($100.82)
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </Modal.Body>
        </Modal> : <></>}


      </div>
    </div>
  );
}

export default MarketPlaceSell;
