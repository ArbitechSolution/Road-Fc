import React from 'react'
import Growth from "../../Assets/Growth.png"
import Frame2 from "../../Assets/Frame 2.png"
import Frame3 from "../../Assets/Frame 3.png"
import Box from "../../Assets/Box.png"
import nft1 from "../../Assets/nft 1.png"
// import webroukCustomSelect from "https://cdn.skypack.dev/webrouk-custom-select@latest";

import marketplace1 from "../../Assets/marketplace 1.png"
import Group593 from "../../Assets/Group 593.png"
import { Link, NavLink } from "react-router-dom";
import "./SideBar.css"
function MediaSidebar() {
    return (
        <div>
{/* <div class="select-wrapper ">
    <select className='select form-control'>

        <NavLink to="/Staking" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
        <option value="0">
        Staking & Point
        </option>
        </NavLink>

    </select>
</div> */}




<div class="br-select">
  <div class="br-input">
    <input id="select-simple" type="text" placeholder="Selecione o item"/>
    <button class="br-button" type="button" aria-label="Exibir lista" tabindex="-1" data-trigger="data-trigger"><i class="fas fa-angle-down" aria-hidden="true"></i>
    </button>
  </div>
  <div class="br-list" tabindex="0">
    <div class="br-item" tabindex="-1">
      <div class="br-radio">
        <input id="rb0" type="radio" name="estados-simples" value="rb0"/>
        <label for="rb0">Acre</label>
      </div>
    </div>
    <div class="br-item" tabindex="-1">
      <div class="br-radio">
        <input id="rb1" type="radio" name="estados-simples" value="rb1"  />
        <label for="rb1">Alagoas</label>
      </div>
    </div>
    <div class="br-item" tabindex="-1">
      <div class="br-radio">
        <input id="rb2" type="radio" name="estados-simples" value="rb2"/>
        <label for="rb2">Amapá</label>
      </div>
    </div>
    <div class="br-item" tabindex="-1">
      <div class="br-radio">
        <input id="rb3" type="radio" name="estados-simples" value="rb3"/>
        <label for="rb3">Amazonas</label>
      </div>
    </div>
    <div class="br-item" tabindex="-1">
      <div class="br-radio">
        <input id="rb4" type="radio" name="estados-simples" value="rb4"/>
        <label for="rb4">Bahia</label>
      </div>
    </div>
    <div class="br-item" tabindex="-1">
      <div class="br-radio">
        <input id="rb5" type="radio" name="estados-simples" value="rb5"/>
        <label for="rb5">Ceará</label>
      </div>
    </div>
    <div class="br-item" tabindex="-1">
      <div class="br-radio">
        <input id="rb6" type="radio" name="estados-simples" value="rb6"/>
        <label for="rb6">Distrito Federal</label>
      </div>
    </div>




  </div>
</div>





            {/* <div class="accordion " id="accordionFlushExample">
                <div class="accordion-item staking-boxResponsive">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" value="0" type="button" style={{ color: "white" }} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <NavLink to="/Staking" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
                            <div className='col-10' >
                                <div className="d-grid gap-2">
                                    <button className='btn text-start d-flex align-items-center' style={{color: "white", fontSize: "15px", fontWeight: "bold"}}>
                                        <img src={Growth} width="30px" />&nbsp;&nbsp; Staking & Point
                                    </button>
                                </div>
                            </div>
                            </NavLink>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <NavLink to="/Mint" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-9 staking-btn_active' : 'col-9 staking-btn')}>
                            <div className='col-10' value="1">
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={Frame2} width="30px" />&nbsp;&nbsp; Mint
                                    </button>
                                </div>
                            </div>
                            </NavLink>
                            <NavLink to="/breed" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
                            <div className='col-10 mt-2'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={Frame3} width="24px" />&nbsp;&nbsp; Breed
                                    </button>
                                </div>
                            </div>
                            </NavLink>
                            <NavLink to="/MysteryBox" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
                            <div className='col-10 mt-2'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={Box} width="30px" />&nbsp;&nbsp; Mystery Box
                                    </button>
                                </div>
                            </div>
                            </NavLink>
                            <NavLink to="/NFTstaking" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
                            <div className='col-10 mt-2'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={nft1} width="30px" />&nbsp;&nbsp; NFT Staking
                                    </button>
                                </div>
                            </div>
                            </NavLink>
                            <NavLink to="/marketplace" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
                            <div className='col-10 mt-2 '>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={marketplace1} width="30px" />&nbsp;&nbsp; NFT Market
                                    </button>
                                </div>
                            </div>
                            </NavLink>
                            <NavLink to="/MyNFTs" style={{ textDecoration: "none", color: "white" }} className={({ isActive }) => (isActive ? 'col-10 staking-btn_active' : 'col-10 staking-btn')}>
                            <div className='col-10 mt-2'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={Group593} width="30px" />&nbsp;&nbsp; My NFT
                                    </button>
                                </div>
                            </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default MediaSidebar