import React from 'react'
import roadfc from "../../Assets/roadfc-logo 1.png"
import "./FooterDown.css"
import Group839 from "../../Assets/Group 839.png"
import Frame46 from "../../Assets/Frame 46.png"
import Frame47 from "../../Assets/Frame 47.png"
import Frame45 from "../../Assets/Frame 45.png"
import Frame48 from "../../Assets/Frame 48.png"
import Group837 from "../../Assets/Group 837.png"
import Frame51 from "../../Assets/Frame 51.png"
function FooterDown() {
  return (
    <div className='footercolorsss'>
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 pt-4'>
                    <img src={roadfc}/>
                </div>
                <div className='col-12 mt-sm-4 mt-3'>
                    <span className='footerDown_span me-sm-4 me-2'>HOME</span>
                    <span className='footerDown_span me-sm-4 me-2'>TOKENOMICS</span>
                    <span className='footerDown_span me-sm-4 me-2'>ECOSYSTEM</span>
                    <span className='footerDown_span me-sm-4 me-2'>NFTs CARD</span>
                    <span className='footerDown_span me-sm-4 me-2'>GAME</span>
                    <span className='footerDown_span me-sm-4 me-2'>ROAD POOL</span>
                    <span className='footerDown_span me-sm-4 me-2'>ROADMAP</span>
                    <span className='footerDown_span me-sm-4 me-2'>AUDIT</span>
                </div>

                <div className='col-12 mt-3 mb-4'>
                    <a><img src={Group839} className='me-sm-3 me-2'/></a>
                    <a><img src={Frame46} className='me-sm-3 me-2'/></a>
                    <a><img src={Frame47} className='me-sm-3 me-2'/></a>
                    <a><img src={Frame48} className='me-sm-3 me-2'/></a>
                    <a><img src={Frame45} className='me-sm-3 me-2'/></a>
                    <a><img src={Group837} className='me-sm-3 me-2'/></a>
                    <a><img src={Frame51} className='me-sm-3 me-2'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterDown