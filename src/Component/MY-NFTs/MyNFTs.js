import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from "react-router-dom";
import "./MyNFTs.css"
import Modal from 'react-bootstrap/Modal';
import { IoMdClose } from "react-icons/io";
import { getWallet } from '../Redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux';
import Rectangle572 from "../../Assets/Rectangle 572.png"
import Vector22 from "../../Assets/Vector22.png"
import Vector33 from "../../Assets/Vector33.png"
import SideBar from "../SideBar/SideBar"
import { toast } from 'react-toastify';
import { nftContractAbi, nftContratAddress } from '../Utils/Nft'
import Group843 from "../../Assets/Group 843.png"
import Rectangle450 from "../../Assets/Rectangle 450.png"
import axios from 'axios';
import image2 from "../../Assets/image 2.png"
import check17 from "../../Assets/check (17) 1.png"
function MyNFTs() {
    let dispatch = useDispatch();
    let { acc } = useSelector(state => state.connectWallet);
    let [nftArray, setNftsArray] = useState([])
    let [nftArrayLength, setNftsArrayLength] = useState(0)
    const [modalShow, setModalShow] = useState(false);
    const [modalShowone, setModalShowone] = useState(false);
    let [transferNft, setTransferNft] = useState({
        path: "",
        imageName: "",
        Nftid: ""

    })
    let transferAddress = useRef()
    let [confirmAddress, setConfirmAddress] = useState()
    const getWalletAddress = () => {
        dispatch(getWallet());
        // allImagesNfts()

    }

    const getNfts = async () => {
        try {
            if (acc == "No Wallet") {
                //   setBtTxt("Connect Wallet")
                console.log("Not Connected")
            }
            else if (acc == "Wrong Network") {
                //   setBtTxt("Wrong Network")
                console.log("Not Connected")
            } else if (acc == "Connect Wallet") {
                console.log("Not Connected")
            } else {
                const web3 = window.web3;
                const nftContract = new web3.eth.Contract(nftContractAbi, nftContratAddress);
                let totalIds = await nftContract.methods.walletOfOwner(acc).call();
                setNftsArrayLength(totalIds.length)
                let ttlPage = parseInt(totalIds.length) / 12;
                ttlPage = Math.ceil(ttlPage);
                setTotalPages(ttlPage)
                let simplleArray = [];
                for (let i = 0; i < totalIds.length; i++) {
                    if (totalIds[i] <= 3560) {
                        let imageUrl = `/images/common.png`;
                        let imageName = `Common #${totalIds[i]}`;
                        let tokenId = totalIds[i];
                        simplleArray = [...simplleArray, { imageUrl, imageName, tokenId }];
                        setNftsArray(simplleArray);
                    } else if (totalIds[i] > 3560 && totalIds[i] <= 6230) {
                        let imageUrl = `/images/uncommon.png`;
                        let imageName = `Uncommon #${totalIds[i]}`;
                        let tokenId = totalIds[i];
                        simplleArray = [...simplleArray, { imageUrl, imageName, tokenId }];
                        setNftsArray(simplleArray);
                    } else if (totalIds[i] > 6230 && totalIds[i] <= 8140) {
                        let imageUrl = `/images/rare.png`;
                        let imageName = `Rare #${totalIds[i]}`;
                        let tokenId = totalIds[i];
                        simplleArray = [...simplleArray, { imageUrl, imageName, tokenId }];
                        setNftsArray(simplleArray);
                    } else if (totalIds[i] > 8140 && totalIds[i] <= 9250) {
                        let imageUrl = `/images/epic.png`;
                        let imageName = `Epic #${totalIds[i]}`;
                        let tokenId = totalIds[i];
                        simplleArray = [...simplleArray, { imageUrl, imageName, tokenId }];
                        setNftsArray(simplleArray);
                    } else if (totalIds[i] > 9250 && totalIds[i] <= 9870) {
                        let imageUrl = `/images/legendary.png`;
                        let imageName = `Legendary #${totalIds[i]}`;
                        let tokenId = totalIds[i];
                        simplleArray = [...simplleArray, { imageUrl, imageName, tokenId }];
                        setNftsArray(simplleArray);
                    } else if (totalIds[i] > 9870 && totalIds[i] <= 10000) {
                        let imageUrl = `/images/mythic.png`;
                        let imageName = `Mythic #${totalIds[i]}`;
                        let tokenId = totalIds[i];
                        simplleArray = [...simplleArray, { imageUrl, imageName, tokenId }];
                        setNftsArray(simplleArray);
                    }
                }
            }

        } catch (e) {
            console.error("error while get nfts", e);
        }
    }

    const showTransferNfts = (imageUrl, imageName, tokenId) => {
        try {
            setTransferNft({
                path: imageUrl,
                imageName: imageName,
                Nftid: tokenId
            })
            // transferAddress.current.focus()
            setModalShow(true)

        } catch (e) {
            console.error("error while show transfer nft", e);
        }
    }
    const transfetNfts = async () => {
        try {
            let transAdd = transferAddress.current.value;

            if (parseInt(transAdd.length) > 0) {
                const web3 = window.web3;
                const nftContract = new web3.eth.Contract(nftContractAbi, nftContratAddress);
                await nftContract.methods.transferFrom(acc, transAdd, transferNft.Nftid).send({
                    from: acc
                })
                // 0x12E8613F1d980FD0543ECEBB2dab9533C589250F
                setConfirmAddress(transAdd);
                setModalShow(false)
                setModalShowone(true)
                getNfts()
            } else {
                toast.info("Please put transfer address")
            }
        } catch (e) {
            console.error("error while transfer nfts", e);
        }
    }
    const getData = () => {
        if (acc != "No Wallet" && acc != "Wrong Network" && acc != "Connect Wallet") {
            getNfts()
        }
    }
    let [initialLimit, setInitialLimit] = useState(0);
    let [finalLimit, setFinalLimit] = useState(12)
    let [pageNumber, setPageNumber] = useState(1)
    let [totalPages, setTotalPages] = useState(1)
    const loadMore = () => {
        window.scrollTo(0, 0)
        let a = finalLimit + 12
        if (a >= nftArrayLength) {
            setInitialLimit(initialLimit + 12)
            if (pageNumber < totalPages) {

                setPageNumber(pageNumber + 1)
            }
            console.log("Loading More Up");
            setFinalLimit(nftArrayLength)
        } else {
            console.log("Loading More");
            if (pageNumber < totalPages) {

                setPageNumber(pageNumber + 1)
            }
            setInitialLimit(initialLimit + 12);
            setFinalLimit(finalLimit + 12)
        }
    }

    const loadLess = () => {
        window.scrollTo(0, 0)
        let b = finalLimit - 12

        if (b <= 12) {

            setFinalLimit(12);
            setInitialLimit(0);
            if (pageNumber > 1) {
                setPageNumber(pageNumber - 1)
            }
        } else {
            setInitialLimit(initialLimit - 12);
            setPageNumber(pageNumber - 1)
            setFinalLimit(finalLimit - 12)

        }
    }
    useLayoutEffect(() => {
        getNfts()
        getData()
    }, [acc])
    return (
        <div className='imagePool'>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-center pt-5 pb-3'>
                    <div className='col-lg-2 col-md-3 col-4 d-flex justify-content-start' >
                        <span id="presale-back"><Link to="/"><MdOutlineKeyboardBackspace className='icon-rea' style={{ color: "white" }} /></Link> Back</span>
                    </div>
                    <div className='col-lg-3 col-md-4 col-6 d-flex justify-content-end' >
                        <button onClick={() => getWalletAddress()} className='btn poolbtn'>{acc === "No Wallet" ? "Connect" : acc === "Connect Wallet" ? "Connect" : acc === "Wrong Network" ? acc : acc.substring(0, 3) + "..." + acc.substring(acc.length - 3)}</button>

                    </div>
                </div>
                <div className='row d-flex justify-content-center justify-content-around pb-5'>
                    <div className='col-3 staking-box'>
                        <SideBar />
                    </div>
                    {/* <div className='col-11 mb-3 staking-coll'>
                        <MediaSidebar />
                    </div> */}

                    <div className='col-lg-8 col-11 mb-md-1 mb-4'>
                        {modalShow ? <Modal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >

                            <Modal.Body className='mynfts-model-image' style={{ border: "2px solid #FF5043", }}>
                                {/* <div className=' d-flex align-items-start justify-content-center'>
                                    <p id='nft-text-span' style={{ position: " relative" }} >NFT Card Transfer</p>
                                </div> */}
                                    <img src={Group843} className="myNft-image2" />
                                <div className='row d-flex justify-content-center' >
                                    <div className='col-12 d-flex- justify-content-end'>
                                        <IoMdClose
                                            onClick={() => setModalShow(false)}
                                            size={28}
                                            style={{ color: "white", cursor: "pointer" }}
                                        />
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-md-5 d-flex justify-content-center align-items-center mt-4'>
                                        <label style={{ color: "white" }}>To</label>&nbsp;&nbsp;
                                        <input ref={transferAddress} className="form-control" style={{ backgroundColor: "black", color: "#fff" }} />
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center mt-2'>
                                    <div className='col-md-5 model-mynfts'>
                                        Please confirm that your Transfer address supports the BSC network.
                                    </div>
                                </div>
                                <div className="text-center d-flex justify-content-center mt-3">
                                    <div className='col-lg-5 model-boxs'>
                                        <div className=' nft-boxx m-5 p-2 mt-2 mb-3 ' >
                                            <img src={`config/${transferNft.path}`} className="nfts-image " />
                                            <p className='nfts-h6 mt-3'>{transferNft.imageName}</p>
                                        </div>
                                        <button className='btn btn-mynftsss mb-3' onClick={() => transfetNfts()}>Transfer</button>
                                    </div>
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

                            <Modal.Body className='mynfts-model-image' style={{ border: "2px solid #FF5043" }}>
                                <img src={Group843} className="myNft-image2" />
                                <div className='row d-flex justify-content-center' >
                                    <div className='col-12 d-flex- justify-content-end'>
                                        <IoMdClose
                                            onClick={() => setModalShowone(false)}
                                            size={28}
                                            style={{ color: "white", cursor: "pointer" }}
                                        />
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-md-5 d-flex justify-content-center align-items-center mt-4'>
                                        <label style={{ color: "white" }}>To</label>&nbsp;&nbsp;
                                        <input value={confirmAddress} className="form-control" disabled style={{ backgroundColor: "#292B34", color: "#fff" }} />

                                    </div>
                                </div>
                                {/* <div className='row d-flex justify-content-center mt-2'>
                                    <div className='col-md-5 model-mynfts'>
                                        Please confirm that your Transfer address supports the BSC network.
                                    </div>
                                </div> */}
                                <div className="text-center d-flex justify-content-center mt-3">
                                    <div className='col-lg-5 model-boxs'>
                                        <div className=' nft-boxx m-5 p-2 mt-2 mb-3 ' >
                                            <img src={`config/${transferNft.path}`} className="nfts-image " />
                                            <p className='nfts-h6 mt-3'>{transferNft.imageName}</p>
                                        </div>
                                        <img src={check17} />
                                        <p className='second-modal-p mt-2'>Card Successfully Transfered</p>
                                    </div>
                                </div>

                            </Modal.Body>
                        </Modal> : <></>}


                        <div className='row d-flex justify-content-center mb-1'>
                            <div className='col-12'>
                                <h4 className='nft-h4'>MY NFTs</h4>
                                <p className='nft-p'>Total <span className='nft-span'>({nftArrayLength})</span></p>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center justify-content-sm-between justify-content-evenly mb-3'>
                            {
                                nftArray?.slice(initialLimit, finalLimit).map((item, index) => {
                                    return (
                                        <div className='col-md-2 nft-boxx p-2 mt-3 ' key={index}>
                                            <img src={`/config/${item.imageUrl}`} className="nfts-image " />
                                            <p className='nfts-h6 mt-3'>{item.imageName}</p>
                                            {/* <p className='nfts-pp text-start'>Common</p> */}
                                            <div className="d-flex justify-content-between mt-2 mb-2">
                                                <button className='btn btnStakePage32' size="sm">
                                                    Sell
                                                </button>
                                                <button className='btn btnStakePage' size="sm" onClick={() => showTransferNfts(item.imageUrl, item.imageName, item.tokenId)}>
                                                    Transfer
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div className='row d-flex flex-row justify-content-center justify-content-sm-evenly mt-3 mb-4' >

                            <div className='col-1 d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}
                                onClick={loadLess}
                            >
                                <img src={Rectangle572} style={{ position: "absolute" }} />
                                <img src={Vector22} style={{ position: " relative" }} />
                            </div>
                            <div className='col-lg-3 col-md-5 col d-flex flex-row align-items-center justify-content-evenly'>
                                <span className='MyCollectionspan'>Current</span>
                                <div className='bosCollection'>
                                    <span className='mycollectionsP '>{acc == "No Wallet" || acc == "Wrong Network" || acc == "Connect Wallet" ? "" : pageNumber}</span>
                                </div>
                                <span className='MyCollectionspan'>/{totalPages}</span>
                            </div>

                            {/* <button className='btn '> */}
                            <div className='col-1 d-flex align-items-center justify-content-center ms-4' style={{ cursor: "pointer" }}
                                onClick={loadMore}
                            >
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