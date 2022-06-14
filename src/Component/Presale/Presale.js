import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./Presale.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Skeleton from "@mui/material/Skeleton";
import p305 from "../../Assets/305 1.png";
import {
  getWallet,
  getPreSaleInfo,
  getUserBalance,
} from "../Redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
// import ProgressBar from 'react-bootstrap/ProgressBar'
import { preSaleContractAddress, preSaleContractAbi } from "../Utils/preSale";
import Web3 from "web3";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
const webSupply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");

function Presale() {
  let [percentageValue, setpercentageValue] = useState(0);
  let [reqBNB, setReqBNB] = useState("0.00");
  let enteredBnb = useRef(0);
  let dispatch = useDispatch();
  let { acc } = useSelector((state) => state.connectWallet);
  let { userBalance } = useSelector((state) => state.userBalance);

  let {
    roadPrice,
    roadTotalSupply,
    softCap,
    hardCap,
    minPurchase,
    maxPurchase,
    totalSoldTokens,
    startTime,
    endTime,
  } = useSelector((state) => state.preSaleInfo);

  startTime = parseInt(startTime);
  var myDate = new Date(startTime * 1000);

  totalSoldTokens = parseInt(totalSoldTokens);

  const calucaltePercentage = () => {
    let total = parseInt(roadTotalSupply);
    let sold = parseInt(totalSoldTokens);
    let myPercent = totalSoldTokens / 200000000;
    myPercent = myPercent * 100;
    myPercent = parseFloat(myPercent);
    console.log("percentageValue", sold);
    console.log("percentageValue", myPercent);

    setpercentageValue(myPercent);
  };

  const calculatedRoadPrice = async () => {
    let preSaleContractOf = new webSupply.eth.Contract(
      preSaleContractAbi,
      preSaleContractAddress
    );
    let userEnteredVal = enteredBnb.current.value;
    if (parseFloat(userEnteredVal) > 0) {
      let userEnteredValToWei = webSupply.utils.toWei(
        userEnteredVal.toString()
      );
      console.log("userEnteredValToWei", userEnteredValToWei);
      let calculatedRoad = await preSaleContractOf.methods
        .calculate_price(userEnteredValToWei)
        .call();
      calculatedRoad = webSupply.utils.fromWei(calculatedRoad);
      console.log("calculatedRoad", calculatedRoad);
      setReqBNB(calculatedRoad);
    } else {
      setReqBNB(0);
    }

    // requiredBNB.current.value =calculatedRoad;
  };
  const buyRoadwithBnb = async () => {
    try {
      if (acc == "No Wallet") {
        console.log("wallet");
        toast.error("Connect Wallet");
      } else if (acc == "Wrong Network") {
        toast.error("Wrong Network");
      } else if (acc == "Connect Wallet") {
        console.log("Connect Wallet");
        toast.error("Connect Wallet");
      } else if (acc == "Connect") {
        toast.error("Not Connected");
      } else {
        let userEnteredVal = enteredBnb.current.value;
        if (parseFloat(userEnteredVal) >= 0.1) {
          const web3 = window.web3;
          let usersBNBBalance = await web3.eth.getBalance(acc);
          console.log("userEnteredVal", usersBNBBalance);
          let preSaleContractOf = new web3.eth.Contract(
            preSaleContractAbi,
            preSaleContractAddress
          );
          let userEnteredValToWei = web3.utils.toWei(userEnteredVal.toString());
          if (parseFloat(usersBNBBalance) > parseFloat(userEnteredValToWei)) {
            await preSaleContractOf.methods.buy().send({
              from: acc,
              value: userEnteredValToWei.toString(),
            });
            toast.success("Transaction Successfull");
            dispatch(getPreSaleInfo());
            calucaltePercentage();
          } else {
            toast.error("Insufficient Balance");
          }
        } else {
          toast.error("Minimum Purchase is of 0.1 BNB");
        }
      }
    } catch (e) {
      console.log("Error While Buying Road with BNB", e);
      toast.error("Transaction Rejected");
    }
  };

  const getWalletAddress = () => {
    dispatch(getWallet());
    dispatch(getUserBalance());
    // allImagesNfts()
  };
  const getdata = () => {
    if (
      acc != "No Wallet" &&
      acc != "Wrong Network" &&
      acc != "Connect Wallet"
    ) {
      dispatch(getUserBalance());
    }
  };

  useEffect(() => {
    calucaltePercentage();
  }, [totalSoldTokens]);

  useEffect(() => {
    calucaltePercentage();
    dispatch(getPreSaleInfo());
    getdata();
  }, [acc]);

  return (
    <div className="imagePool">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center pt-5 pb-3">
          <div className="col-lg-2 col-md-3 col-4 d-flex justify-content-start">
            <span id="presale-back">
              <Link to="/">
                <MdOutlineKeyboardBackspace
                  className="icon-rea"
                  style={{ color: "white" }}
                />
              </Link>{" "}
              Back
            </span>
          </div>
          <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-end">
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
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-11  presale-box pb-4 mb-2">
            <div className="row">
              <div className="col-md-6 col-7 pt-2">
                <p className="Presale-p pt-md-5 pt-3 ps-md-3 pb-md-3">
                  Pre-Sale is Live
                </p>
                <p className="presale-p1 ps-md-3 pb-md-3">Available Now</p>
                <div className="d-flex justify-content-start align-items-md-center align-items-start  ps-md-3 pb-sm-3  prsale-cloumn">
                  <button className="btn presalebtn">ROAD Token</button>
                  <span> </span>
                  <span id="presale-span1" className="ps-sm-3 ps-2">
                    Price:
                    {
                      roadPrice ? (
                        `$ ${roadPrice}`
                      ) : (
                        <span className="dot-stretching"></span>
                      )
                      //  <span> <Skeleton animation="wave" width={50}/></span>
                    }
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-5 d-flex justify-content-end align-items-sm-end lign-items-center ">
                <img src={p305} className="presale-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center pb-5">
          <div className="col-md-12 col-11 presale-box1 pb-4 mb-2">
            <h4 className="pool-h4 pt-3">ROAD PRE-SALE POOL HAS STARTED</h4>
            <p className="pool-p2 pt-2">
              Stake $ROAD and get energy point for NFTs card
            </p>

            <div className="row d-flex justify-content-center justify-content-evenly mt-3">
              <div className="col-lg-5 col-md-7 col-11 pool-box3 mb-4 mt-4">
                <h5 className="bool-h55 pt-sm-5 pt-3 fw-bold">PRE-SALE</h5>
                <div className="row d-flex justify-content-center pt-4 pb-2">
                  <div className="col-11 text-start">
                    <form>
                      <label
                        className="form-label  fw-sm-bold"
                        style={{ color: "#5E606E" }}
                      >
                        $BNB
                      </label>
                      <input
                        onChange={() => calculatedRoadPrice()}
                        ref={enteredBnb}
                        type="number"
                        class="form-control"
                        placeholder="0.00"
                        min={1}
                      />
                    </form>
                  </div>
                </div>
                <div className="row d-flex justify-content-center pt-4 pb-2">
                  <div className="col-11 text-start">
                    <form>
                      <label
                        className="form-label fw-sm-bold"
                        style={{ color: "#5E606E" }}
                      >
                        $Road
                      </label>
                      <input
                        disabled={true}
                        type="number"
                        class="form-control"
                        placeholder={reqBNB}
                      />
                    </form>
                  </div>
                </div>
                <div className="row">
                  <div className="col-11 text-end">
                    <span id="preale-Available">
                      Available:{" "}
                      {userBalance ? (
                        ` ${userBalance} BNB`
                      ) : (
                        <>
                          &nbsp;&nbsp;
                          <br /> <span className="dot-collision-bal"></span>
                        </>
                      )}{" "}
                    </span>
                  </div>
                </div>
                <div className="row d-flex justify-content-center pt-4 pb-2">
                  <div className="col-md-5 col-9">
                    <div className="d-grid gap-2">
                      <button
                        onClick={() => buyRoadwithBnb()}
                        className="btn presalesbtn1"
                        size="lg"
                      >
                        Buy ROAD
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center pt-5 pb-2 mb-3">
                  <div className="col-11 d-flex justify-content-between align-items-center">
                    <span className="presale-span">Progress</span>
                    <span className="presale-span1">Current Pool</span>
                  </div>
                  <div className="col-11 presale-b0x1 pt-4 pb-4 mt-2">
                    <ProgressBar
                      variant={"YOU_PICK_A_NAME"}
                      style={{ Color: "#E24034" }}
                      now={percentageValue}
                    />
                    <div className="d-flex justify-content-between justify-content-center">
                      <span className="span-presale">{percentageValue}%</span>
                      <span className="span-presale">200,000,000 $ROAD</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-7 col-11 pool-box3 mt-4 mb-4">
                <h5 className="bool-h55 pt-sm-5 pt-3 fw-bold">PRE-SALE POOL</h5>

                <div className="row d-flex justify-content-center mt-4">
                  <div className="col-11 d-flex justify-content-between align-items-center mt-2">
                    <div className="presale-span21">Total Supply</div>
                    <div className="presale-span22">
                      10,000,000,000 &nbsp;
                      {/* {myroadTotalSupply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} &nbsp; */}
                      <span className="presale-span1">ROAD</span>
                    </div>
                  </div>
                  <div className="col-11 mt-3">
                    <p style={{ border: "1px solid #292C38" }}></p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center ">
                  <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                    <div className="presale-span21">Token for Presales</div>
                    <div className="presale-span22">
                      200,000,000 &nbsp;
                      <span className="presale-span1">ROAD</span>
                    </div>
                  </div>
                  <div className="col-11 mt-2">
                    <p style={{ border: "1px solid #292C38" }}></p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center ">
                  <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                    <div className="presale-span21">Price</div>
                    <div className="presale-span22">
                      {
                        roadPrice ? (
                          `$ ${roadPrice}`
                        ) : (
                          <span className="dot-collision"></span>
                        )
                        //  <span> <Skeleton animation="wave" width={50}/></span>
                      }
                    </div>
                  </div>
                  <div className="col-11 mt-2">
                    <p style={{ border: "1px solid #292C38" }}></p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center ">
                  <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                    <div className="presale-span21">Minimum Purchase</div>
                    <div className="presale-span22">
                      {minPurchase ? (
                        `${minPurchase}BNB`
                      ) : (
                        <span className="dot-collision"></span>
                      )}{" "}
                    </div>
                  </div>
                  <div className="col-11 mt-2">
                    <p style={{ border: "1px solid #292C38" }}></p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center ">
                  <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                    <div className="presale-span21">Max Purchase</div>
                    <div className="presale-span22">
                      {maxPurchase ? (
                        `${maxPurchase}BNB`
                      ) : (
                        <span className="dot-collision"></span>
                      )}
                    </div>
                  </div>
                  <div className="col-11 mt-2">
                    <p style={{ border: "1px solid #292C38" }}></p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center ">
                  <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                    <div className="presale-span21">Start time</div>
                    <div className="presale-span22">
                      15 Apr, 2022 UTC 21:00
                      {/* {myDate.toLocaleString()} */}
                    </div>
                  </div>
                  <div className="col-11 mt-2">
                    <p style={{ border: "1px solid #292C38" }}></p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center ">
                  <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                    <div className="presale-span21">End time</div>
                    <div className="presale-span22">15 Apr, 2022 UTC 21:00</div>
                  </div>
                  <div className="col-11 mt-2">
                    <p style={{ border: "1px solid #292C38" }}></p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center ">
                  <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                    <div className="presale-span21">Soft Cap</div>
                    <div className="presale-span22">
                      2,000&nbsp;
                      {/* {mysoftCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                      BNB
                    </div>
                  </div>
                  <div className="col-11 mt-2">
                    <p style={{ border: "1px solid #292C38" }}></p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center ">
                  <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                    <div className="presale-span21">Hard Cap</div>
                    <div className="presale-span22">
                      4,000&nbsp;
                      {/* {myHardCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                      BNB
                    </div>
                  </div>
                  <div className="col-11 mt-2">
                    <p style={{ border: "1px solid #292C38" }}></p>
                  </div>
                </div>

                <h5 className="bool-h55 pt-3 fw-bold mb-3">We accepted BNB</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presale;
