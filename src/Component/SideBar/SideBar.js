import React, { useState } from 'react'
import Growth from "../../Assets/Growth.png"
import Frame2 from "../../Assets/Frame 2.png"
import Frame3 from "../../Assets/Frame 3.png"
import Box from "../../Assets/Box.png"
import nft1 from "../../Assets/nft 1.png"
import marketplace1 from "../../Assets/marketplace 1.png"
import Group593 from "../../Assets/Group 593.png"
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function SideBar() {
  AOS.init();
  return (
    <div>
        <div className='row d-flex justify-content-center mt-3 mb-3' data-aos="fade-right"
         data-aos-offset="100"
         data-aos-delay="50"
         data-aos-duration="500"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false">
          <NavLink to="/Staking" style={{ textDecoration: "none" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
            <div className=''>
              <div className="d-grid gap-2" >
                <button className='btn text-start d-flex align-items-center' style={{ color: "#FD5043",fontSize: "18px", fontWeight: "bold" }}>
                  <img src={Growth} width="30px" />&nbsp;&nbsp; Staking & Point
                </button>
              </div>
            </div>
          </NavLink>
        </div>

        <div className='row d-flex justify-content-center mt-3 mb-3' data-aos="fade-right"
         data-aos-offset="100"
         data-aos-delay="50"
         data-aos-duration="800"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false">
          <NavLink to="/Mint" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
            <div className=''>
              <div className="d-grid gap-2">
                <button className='btn  text-start d-flex align-items-center' style={{ color: "#FD5043", fontSize: "18px", fontWeight: "bold" }}>
                  <img src={Frame2} width="30px" />&nbsp;&nbsp; Mint
                </button>
              </div>
            </div>
          </NavLink>
        </div>

        <div className='row d-flex justify-content-center mt-3 mb-3'
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1100"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">
          <NavLink to="/breed" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
            <div className=''>
              <div className="d-grid gap-2">
                <button className='btn text-start d-flex align-items-center' style={{ color: "#FD5043", fontSize: "18px", fontWeight: "bold" }}>
                  <img src={Frame3} width="24px" />&nbsp;&nbsp; Breed

                </button>
              </div>
            </div>
          </NavLink>
        </div>

      <div className='row d-flex justify-content-center mt-3 mb-3'
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="1400"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      >
        <NavLink to="/MysteryBox" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
          <div className=''>
            <div className="d-grid gap-2">
              <button className='btn text-start d-flex align-items-center' style={{ color: "#FD5043", fontSize: "18px", fontWeight: "bold" }}>
                  <img src={Box} width="30px" />&nbsp;&nbsp; Mystery Box
              </button>
            </div>
          </div>
        </NavLink>
      </div>
      <div className='row d-flex justify-content-center mt-3 mb-3'
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="1700"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false">
        <NavLink to="/NFTstaking" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
          <div className=''>
            <div className="d-grid gap-2">
              <button className='btn text-start d-flex align-items-center' style={{ color: "#FD5043", fontSize: "18px", fontWeight: "bold" }}>
                <img src={nft1} width="30px" />&nbsp;&nbsp; NFT Staking

              </button>
            </div>
          </div>
        </NavLink>
      </div>
      <div className='row d-flex justify-content-center mt-3 mb-3' data-aos="fade-right"
         data-aos-offset="100"
         data-aos-delay="50"
         data-aos-duration="2000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false">
        <NavLink to="/marketplace" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
          <div className=''>
            <div className="d-grid gap-2">
              <button className='btn text-start d-flex align-items-center' style={{ color: "#FD5043", fontSize: "18px", fontWeight: "bold" }}>
                <img src={marketplace1} width="30px" />&nbsp;&nbsp; NFT Market
              </button>
            </div>
          </div>
        </NavLink>
      </div>
      <div className='row d-flex justify-content-center mt-3 mb-3' data-aos="fade-right"
         data-aos-offset="100"
         data-aos-delay="50"
         data-aos-duration="2300"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false">
        <NavLink to="/MyNFTs" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
          <div className=''>
            <div className="d-grid gap-2">
              <button className='btn text-start d-flex align-items-center' style={{ color: "#FD5043", fontSize: "18px", fontWeight: "bold" }}>
                <img src={Group593} width="30px" />&nbsp;&nbsp; My NFT

              </button>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar