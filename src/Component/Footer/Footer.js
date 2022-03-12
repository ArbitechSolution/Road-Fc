import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div className='footercolorsss'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-4 d-flex justify-content-between  p-4'>
                        <span id="footer-span">Whitepaper</span>
                        <span id="footer-span" className=''>Staking Guide</span>
                    </div>
                    <div className='col-lg-8 col-11 p-4 d-flex justify-content-md-end'>
                        <span id="footer-span">ROADFC.io © 2022, All rights reserved</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer