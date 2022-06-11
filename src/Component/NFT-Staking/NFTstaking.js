import React, { useState, useLayoutEffect, useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import "./NFTstaking.css";
import image2 from "../../Assets/image 2.png";
import pool1 from "../../Assets/pool1 1.png";
import pool2 from "../../Assets/pool2 1.png";
import pool3 from "../../Assets/pool3 1.png";
import pool4 from "../../Assets/pool4 1.png";
import pool5 from "../../Assets/pool5 1.png";
import pool6 from "../../Assets/pool6 1.png";
import Rectangle572 from "../../Assets/Rectangle 572.png";
import Vector22 from "../../Assets/Vector22.png";
import Vector33 from "../../Assets/Vector33.png";
import Growth from "../../Assets/Growth.png";
import Frame2 from "../../Assets/Frame 2.png";
import Frame3 from "../../Assets/Frame 3.png";
import Box from "../../Assets/Box.png";
import nft1 from "../../Assets/nft 1.png";
import marketplace1 from "../../Assets/marketplace 1.png";
import Group593 from "../../Assets/Group 593.png";
import Title22 from "../../Assets/Title22.png";
import SideBar from "../SideBar/SideBar";
import MediaSidebar from "../SideBar/MediaSidebar";
import { nftContractAbi, nftContratAddress } from "../Utils/Nft";
import { useDispatch, useSelector } from "react-redux";
import {
  getWallet,
  getRewardOfUser,
  getAllNfTStakingData,
} from "../Redux/actions/actions";

import { toast } from "react-toastify";
import {
  road_Nft_Staking_Address,
  road_Nft_Staking_Abi,
} from "../Utils/Road_Nft_Staking";
import { breedContractAbi, breedContractAddress } from "../Utils/breed";

function NFTstaking() {
  let { acc } = useSelector((state) => state.connectWallet);
  let { userReward } = useSelector((state) => state.userReward);
  // let { myNftStakingVariables } = useSelector(
  //   (state) => state.myNftStakingVariables
  // );
  // console.log("myNftStakingVariables", myNftStakingVariables);
  const dispatch = useDispatch();

  const getWalletAddress = () => {
    dispatch(getWallet());
    dispatch(getRewardOfUser());
    // dispatch(getAllNfTStakingData());
  };
  let [nftArrayLength, setNftsArrayLength] = useState(0);
  let [totalPages, setTotalPages] = useState(1);
  let [nftArray, setNftsArray] = useState([]);
  let [totalMiningPower, setTotalMiningPower] = useState(0);
  let [myMiningPower, setMyMiningPower] = useState(0);
  let [totalStakedAmount, setTotalStakedAmount] = useState(0);
  let [myStakedAmount, setMyStakedAmount] = useState(0);
  let damiImage = [pool1, pool2, pool3, pool4, pool5, pool6];

  const getAllNfTStakingData = async () => {
    console.log("Acc", acc);
    if (acc == "No Wallet") {
      console.log("Not Connected");
    } else if (acc == "Wrong Network") {
      console.log("Wrong Network");
    } else if (acc == "Connect Wallet") {
      console.log("Connect Wallet");
    } else {
      try {
        console.log("Acc", acc);

        const web3 = window.web3;
        const roadNftStakingContract = new web3.eth.Contract(
          road_Nft_Staking_Abi,
          road_Nft_Staking_Address
        );
        let ttlMiningpwer = await roadNftStakingContract.methods
          .PUBLICpower()
          .call();
        setTotalMiningPower(ttlMiningpwer);
        let allArray = await roadNftStakingContract.methods.User(acc).call();

        let myMiningPwer = allArray.hashpower;
        setMyMiningPower(myMiningPwer);
        let myStkedAm = allArray.myNFT;
        setMyStakedAmount(myStkedAm);

        let ttlStkedAm = await roadNftStakingContract.methods
          .publicNFTs()
          .call();
        setTotalStakedAmount(ttlStkedAm);
      } catch (e) {
        console.log("Error while getAllNfTStakingData Line 72 ", e);
      }
    }
  };

  const getNfts = async () => {
    try {
      if (acc == "No Wallet") {
        //   setBtTxt("Connect Wallet")
        console.log("Not Connected");
      } else if (acc == "Wrong Network") {
        //   setBtTxt("Wrong Network")
        console.log("Not Connected");
      } else if (acc == "Connect Wallet") {
        console.log("Not Connected");
      } else {
        const web3 = window.web3;
        const raodnftContract = new web3.eth.Contract(
          road_Nft_Staking_Abi,
          road_Nft_Staking_Address
        );
        let breedContract = new web3.eth.Contract(
          breedContractAbi,
          breedContractAddress
        );
        let totalIds = await raodnftContract.methods.userStakedNFT(acc).call();
        console.log("totalIds", totalIds);
        setNftsArrayLength(totalIds.length);
        let ttlPage = parseInt(totalIds.length) / 6;
        ttlPage = Math.ceil(ttlPage);
        setTotalPages(ttlPage);
        let simplleArray = [];

        totalIds.forEach(async (ids) => {
          let uris = await breedContract.methods.tokenURI(ids).call();
          uris = uris.split("/");
          console.log("uris", uris);
          if (uris[5] == "common") {
            let imageUrl = `/fighter nft/common/${uris[6]}`;
            let imageName = `Common #${ids}`;
            let tokenId = ids;
            let type = "Fighter";
            let IsStake = true;
            simplleArray = [
              ...simplleArray,
              { imageUrl, imageName, tokenId, type, IsStake },
            ];
            setNftsArray(simplleArray);
          } else if (uris[5] == "uncommon") {
            let imageUrl = `/fighter nft/uncommon/${uris[6]}`;
            let imageName = `Unommon #${ids}`;
            let tokenId = ids;
            let type = "Fighter";
            let IsStake = true;
            simplleArray = [
              ...simplleArray,
              { imageUrl, imageName, tokenId, type, IsStake },
            ];
            setNftsArray(simplleArray);
          } else if (uris[5] == "rare") {
            let imageUrl = `/fighter nft/rare/${uris[6]}`;
            let imageName = `Rare #${ids}`;
            let tokenId = ids;
            let type = "Fighter";
            let IsStake = true;
            simplleArray = [
              ...simplleArray,
              { imageUrl, imageName, tokenId, type, IsStake },
            ];
            setNftsArray(simplleArray);
          } else if (uris[5] == "epic") {
            let imageUrl = `/fighter nft/epic/${uris[6]}`;
            let imageName = `Epic #${ids}`;
            let tokenId = ids;
            let type = "Fighter";
            let IsStake = true;
            simplleArray = [
              ...simplleArray,
              { imageUrl, imageName, tokenId, type, IsStake },
            ];
            setNftsArray(simplleArray);
          } else if (uris[5] == "legendary") {
            let imageUrl = `/fighter nft/legendary/${uris[6]}`;
            let imageName = `Legendary #${ids}`;
            let tokenId = ids;
            let type = "Fighter";
            let IsStake = true;
            simplleArray = [
              ...simplleArray,
              { imageUrl, imageName, tokenId, type, IsStake },
            ];
            setNftsArray(simplleArray);
          } else if (uris[5] == "mythic") {
            let imageUrl = `/fighter nft/mythic/${uris[6]}`;
            let imageName = `Mythic #${ids}`;
            let tokenId = ids;
            let type = "Fighter";
            let IsStake = true;
            simplleArray = [
              ...simplleArray,
              { imageUrl, imageName, tokenId, type, IsStake },
            ];
            setNftsArray(simplleArray);
          }
        });
        // for (let i = 0; i < totalIds.length; i++) {
        //   if (totalIds[i] <= 3560) {
        //     let imageUrl = `/images/common.png`;
        //     let imageName = `Common #${totalIds[i]}`;
        //     let tokenId = totalIds[i];
        //     simplleArray = [...simplleArray, { imageUrl, imageName, tokenId }];
        //     setNftsArray(simplleArray);
        //   } else if (totalIds[i] > 3560 && totalIds[i] <= 6230) {
        //     let imageUrl = `/images/uncommon.png`;
        //     let imageName = `Uncommon #${totalIds[i]}`;
        //     let tokenId = totalIds[i];
        //     simplleArray = [...simplleArray, { imageUrl, imageName, tokenId }];
        //     setNftsArray(simplleArray);
        //   } else if (totalIds[i] > 6230 && totalIds[i] <= 8140) {
        //     let imageUrl = `/images/rare.png`;
        //     let imageName = `Rare #${totalIds[i]}`;
        //     let tokenId = totalIds[i];
        //     simplleArray = [...simplleArray, { imageUrl, imageName, tokenId }];
        //     setNftsArray(simplleArray);
        //   } else if (totalIds[i] > 8140 && totalIds[i] <= 9250) {
        //     let imageUrl = `/images/epic.png`;
        //     let imageName = `Epic #${totalIds[i]}`;
        //     let tokenId = totalIds[i];
        //     simplleArray = [...simplleArray, { imageUrl, imageName, tokenId }];
        //     setNftsArray(simplleArray);
        //   } else if (totalIds[i] > 9250 && totalIds[i] <= 9870) {
        //     let imageUrl = `/images/legendary.png`;
        //     let imageName = `Legendary #${totalIds[i]}`;
        //     let tokenId = totalIds[i];
        //     simplleArray = [...simplleArray, { imageUrl, imageName, tokenId }];
        //     setNftsArray(simplleArray);
        //   } else if (totalIds[i] > 9870 && totalIds[i] <= 30000) {
        //     let imageUrl = `/images/mythic.png`;
        //     let imageName = `Mythic #${totalIds[i]}`;
        //     let tokenId = totalIds[i];
        //     simplleArray = [...simplleArray, { imageUrl, imageName, tokenId }];
        //     setNftsArray(simplleArray);
        //   }
        // }
      }
    } catch (e) {
      console.error("error while get nfts", e);
    }
  };
  let [initialLimit, setInitialLimit] = useState(0);
  let [finalLimit, setFinalLimit] = useState(6);
  let [pageNumber, setPageNumber] = useState(1);
  const loadMore = () => {
    let a = finalLimit + 6;
    if (a >= nftArrayLength) {
      setInitialLimit(initialLimit + 6);
      if (pageNumber < totalPages) {
        setPageNumber(pageNumber + 1);
      }
      console.log("Loading More Up");
      setFinalLimit(nftArrayLength);
    } else {
      console.log("Loading More");
      if (pageNumber < totalPages) {
        setPageNumber(pageNumber + 1);
      }
      setInitialLimit(initialLimit + 6);
      setFinalLimit(finalLimit + 6);
    }
  };

  const loadLess = () => {
    let b = finalLimit - 6;

    if (b <= 6) {
      setFinalLimit(6);
      setInitialLimit(0);
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    } else {
      setInitialLimit(initialLimit - 6);
      setPageNumber(pageNumber - 1);
      setFinalLimit(finalLimit - 6);
    }
  };
  const getData = () => {
    if (
      acc != "No Wallet" &&
      acc != "Wrong Network" &&
      acc != "Connect Wallet"
    ) {
      getNfts();
      dispatch(getRewardOfUser());
      setInterval(function () {
        // method to be executed;
        dispatch(getRewardOfUser());
      }, 9000);
    }
  };
  const unStakeNFT = async (nftId) => {
    try {
      if (acc == "No Wallet") {
        //   setBtTxt("Connect Wallet")
        toast.info("Not Connected");
      } else if (acc == "Wrong Network") {
        //   setBtTxt("Wrong Network")
        toast.info("Not Connected");
      } else if (acc == "Connect Wallet") {
        toast.info("Not Connected");
      } else {
        const web3 = window.web3;
        const nftContract = new web3.eth.Contract(
          nftContractAbi,
          nftContratAddress
        );
        const raodnftContract = new web3.eth.Contract(
          road_Nft_Staking_Abi,
          road_Nft_Staking_Address
        );

        await raodnftContract.methods.unstake([nftId]).send({
          from: acc,
        });
        toast.success("Confirmed Unstaked NFT");
        getNfts();
      }
    } catch (e) {
      toast.error("Transaction Failed");
      console.error("error while stake NFT", e);
    }
  };

  const claimReward = async () => {
    try {
      if (acc == "No Wallet") {
        //   setBtTxt("Connect Wallet")
        toast.info("Not Connected");
      } else if (acc == "Wrong Network") {
        //   setBtTxt("Wrong Network")
        toast.info("Not Connected");
      } else if (acc == "Connect Wallet") {
        toast.info("Not Connected");
      } else {
        const web3 = window.web3;
        const raodnftContract = new web3.eth.Contract(
          road_Nft_Staking_Abi,
          road_Nft_Staking_Address
        );

        await raodnftContract.methods.WithdrawReward().send({
          from: acc,
        });
        dispatch(getRewardOfUser());
        toast.success("Confirmed claim reward");
      }
    } catch (e) {
      toast.error("Transaction Failed");
      console.error("error while claim Reward");
    }
  };
  useEffect(() => {
    setInterval(() => {
      getAllNfTStakingData();
    }, 10000);
    getAllNfTStakingData();
  }, []);
  useLayoutEffect(() => {
    getNfts();
    getData();
  }, [acc]);
  return (
    <div className="imagePool">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center pt-5 pb-3">
          <div className="col-lg-2 col-md-4 col-4 d-flex justify-content-start">
            <span id="presale-back">
              <Link to="/">
                <MdOutlineKeyboardBackspace
                  className="MdOutlineKeyboardBackspace"
                  style={{ color: "white" }}
                />
              </Link>
              {""}
              Back
            </span>
          </div>
          <div className="col-lg-2 col-md-3 col-5 d-flex justify-content-end">
            <button onClick={() => getWalletAddress()} className="btn poolbtn">
              {acc === "No Wallet"
                ? "Connect"
                : acc === "Connect Wallet"
                  ? "Connect"
                  : acc === "Wrong Network"
                    ? acc
                    : acc.substring(0, 3) + "..." + acc.substring(acc.length - 3)}
            </button>
          </div>
        </div>
        <div className="row d-flex justify-content-center justify-content-around">
          <div className="col-3 staking-box" style={{marginTop: "35px"}}>
            <SideBar />
          </div>
          {/* <div className='col-11 mb-3 staking-coll'>
                        <MediaSidebar />
                    </div> */}

          <div className="col-lg-8 col-11 mb-md-1 pb-5 mb-4 mt-4">
            <div className="row d-flex justify-content-center mt-2 mb-1">
              <div className="col-lg-12 col-11 presale-box1">
                <img src={Title22} className="mint-image" />
                <div className="row">
                  <div className="col-12">
                    <span className="staking-span">
                      With NFTs card Stake and get your reward with $ROAD token!
                    </span>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-md-3 mt-4 mb-4 ms-lg-1">
                  <div className="col-lg-4 col-11 NFTstaking-boxes">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 NFTstaking-boxes1">
                        <p className="nftstaking-p">Total Rewards:</p>
                        <p className="nftstaking-p1">{userReward.toLocaleString()}</p>
                      </div>
                      <div className="col-11 boxs-staking d-flex justify-content-between align-items-center mt-3">
                        <span className="nftstaking-span2">
                          Remaining Rewards:
                        </span>
                        <span className="nftstaking-span3">450,000,000</span>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center justify-content-around">
                      <div className="col-5  boxs-staking d-flex flex-column mt-3 text-start">
                        <span className="nft-staking-p pb-2">
                          {totalMiningPower.toLocaleString()}
                        </span>
                        <span className="nft-staking-p1">
                          Total Mining Power
                        </span>
                      </div>
                      <div className="col-5 boxs-staking d-flex flex-column mt-3">
                        <span className="nft-staking-p pb-2">
                          {myMiningPower.toLocaleString()}
                        </span>
                        <span className="nft-staking-p1">My Mining Power</span>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center justify-content-around">
                      <div className="col-5 boxs-staking d-flex flex-column mt-3">
                        <span className="nft-staking-p pb-2">
                          {totalStakedAmount}
                        </span>
                        <span className="nft-staking-p1">
                          Total Staked Amount
                        </span>
                      </div>
                      <div className="col-5 boxs-staking d-flex flex-column mt-3 text-center">
                        <span className="nft-staking-p pb-2">{myStakedAmount.toLocaleString()}</span>
                        <span className="nft-staking-p1">My Staked Amount</span>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center ">
                      <div className="col-11 boxs-staking d-flex justify-content-between align-items-center mt-3">
                        <span className="nftstaking-span2">
                          Total Staked Tokens($ROAD):
                        </span>
                        <span className="nftstaking-span3">0.00</span>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center  mb-3">
                      <div className="col-11 boxs-staking d-flex justify-content-between align-items-center mt-3">
                        <span className="nftstaking-span2">
                          My Staked Tokens($ROAD):
                        </span>
                        <span className="nftstaking-span3">0.00</span>
                      </div>
                    </div>

                    <div className=" d-flex justify-content-center justify-content-between mt-4">
                      <div className="col-md-5">
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-unstake21"
                            size="lg"
                            onClick={claimReward}
                          >
                            Claim
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-unstake22"
                            size="lg"

                          >
                            UnStake All
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <div className=" d-flex justify-content-center justify-content-between mt-3 mb-3">
                      <div className="col-md-5">
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-unstake22"
                          size="lg"

                        >
                          UnStake All
                        </button>
                      </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="col-lg-8">
                    <div className="row d-flex justify-content-md-start justify-content-center flex-wrap  mt-md-0 mt-3">

                      {

                      }



                      {nftArray.length ?
                        nftArray.slice(initialLimit, finalLimit).map((nft) => {
                          console.log("dummy");
                          return (
                            <div className="col-md-4 nft-staking-b0xxs m-1 p-2 mt-2">
                              <div>
                                <img
                                  src={`/config/${nft.imageUrl}`}
                                  className="nftstaking-img mt-2"
                                />
                                <p
                                  className="text-center mt-2"
                                  style={{ color: "white" }}
                                >
                                  {nft.imageName}
                                </p>
                              </div>
                              <div className="row d-flex justify-content-center">
                                <div className="col-10">
                                  <div className="d-grid gap-2">
                                    <button
                                      className="btn btn-unstake"
                                      size="lg"
                                      onClick={() => {
                                        unStakeNFT(nft.tokenId);
                                      }}
                                    >
                                      Unstake
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                        :
                        damiImage.map((img) => {
                          console.log("dummy");
                          return (
                            <div className="col-md-4 nft-staking-b0xxs m-1 p-2 mt-2">
                              <div>
                                <img
                                  src={img}
                                  className="nftstaking-img mt-2"
                                />
                              </div>

                            </div>
                          )

                        })
                      }
                    </div>
                  </div>
                  <div className="row d-flex flex-row justify-content-center justify-content-md-evenly mb-4 mt-4">
                    <div
                      className="col-1 d-flex align-items-center justify-content-center ps-md-1 ps-4"
                      style={{ cursor: "pointer" }}
                      onClick={loadLess}
                    >
                      <img
                        src={Rectangle572}
                        style={{ position: "absolute" }}
                      />
                      <img src={Vector22} style={{ position: " relative" }} />
                    </div>
                    <div className="col-lg-3 col-md-5 col d-flex flex-row justify-content-center align-items-center justify-content-md-evenly">
                      <span className="MyCollectionspan">Current</span>
                      <div className="bosCollection">
                        <span className="mycollectionsP ">
                          {acc == "No Wallet" ||
                            acc == "Wrong Network" ||
                            acc == "Connect Wallet"
                            ? ""
                            : pageNumber}
                        </span>
                      </div>
                      <span className="MyCollectionspan">/{totalPages}</span>
                    </div>

                    {/* <button className='btn '> */}
                    <div
                      className="col-1 d-flex align-items-center justify-content-center  pe-md-1 pe-4"
                      style={{ cursor: "pointer" }}
                      onClick={loadMore}
                    >
                      <img
                        src={Rectangle572}
                        style={{ position: "absolute" }}
                      />
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
  );
}

export default NFTstaking;
