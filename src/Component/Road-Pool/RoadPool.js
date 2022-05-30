import React from "react";
import "./RoadPool.css";
import Growth from "../../Assets/Growth.png";
import Frame2 from "../../Assets/Frame 2.png";
import Frame3 from "../../Assets/Frame 3.png";
import Box from "../../Assets/Box.png";
import { getWallet } from "../Redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import nft1 from "../../Assets/nft 1.png";
import marketplace1 from "../../Assets/marketplace 1.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function RoadPool() {
  AOS.init({
    offset: 300,
    duration: 4000,
  });
  let dispatch = useDispatch();
  let { acc } = useSelector((state) => state.connectWallet);
  console.log("acc", acc);
  const getWalletAddress = () => {
    dispatch(getWallet());
    // allImagesNfts()
  };
  return (
    <div className="imagePool">
      <div className="container">
        <div className="row d-flex justify-content-end pt-5">
          <div className="col-lg-2 col-md-3 d-flex justify-content-end ">
            <button onClick={() => getWalletAddress()} className="btn poolbtn">
              {" "}
              {acc === "No Wallet"
                ? "Connect"
                : acc === "Connect Wallet"
                  ? "Connect"
                  : acc === "Wrong Network"
                    ? acc
                    : acc.substring(0, 3) +
                    "..." +
                    acc.substring(acc.length - 3)}{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="row d-flex justify-content-center flex-wrap pt-4 pb-4 justify-content-around">
          <div className="col-lg-3 col-md-5 col-10 poolbox pt-4 m-1">
            <img src={Growth} />{" "}
            <h5 className="poolgh5 pt-4"> Staking & Point </h5>{" "}
            <div className="d-flex justify-content-center">
              <div className="col-10 text-center ">
                <p className="pool-p pt-2">
                  {" "}
                  Welcome to the Road pool.Here you are able to benefit from
                  staking tokens and receiving{" "}
                </p>
              </div>{" "}
            </div>{" "}
            <div className="row d-flex justify-content-center pb-3 pt-2">
              <div className="col-10 ">
                <Link
                  to="/Staking"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <div className="d-grid gap-2">
                    <button
                      className="btn poolbtn1"
                      size="lg"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Enter{" "}
                    </button>{" "}
                  </div>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="col-lg-3 col-md-5 col-10 poolbox pt-4 m-1">
            <img src={Frame2} /> <h5 className="poolgh5 pt-4">Mint </h5>{" "}
            <div className="d-flex justify-content-center">
              <div className="col-10 text-center ">
                <p className="pool-p pt-2">
                  {" "}
                  With uncertainity, comes excitement, You never know what you are going to get.Try your luck!{" "}
                </p>{" "}
              </div>{" "}
            </div>
            <div className="row d-flex justify-content-center pb-3 pt-2">
              <div className="col-10 ">
                <Link
                  to="/Mint"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <div className="d-grid gap-2">
                    <button
                      className="btn poolbtn1"
                      size="lg"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Mint{" "}
                    </button>{" "}
                  </div>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="col-lg-3 col-md-5 col-10 poolbox pt-4 m-1">
            <img src={Frame3} /> <h5 className="poolgh5 pt-4"> Breed </h5>{" "}
            <div className="d-flex justify-content-center">
              <div className="col-10 text-center ">
                <p className="pool-p pt-2">
                  {" "}
                  Select two fighters who will perform the breed to get higher
                  level card in exchange.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="row d-flex justify-content-center pb-3 pt-2">
              <div className="col-10 ">
                <Link
                  to="/breed"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <div className="d-grid gap-2">
                    <button
                      className="btn poolbtn1"
                      size="lg"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Enter{" "}
                    </button>{" "}
                  </div>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="col-lg-3 col-md-5 col-10 poolbox pt-4 m-1 mt-3">
            <img src={Box} /> <h5 className="poolgh5 pt-4"> Mystery Box </h5>{" "}
            <div className="d-flex justify-content-center">
              <div className="col-11 text-center ">
                <p className="pool-p pt-2">
                  {" "}
                  Limited Mystery boxes waiting to be unboxed!What fighter will
                  you get ?{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="row d-flex justify-content-center pb-3 pt-2">
              <div className="col-10 ">
                <Link
                  to="/MysteryBox"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <div className="d-grid gap-2">
                    <button
                      className="btn poolbtn1"
                      size="lg"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Mint{" "}
                    </button>{" "}
                  </div>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="col-lg-3 col-md-5 col-10 poolbox pt-4 m-1 mt-3">
            <img src={nft1} /> <h5 className="poolgh5 pt-4"> NFT Staking </h5>{" "}
            <div className="d-flex justify-content-center">
              <div className="col-7 text-center ">
                <p className="pool-p pt-2">
                  Browse your personal Staking of NFTs{" "}
                </p>
              </div>{" "}
            </div>{" "}
            <div className="row d-flex justify-content-center pb-3 pt-2">
              <div className="col-10 ">
                <Link
                  to="/NFTstaking"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <div className="d-grid gap-2">
                    <button
                      className="btn poolbtn1"
                      size="lg"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Enter{" "}
                    </button>{" "}
                  </div>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-lg-3 col-md-5 col-10 poolbox pt-4 m-1 mt-3">
            <img src={marketplace1} />{" "}
            <h5 className="poolgh5 pt-4"> NFT Market </h5>
            <div className="d-flex justify-content-center">
              <div className="col-6 text-center ">
                <p className="pool-p pt-2">Buy and Sell large collection of NFTs</p>
              </div>{" "}
            </div>{" "}
            <div className="row d-flex justify-content-center pb-3 pt-2">
              <div className="col-10 ">
                <Link
                  to="/marketplace"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <div className="d-grid gap-2">
                    <button
                      className="btn poolbtn1"
                      size="lg"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Show Market{" "}
                    </button>{" "}
                  </div>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default RoadPool;
