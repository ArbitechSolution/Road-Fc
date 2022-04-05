import React, { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "../MY-NFTs/MyNFTs.css";
import "../Mint/Mint.css"

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
import Frame26 from "../../Assets/Frame 26.png";
import Delete from "../../Assets/delete.png";
import ButtonSelect from "../SideBar/ButtonSelect";
import Modal from 'react-bootstrap/Modal'
import { Link, NavLink } from "react-router-dom";

// import Marketplace from "./Marketplace";
import { HiShoppingCart } from "react-icons/hi";
function MarketPlaceListed() {
  let dispatch = useDispatch();
  let { acc } = useSelector((state) => state.connectWallet);
  const [modalShow, setModalShow] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);

  const getWalletAddress = () => {
    dispatch(getWallet());
    // allImagesNfts()
  };
  return (
    <div className="imagePool">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center pt-5 pb-3">
          <div className="col-lg-3 col-md-3 col-4 d-flex justify-content-start btnBack">
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
          {/* <div className="col-lg-2 col-md-3 col-5"> */}
          {/* <div className="row d-flex justify-content-center justify-content-around">
              <div className="col-lg-7 d-flex justify-content-right">
                <ButtonSelect />
              </div>
              <div className="col-1 boxmarket d-flex justify-content-right align-items-center">
                <HiShoppingCart size={30} style={{ color: "white" }} />
              </div>
            </div> */}

          <div className="col-lg-6 col-md-9 col-8 d-flex justify-content-left">
            <ButtonSelect />
            <div className="col-1 col-md-3 col-5 ms-2 boxmarket d-flex justify-content-center align-items-center">
              <HiShoppingCart size={30} style={{ color: "white" }} />
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-5 d-flex justify-content-end">
            <button onClick={() => getWalletAddress()} className="btn poolbtn">
              {acc === "No Wallet"
                ? "Insatll metamask"
                : acc === "Connect Wallet"
                  ? acc
                  : acc === "Connect to Rinkebey"
                    ? acc
                    : acc.substring(0, 5) + "..." + acc.substring(acc.length - 5)}
            </button>
          </div>
        </div>

        <div className="row d-flex justify-content-center justify-content-around pb-5">
          <div className="col-3 staking-box">
            <SideBar />
          </div>
          <div className="col-11 mb-3 staking-coll">
            <MediaSidebar />
          </div>

          <div className="col-lg-8 col-11 mb-md-1 mb-4">
            <div className="row d-flex justify-content-center mb-1">
              <div className="col-12">
                <h4 className="nft-h4">MY NFTs</h4>
                <p className="nft-p">
                  Total <span className="nft-span">(58)</span>
                </p>
              </div>
            </div>
            <div className="row mt-3 d-flex justify-content-center justify-content-around">
              <div className="col-md-3 nft-boxx p-2 mt-3">
                <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                  <span className="placespan">Lv. 10</span>
                  <span className="placespan1">
                    <img src={Frame26} width="24px" /> 1
                  </span>
                </div>
                <img src={image2} className="nfts-image " />
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="nfts-h6">Alien</span>
                  <span className="place-pp">50 ROAD</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="palce-h6">Legendary</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center ">
                  <div className="col-5  mt-3">
                    <span className="palce-h6">#20214 Wolf</span>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnBuy" onClick={() => setModalShow(true)}>Buy</button>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnEdit">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
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
                  <span className="place-pp">50 ROAD</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="palce-h6">Legendary</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="col-5 mt-3">
                    <span className="palce-h6">#20214 Wolf</span>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnBuy" onClick={() => setModalShow(true)}>Buy</button>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnEdit">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 nft-boxx p-2 mt-3">
                <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                  <span className="placespan">Lv. 10</span>
                  <span className="placespan1">
                    <img src={Frame26} width="24px" /> 1
                  </span>
                </div>
                <img src={tiger11} className="nfts-image " />
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="nfts-h6">Alien</span>
                  <span className="place-pp">50 ROAD</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="palce-h6">Legendary</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="col-5 mt-3">
                    <span className="palce-h6">#20214 Wolf</span>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnBuy" onClick={() => setModalShow(true)}>Buy</button>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnEdit">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 nft-boxx p-2 mt-3">
                <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                  <span className="placespan">Lv. 10</span>
                  <span className="placespan1">
                    <img src={Frame26} width="24px" /> 1
                  </span>
                </div>
                <img src={tiger12} className="nfts-image " />
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="nfts-h6">Alien</span>
                  <span className="place-pp">50 ROAD</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="palce-h6">Legendary</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="col-5 mt-3">
                    <span className="palce-h6">#20214 Wolf</span>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnBuy" onClick={() => setModalShow(true)}>Buy</button>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnEdit">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 nft-boxx p-2 mt-3">
                <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                  <span className="placespan">Lv. 10</span>
                  <span className="placespan1">
                    <img src={Frame26} width="24px" /> 1
                  </span>
                </div>
                <img src={tiger13} className="nfts-image " />
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="nfts-h6">Alien</span>
                  <span className="place-pp">50 ROAD</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="palce-h6">Legendary</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="col-5 mt-3">
                    <span className="palce-h6">#20214 Wolf</span>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnBuy" onClick={() => setModalShow(true)}>Buy</button>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnEdit">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 nft-boxx p-2 mt-3">
                <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                  <span className="placespan">Lv. 10</span>
                  <span className="placespan1">
                    <img src={Frame26} width="24px" /> 1
                  </span>
                </div>
                <img src={tiger11} className="nfts-image " />
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="nfts-h6">Alien</span>
                  <span className="place-pp">50 ROAD</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="palce-h6">Legendary</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="col-5 mt-3">
                    <span className="palce-h6">#20214 Wolf</span>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnBuy" onClick={() => setModalShow(true)}>Buy</button>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnEdit">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 nft-boxx p-2 mt-3">
                <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                  <span className="placespan">Lv. 10</span>
                  <span className="placespan1">
                    <img src={Frame26} width="24px" /> 1
                  </span>
                </div>
                <img src={image2} className="nfts-image " />
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="nfts-h6">Alien</span>
                  <span className="place-pp">50 ROAD</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="palce-h6">Legendary</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="col-5 mt-3">
                    <span className="palce-h6">#20214 Wolf</span>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnBuy" onClick={() => setModalShow(true)}>Buy</button>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnEdit">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 nft-boxx p-2 mt-3">
                <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                  <span className="placespan">Lv. 10</span>
                  <span className="placespan1">
                    <img src={Frame26} width="24px" /> 1
                  </span>
                </div>
                <img src={tiger12} className="nfts-image " />
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="nfts-h6">Alien</span>
                  <span className="place-pp">50 ROAD</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="palce-h6">Legendary</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="col-5 mt-3">
                    <span className="palce-h6">#20214 Wolf</span>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnBuy" onClick={() => setModalShow(true)}>Buy</button>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="d-grid gap-2 mt-4 mb-2">
                      <button className="btn btnEdit">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex flex-row justify-content-center justify-content-evenly mt-3 mb-4">
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

              {/* <button className='btn '> */}
              <div
                className="col-1 d-flex align-items-center justify-content-center ms-4"
                style={{ cursor: "pointer" }}
              >
                <img src={Rectangle572} style={{ position: "absolute" }} />
                <img src={Vector33} style={{ position: " relative" }} />
              </div>
              {/* </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-8 col-11 mb-md-1 mb-4 mt-4'>
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
                  <span className="place-pp">50 ROAD</span>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ">
                  <span className="palce-h6">Legendary</span>
                </div>
              </div>
              <div className='row d-flex justify-content-center'>
                <div className='col-lg-3 col-md-3 mt-3'>
                  <div className="d-grid gap-2">
                    <span className='congrtsText'>
                      Confirmation
                    </span>
                  </div>
                </div>
              </div>
              <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-4 col-md-3 mt-1 mb-2 d-flex justify-content-center'>
                  <div className="d-grid gap-2" >
                    <span className='cardListedText' >
                      Really want to stop list now?
                    </span>
                  </div>
                </div>

              </div>
              <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-4 col-md-3 mt-1 mb-2 d-flex justify-content-center'>
                  <div className="d-flex gap-2 flex-row justify-content-between align-items-center mt-3 ">
                    <NavLink to="/marketPlaceList"
                      className={({ isActive }) => (isActive ? 'btn btn-no active' : 'btn btn-no')}
                      onClick={() => setModalShow(false)}

                    >
                      No
                    </NavLink>

                    <NavLink to="/marketPlaceList"
                      className={({ isActive }) => (isActive ? 'btn btn-yes active' : 'btn btn-yes')}
                      onClick={() => setDeleteModel(true)}

                    >
                      Yes
                    </NavLink>


                  </div>
                </div>

              </div>
            </div>
          </Modal.Body>
        </Modal> : <></>}

        {deleteModel ? <Modal
          show={deleteModel}
          onHide={() => setDeleteModel(false)}
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
                <div className='col-lg-3 col-md-3 mt-3 d-flex justify-content-center' >
                  <div className="d-grid gap-2">
                    <a onClick={() => { setDeleteModel(false) }}>
                      <img src={Delete}></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-4 col-md-3 mt-3 mb-2 d-flex justify-content-center'>
                  <div className="d-grid gap-2" >
                    <span className='cardListedText' >
                      Listing successfully removed Now!
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

export default MarketPlaceListed;
