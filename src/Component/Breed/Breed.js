import React, { useState, useEffect } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from "react-router-dom";
import "./Breed.css"
import { IoMdClose } from "react-icons/io";
import Breedimag from "../../Assets/Breed.png"
import Group195 from "../../Assets/Group 195.png"
import On from "../../Assets/On.png";
import off from "../../Assets/Off.png";
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
import useAudio from '../Mint/useAudio';
import url from '../../Assets/MMA Breed music.wav';
import axios from 'axios';
import {useSelector, useDispatch} from "react-redux";
import { getWallet, getUserBalance } from '../Redux/actions/actions';
import { nftContractAbi, nftContratAddress } from '../Utils/Nft';
import {breedContractAbi, breedContractAddress} from '../Utils/breed';
import {toast} from 'react-toastify';
import {MdOutlineCancel} from 'react-icons/md'

function Breed() {
    let { acc } = useSelector(state => state.connectWallet);
    let {userBalance} = useSelector(state => state.userBalance)

    let dispatch = useDispatch()
    let [nftArrayLength, setNftsArrayLength] = useState(0);
    let [nftArray, setNftsArray] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [modalShowone, setModalShowone] = useState(false);
    let [breedNft, setBreedNft]= useState("")
    const [playing, toggle] = useAudio(url);
    const playingSound = () => {
        toggle();
    };
    const getWalletAddress = () => {
        dispatch(getWallet());

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

    let [checkCounter, setCheckCounter] = useState(0)
    let [trainerOne, setTrainerOne] = useState({
        width:50,
        status:false,
        imgUrl:Group195,
        tokenId:0,
    });
    let [trainerTwo, setTrainerTwo] = useState({
        width:50,
        status:false,
        imgUrl:Group195,
        tokenId:0,
    })
    const getBreedImage = async (imgUri, id) => {
        console.log("img uri", imgUri);
        try{
            if(trainerOne.status == false ){
                setTrainerOne(
                  {
                    width:180,
                      status:true,
                        imgUrl:`/config/${imgUri}`,
                        tokenId:id
                    }
                )
                // setCheckCounter(++checkCounter)
            }else if(trainerTwo.status == false){
                setTrainerTwo(
                  {
                    width:180,
                      status:true,
                        imgUrl:`/config/${imgUri}`,
                        tokenId:id
                    }
                )
            }
        }catch(e){
            console.log("error while get breed iamge",e);
        }
    }
    const cancleBreedImageOne = () => {
        setTrainerOne(
            {
              width:70,
                status:false,
                  imgUrl:Group195,
                  tokenId:0
              }
        )
    }
    const cancleBreedImageTwo = () => {
        setTrainerTwo(
            {
              width:70,
                status:false,
                  imgUrl:Group195,
                  tokenId:0,
              }
          )
    }
    const breed = async () => {
        try{
            if (acc == "No Wallet") {
                //   setBtTxt("Connect Wallet")
                toast.info("Wallet not connected")
            }
            else if (acc == "Wrong Network") {
                //   setBtTxt("Wrong Network")
                toast.info("Wrong Network")
            } else if (acc == "Connect Wallet") {
                toast.info("Please connect wallet")
            } else if(trainerOne.status == true && trainerTwo.status == true) {
                let breedType1 = 0;
                let breedType2 = 0;
                if(trainerOne.tokenId >= 1 && trainerOne.tokenId <= 3560){
                    breedType1 = 1;
                }else if(trainerOne.tokenId > 3560 && trainerOne.tokenId <= 6230 ){
                    breedType1 = 2;
                }else if(trainerOne.tokenId > 6230 && trainerOne.tokenId <= 8140){
                    breedType1 = 3;
                }else if(trainerOne.tokenId > 8140 && trainerOne.tokenId<= 9250){
                    breedType1 = 4
                }else if(trainerOne.tokenId > 9250 && trainerOne.tokenId <= 9870){
                    breedType1 = 5;
                }else if(trainerOne.tokenId > 9870 && trainerOne.tokenId <= 10000){
                    breedType1 = 6;
                }
                if(trainerTwo.tokenId >= 1 && trainerTwo.tokenId <= 3560){
                    breedType2 = 1;
                }else if(trainerTwo.tokenId > 3560 && trainerTwo.tokenId <= 6230 ){
                    breedType2 = 2;
                }else if(trainerTwo.tokenId > 6230 && trainerTwo.tokenId <= 8140){
                    breedType2 = 3;
                }else if(trainerTwo.tokenId > 8140 && trainerTwo.tokenId<= 9250){
                    breedType2 = 4
                }else if(trainerTwo.tokenId > 9250 && trainerTwo.tokenId <= 9870){
                    breedType2 = 5;
                }else if(trainerTwo.tokenId > 9870 && trainerTwo.tokenId <= 10000){
                    breedType2 = 6;
                }
                console.log("breed type ", breedType1, breedType2);
                const web3 = window.web3;
                const breedContract = new web3.eth.Contract(breedContractAbi, breedContractAddress);
                const nftContract = new web3.eth.Contract(nftContractAbi, nftContratAddress)
                let bnb = await breedContract.methods.BNB().call()
                let bnb_value = web3.utils.fromWei(bnb)
                bnb_value = parseFloat(bnb_value).toFixed(3)
                if(userBalance >= bnb_value){
                let breedData = await axios.get(`https://road-nft.herokuapp.com/api/users/getRandomIds?type1=${breedType1}&type2=${breedType2}`)
                if(breedData.data.id !=null){
                    await nftContract.methods.setApprovalForAll(breedContractAddress, true).send({
                        from : acc
                    })
                    await breedContract.methods.Breed(
                         trainerOne.tokenId, trainerTwo.tokenId,
                        breedData.data.id, breedData.data.uri, breedData.data.type
                    ).send({
                        from:acc,
                        value: bnb
                    }
                    ).on("receipt", async(receipt)=>{
                        console.log("receipt", receipt);
                        await axios.get(`https://road-nft.herokuapp.com/api/users/saveTokenId?type1=${breedType1}&type2=${breedType2}&tokenId=${breedData.data.id}`)
                    })
                    showBreedNft()
                    cancleBreedImageOne()
                    cancleBreedImageTwo()
                    getData()
                    toast.success("Breeding successed")
                }else{
                    toast.info("ids full")
                }
            }else{
                toast.info("infucient balance")
            }
            }else{
                toast.info("Don't forgot to select NFTs")
            }
        }catch(e){
            toast.error("Breeding Cancled")
            console.error("error while breed nft", e);
        }
    }

    const showBreedNft = async () =>{
        try{
            const web3 = window.web3;
            const breedContract = new web3.eth.Contract(breedContractAbi, breedContractAddress);
            let walletIds = await breedContract.methods.walletOfOwner(acc).call()
            walletIds = walletIds.slice(-1);
            let walletUris =await breedContract.methods.tokenURI(walletIds[0]).call();
            walletUris = walletUris.split("/")
                if(walletUris[5] == "common"){
                    setBreedNft(`/config/fighter nft/common/${walletUris[6]}`)
                    setModalShow(true)
                }else if(walletUris[5] == "uncommon"){
                    setBreedNft(`/config/fighter nft/uncommon/${walletUris[6]}`);
                    setModalShow(true)
                }else if(walletUris[5] == "rare"){
                    setBreedNft(`/config/fighter nft/rare/${walletUris[6]}`);
                    setModalShow(true)
                }else if(walletUris[5] == "epic"){
                    setBreedNft(`/config/fighter nft/epic/${walletUris[6]}`);
                    setModalShow(true)
                }else if(walletUris[5] == "legendary"){
                    setBreedNft(`/config/fighter nft/legendary/${walletUris[6]}`);
                    setModalShow(true)
                }else if(walletUris[5] == "mythic"){
                    setBreedNft(`/config/fighter nft/mythic/${walletUris[6]}`);
                    setModalShow(true)
                }
        }catch(e){
            console.error("error while show breed", e);
        }
    }
    const getPrice = async () => {
        let price =await axios.get("https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=BNB");
        price = price.data.BNB * 3;
        console.log("price", parseFloat(price).toFixed(2))
    }
    const getData = () => {
        if (acc != "No Wallet" && acc != "Wrong Network" && acc != "Connect Wallet") {
            getNfts()
            dispatch(getUserBalance())
        }
    }
    useEffect(() => {
        getData()
        getNfts()
        // getPrice()
        // setTimeout(() => {
        //   playingSound();
        // }, 1000);
      }, [acc]);
    return (
        <div className='imagePool'>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-center pt-5 pb-3'>
                    <div className='col-lg-2 col-md-3 col-4 d-flex justify-content-start' >
                        <span id="presale-back"><Link to="/"><MdOutlineKeyboardBackspace className='icon-rea' style={{ color: "white" }} /></Link> Back</span>
                    </div>
                    <div className='col-lg-2 col-md-3 col-5 d-flex justify-content-end' >
                    <button onClick={() => getWalletAddress()} className='btn poolbtn'>{acc === "No Wallet" ? "Connect" : acc === "Connect Wallet" ? "Connect" : acc === "Wrong Network" ? acc : acc.substring(0, 3) + "..." + acc.substring(acc.length - 3)}</button>
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
                                    <div className='col-md-12 d-flex justify-content-center breed-imagess mt-3 mb-3' >
                                        <img src={breedNft} className="mint-pic pt-1 pb-3"/>
                                    </div>
                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <span className='congrat-span'>Do you want to Breed card or sell in the market?</span>
                                    </div>

                                </div>
                                <div className=' d-flex justify-content-center mt-3 mb-3'>
                                    <button className='btn btn-congrats m-2' onClick={() => setModalShow(false)}>Stake</button>
                                    {/* <button className='btn btn1-congrats m-2' size="lg" onClick={() => setModalShowone(true)}>Sell</button> */}
                                    <button className='btn btn2-congrats m-2' size="lg" onClick={() => setModalShow(false)}>Do it Later</button>
                                </div>
                                {/* <div className='d-flex justify-content-center'>

                                            <button className='btn btn-congrats m-sm-3 m-2' size="lg">
                                                Breed
                                            </button>

                                            <button className='btn btn1-congrats m-sm-3 m-2' size="lg" onClick={() => setModalShowone(true)}>
                                                Sell
                                            </button>

                                            <button className='btn btn2-congrats m-sm-3 m-2'  size="lg">
                                                Do it Later
                                            </button>

                                </div> */}
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
                                                <div className=' BreedBoxs'
                                                onClick={cancleBreedImageOne}
                                                >
                                                    <div className='d-flex flex-column justify-content-center align-items-center pt-sm-5 pt-4 pb-sm-5 pb-4' >
                                                {trainerOne.status &&<span style={{paddingLeft: "155px"}} className='text-danger fs-3  d-flex justify-content-start'
                                                onClick={cancleBreedImageOne}
                                                // style={{border: "2px solid red"}}
                                                ><MdOutlineCancel/></span >}
                                                    <img src={trainerOne.imgUrl} width={`${trainerOne.width}px`} className=' ' />
                                                    </div>
                                                    <div className='BreedminiBox p-2'>
                                                        Trainer 1
                                                    </div>
                                                    <p className='Breedtext pt-sm-4 pt-3 pb-sm-4 pb-3'></p>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-lg-1 mb-5">
                                                <p className='breedtext1 mt-3'>TRAINER</p>
                                                <div className=' BreedBoxs'

                                                >
                                                    <div className='d-flex flex-column justify-content-center align-items-center pt-sm-5 pt-4 pb-sm-5 pb-4' >
                                                    {trainerTwo.status &&<span style={{paddingLeft: "155px"}} className='text-danger fs-3 d-flex justify-content-start'
                                                    onClick={cancleBreedImageTwo}
                                                    > <MdOutlineCancel/></span >}
                                                    <img src={trainerTwo.imgUrl} width={`${trainerTwo.width}px`} className='' />
                                                    </div>
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
                                                <span className='bredd-span'>{userBalance} BNB</span>
                                            </div>
                                            <div className='col-md-7 col-11 d-flex justify-content-between boxes-breed pt-3 pb-3  mt-3'>
                                                <span className='breed-psans'>Breed Cost:</span>
                                                <span className='bredd-span'>200 USD</span>
                                            </div>

                                        </div>
                                        <div className='row d-flex justify-content-center'>

                                        <div className='col-lg-5 col-md-7 col-10 mt-sm-3 mt-3 mb-5'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn breed-btn mt-3' size="lg" onClick={() => breed()}>
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
                                                        {
                                            !playing ?
                                            <img src={off}
                                        onClick={playingSound}
                                        />
                                            :
                                            <img src={On}
                                           onClick={playingSound}
                                           />
                                        }
                                                        </div>

                                                        <div className='text-center offset-lg-2'>
                                                            <span className='breedtext1 '>MY COLLECTION</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=' breedboxs123 mt-2 d-flex flex-row flex-wrap justify-content-between p-2'>
                                                    {
                                                        nftArray.map((item)=>{
                                                            return (
                                                                <img src={`/config/${item.imageUrl}`} className="breedImages mt-2"/>
                                                            )
                                                        })
                                                    }
                                                    {/* <img src={Rectangle456} className="breedImages mt-2"/>
                                                    <img src={Rectangle456} className="breedImages mt-2"/>
                                                    <img src={Rectangle456} className="breedImages mt-2"/>
                                                    <img src={Rectangle456} className="breedImages mt-2"/>
                                                    <img src={Rectangle456} className="breedImages mt-2"/> */}
                                                    {/* <img src={Rectangle456} className="breedImages mt-2"/> */}
                                                    {/* <img src={Rectangle456} className="breedImages mt-2"/>
                                                    <img src={Rectangle456} className="breedImages mt-2"/>
                                                    <img src={Rectangle456} className="breedImages mt-2"/>
                                                    <img src={Rectangle456} className="breedImages mt-2"/>
                                                    <img src={Rectangle456} className="breedImages mt-2"/> */}
                                                    {/* {
                                                        nftArray.map((item)=>{
                                                            return (
                                                                <div className='' style={{border: "2px solid red", height: "180px"}}>
                                                                <img src={`/config/${item.imageUrl}`} className='breedImages mt-2' style={{border: "2px solid red"}}
                                                                onClick={()=>{
                                                                    getBreedImage(item.imageUrl, item.tokenId)
                                                                }}
                                                                />
                                                                </div>
                                                            )
                                                        })
                                                    } */}
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