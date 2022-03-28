import React from 'react'
import "./Marketplace.css"
function Marketplace() {
    return (
        <div className='imagePool'>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-center pt-5 pb-3'>
                    <div className='col-md-3'>
                        <div className='row'>
                            <div className='col-12'>
                                <p className='market-span text-start'>FILTERS</p>
                                <div className='col-11 mt-2' >
                                    <p style={{ border: "1px solid #292C38" }}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketplace