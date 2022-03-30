import React from 'react'
import Growth from "../../Assets/Growth.png"
import Frame2 from "../../Assets/Frame 2.png"
import Frame3 from "../../Assets/Frame 3.png"
import Box from "../../Assets/Box.png"
import nft1 from "../../Assets/nft 1.png"
import marketplace1 from "../../Assets/marketplace 1.png"
import Group593 from "../../Assets/Group 593.png"
function MediaSidebar() {
  return (
    <div>
        <div class="accordion " id="accordionFlushExample">
                            <div class="accordion-item staking-boxResponsive">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" style={{ color: "white" }} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <div className='col-10 active' >
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Growth} width="30px" />&nbsp;&nbsp; Staking & Point
                                                </button>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div className='col-10'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Frame2} width="30px" />&nbsp;&nbsp; Mint
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Frame3} width="24px" />&nbsp;&nbsp; Breed
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Box} width="30px" />&nbsp;&nbsp; Mystery Box
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={nft1} width="30px" />&nbsp;&nbsp; NFT Staking
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2 '>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={marketplace1} width="30px" />&nbsp;&nbsp; NFT Market
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Group593} width="30px" />&nbsp;&nbsp; My NFT
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default MediaSidebar