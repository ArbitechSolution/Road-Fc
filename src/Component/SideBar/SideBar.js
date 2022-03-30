import React, { useState } from 'react'
import Growth from "../../Assets/Growth.png"
import Frame2 from "../../Assets/Frame 2.png"
import Frame3 from "../../Assets/Frame 3.png"
import Box from "../../Assets/Box.png"
import nft1 from "../../Assets/nft 1.png"
import marketplace1 from "../../Assets/marketplace 1.png"
import Group593 from "../../Assets/Group 593.png"
import { Link, NavLink } from "react-router-dom";
function SideBar() {

  let [isactivestake, setIsactivestake] = useState(true)
  let [isActiveMint, setIsActiveMint] = useState(false)
  let [isActiveBreed, setIsActiveBreed] = useState(false)

  const changeStake = () => {
    console.log("Inside changeStake")
    setIsactivestake(true)
    setIsActiveMint(false);
    setIsActiveBreed(false)
  }
  const changeMint = () => {
    console.log("Inside changeMint")

    setIsactivestake(false)
    setIsActiveMint(true);
    setIsActiveBreed(false)
  }
  const changeBreed = () => {
    console.log("Inside changeBreed")

    setIsactivestake(false)
    setIsActiveMint(false);
    setIsActiveBreed(true)
  }
  return (
    <div>
      <div onClick={()=>changeStake()} className='row d-flex justify-content-center mt-3 mb-3'>
        <div className='col-11'>
          <div className="d-grid gap-2">
            <Link to="/Staking" style={{ textDecoration: "none", color: "white" }} className={isactivestake ? "staking-btn_active" : "staking-btn"} >
              <button className='btn  text-start d-flex align-items-center' >
                <img src={Growth} width="30px" />&nbsp;&nbsp; Staking & Point

              </button>
            </Link>
          </div>
        </div>
      </div>
      <div onClick={()=>changeMint()} className='row d-flex justify-content-center mt-3 mb-3'>
        <div className='col-11'>
          <div className="d-grid gap-2">
            <Link to="/Mint" style={{ textDecoration: "none", color: "white" }} className={isActiveMint ? "staking-btn_active" : "staking-btn"} >
              <button className='btn text-start d-flex align-items-center' >
                <img src={Frame2} width="30px" />&nbsp;&nbsp; Mint
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div onClick={()=>changeBreed()} className='row d-flex justify-content-center mt-3 mb-3'>
        <div className='col-11'>
          <div className="d-grid gap-2">
            <Link to="/breed" style={{ textDecoration: "none", color: "white" }} className={isActiveBreed? "staking-btn_active" : "staking-btn"} >
              <button className='btn text-start d-flex align-items-center' >
                <img src={Frame3} width="24px" />&nbsp;&nbsp; Breed

              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-center mt-3 mb-3'>
        <div className='col-11'>
          <div className="d-grid gap-2">
            <button className='btn staking-btn text-start d-flex align-items-center' >
              <Link to="/MysteryBox" style={{ textDecoration: "none", color: "white" }}>
                <img src={Box} width="30px" />&nbsp;&nbsp; Mystery Box
              </Link>

            </button>
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-center mt-3 mb-3'>
        <div className='col-11'>
          <div className="d-grid gap-2">
            <button className='btn staking-btn text-start d-flex align-items-center' >
              <Link to="/NFTstaking" style={{ textDecoration: "none", color: "white" }}>
                <img src={nft1} width="30px" />&nbsp;&nbsp; NFT Staking
              </Link>

            </button>
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-center mt-3 mb-3'>
        <div className='col-11'>
          <div className="d-grid gap-2">
            <button className='btn staking-btn text-start d-flex align-items-center' >
              <Link to="/marketplace" style={{ textDecoration: "none", color: "white" }}>
                <img src={marketplace1} width="30px" />&nbsp;&nbsp; NFT Market
              </Link>

            </button>
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-center mt-3 mb-3'>
        <div className='col-11'>
          <div className="d-grid gap-2">
            <button className='btn staking-btn text-start d-flex align-items-center' >
              <Link to="/MyNFTs" style={{ textDecoration: "none", color: "white" }}>
                <img src={Group593} width="30px" />&nbsp;&nbsp; My NFT
              </Link>

            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar