import React, { useState } from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import ButtonSelect from "../SideBar/ButtonSelect";
import { HiShoppingCart } from "react-icons/hi";
import { getWallet } from "../Redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import "./TransactionLog.css";
import Ellipse37 from "../../Assets/Ellipse 37.png";
import Ellipse39 from "../../Assets/Ellipse 39.png"
import discount from "../../Assets/discount (3) 1.png"
import linechart from "../../Assets/line-chart 1.png"
import roadsign from "../../Assets/road-sign 1.png"
import image3 from "../../Assets/image 3.png"
function TransactionLog() {
    let [colorChange, setColorChange] = useState("24 hours")
    let [secondcolorChange, setSecondColorChange] = useState("recent")
    let dispatch = useDispatch();
    let { acc } = useSelector((state) => state.connectWallet);
    const getWalletAddress = () => {
        dispatch(getWallet());
        // allImagesNfts()
    };
    const secondchangeTab = (isSecondCheck) => {
        if (isSecondCheck == "recent") {
            setSecondColorChange("recent")
        } else if (isSecondCheck == "Top") {
            setSecondColorChange("Top")
        } else if (isSecondCheck == "Mylog") {
            setSecondColorChange("Mylog")
        }
    }
    const changeTabs = (isChecked) => {
        if (isChecked == "24 hours") {
            setColorChange("24 hours")
        } else if (isChecked == "7 days") {
            setColorChange("7 days")
        } else if (isChecked == "30 days") {
            setColorChange("30 days")
        } else if (isChecked == "all") {
            setColorChange("all")
        }
    }
    return (
        <div className='imagePool'>
            <div className='container'>
                <div className="row d-flex justify-content-between align-items-center pt-5 pb-3" >
                    <div className="col-lg-6 col-md-9 col-11 d-flex justify-content-left">
                        <ButtonSelect />
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 d-flex justify-content-end">
                        <button onClick={() => getWalletAddress()} className="btn poolbtn">
                            {acc === "No Wallet"
                                ? "Connect"
                                : acc === "Connect"
                                    ? acc
                                    : acc === "Connect to Rinkebey"
                                        ? acc
                                        : acc.substring(0, 4) + "..." + acc.substring(acc.length - 4)}
                        </button>
                    </div>
                </div>
                <div className='row d-flex justify-content-center pb-4'>
                    <div className='col-12 '>
                        <div className="tabset" defaultActiveKey="tab1" id="uncontrolled-tab-example">
                            <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked={colorChange == "24 hours" ? true : false} />
                            <label for="tab1" className='logtext ps-4'
                                style={{ color: colorChange == "24 hours" ? "white" : "#66676A" }}
                                onClick={() => changeTabs("24 hours")} >Last 24 Hours</label>
                            <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" checked={colorChange == "7 days" ? true : false} />
                            <label for="tab2" className='logtext ps-4'
                                style={{ color: colorChange == "7 days" ? "white" : "#66676A" }}
                                onClick={() => changeTabs("7 days")}>7 Days</label>
                            <input type="radio" name="tabset" id="tab3" aria-controls="dunkles" checked={colorChange == "30 days" ? true : false} />
                            <label for="tab3" className='logtext ps-4'
                                style={{ color: colorChange == "30 days" ? "white" : "#66676A" }}
                                onClick={() => changeTabs("30 days")}>30 Days</label>
                            <input type="radio" name="tabset" id="tab4" aria-controls="All" checked={colorChange == "all" ? true : false} />
                            <label for="tab4" className='logtext ps-4'
                                onClick={() => changeTabs("all")}>All</label>
                            <div class="tab-panels">
                                <section id="marzen" class="tab-panel">
                                    <div className='row d-flex justify-content-center'>
                                        <div className='col-md-4 col-10 d-flex flex-row justify-content-md-center mt-3'>
                                            <div className=' d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={Ellipse37} style={{ position: "absolute", width: "50px" }} />
                                                <img src={linechart} style={{ position: " relative", width: "22px" }} />

                                            </div>
                                            <div className='ms-4'>
                                                <span id='log-span'>Number of Trades</span><br />
                                                <span id='log-span1'>1585</span>
                                            </div>
                                        </div>


                                        <div className='col-md-4 col-11 d-flex flex-row justify-content-md-center mt-3' >
                                            <div className=' d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={roadsign} style={{ width: "50px" }} />
                                                {/* <img src={linechart} style={{ position: " relative", width: "22px" }} /> */}

                                            </div>
                                            <div className='ms-md-4 ms-3'>
                                                <span id='log-span'>Total Volume</span><br />
                                                <span id='log-span1'>201,211</span>
                                            </div>
                                        </div>


                                        <div className='col-md-4 col-10 d-flex flex-row justify-content-md-center mt-3'>
                                            <div className=' d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={Ellipse39} style={{ position: "absolute", width: "50px" }} />
                                                <img src={discount} style={{ position: " relative", width: "22px" }} />

                                            </div>
                                            <div className='ms-4'>
                                                <span id='log-span'>Avg. Price</span><br />
                                                <span id='log-span1'>1.2</span>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                                <section id="rauchbier" class="tab-panel">
                                    <div className='row d-flex justify-content-center'>
                                        <div className='col-md-4 col-10 d-flex flex-row justify-content-md-center mt-3'>
                                            <div className=' d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={Ellipse37} style={{ position: "absolute", width: "50px" }} />
                                                <img src={linechart} style={{ position: " relative", width: "22px" }} />

                                            </div>
                                            <div className='ms-4'>
                                                <span id='log-span'>Number of Trades</span><br />
                                                <span id='log-span1'>1585</span>
                                            </div>
                                        </div>


                                        <div className='col-md-4 col-11 d-flex flex-row justify-content-md-center mt-3' >
                                            <div className=' d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={roadsign} style={{ width: "50px" }} />
                                                {/* <img src={linechart} style={{ position: " relative", width: "22px" }} /> */}

                                            </div>
                                            <div className='ms-md-4 ms-3'>
                                                <span id='log-span'>Total Volume</span><br />
                                                <span id='log-span1'>201,211</span>
                                            </div>
                                        </div>


                                        <div className='col-md-4 col-10 d-flex flex-row justify-content-md-center mt-3'>
                                            <div className=' d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={Ellipse39} style={{ position: "absolute", width: "50px" }} />
                                                <img src={discount} style={{ position: " relative", width: "22px" }} />

                                            </div>
                                            <div className='ms-4'>
                                                <span id='log-span'>Avg. Price</span><br />
                                                <span id='log-span1'>1.2</span>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                                <section id="dunkles" class="tab-panel">
                                    <div className='row d-flex justify-content-center'>
                                        <div className='col-md-4 col-10 d-flex flex-row justify-content-md-center mt-3'>
                                            <div className=' d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={Ellipse37} style={{ position: "absolute", width: "50px" }} />
                                                <img src={linechart} style={{ position: " relative", width: "22px" }} />

                                            </div>
                                            <div className='ms-4'>
                                                <span id='log-span'>Number of Trades</span><br />
                                                <span id='log-span1'>1585</span>
                                            </div>
                                        </div>


                                        <div className='col-md-4 col-11 d-flex flex-row justify-content-md-center mt-3' >
                                            <div className=' d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={roadsign} style={{ width: "50px" }} />
                                                {/* <img src={linechart} style={{ position: " relative", width: "22px" }} /> */}

                                            </div>
                                            <div className='ms-md-4 ms-3'>
                                                <span id='log-span'>Total Volume</span><br />
                                                <span id='log-span1'>201,211</span>
                                            </div>
                                        </div>


                                        <div className='col-md-4 col-10 d-flex flex-row justify-content-md-center mt-3'>
                                            <div className=' d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={Ellipse39} style={{ position: "absolute", width: "50px" }} />
                                                <img src={discount} style={{ position: " relative", width: "22px" }} />

                                            </div>
                                            <div className='ms-4'>
                                                <span id='log-span'>Avg. Price</span><br />
                                                <span id='log-span1'>1.2</span>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                                <section id="All" class="tab-panel">
                                    <div className='row d-flex justify-content-center'>
                                        <div className='col-md-4 col-10 d-flex flex-row justify-content-md-center mt-3'>
                                            <div className=' d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={Ellipse37} style={{ position: "absolute", width: "50px" }} />
                                                <img src={linechart} style={{ position: " relative", width: "22px" }} />

                                            </div>
                                            <div className='ms-4'>
                                                <span id='log-span'>Number of Trades</span><br />
                                                <span id='log-span1'>1585</span>
                                            </div>
                                        </div>


                                        <div className='col-md-4 col-11 d-flex flex-row justify-content-md-center mt-3' >
                                            <div className=' d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={roadsign} style={{ width: "50px" }} />
                                                {/* <img src={linechart} style={{ position: " relative", width: "22px" }} /> */}

                                            </div>
                                            <div className='ms-md-4 ms-3'>
                                                <span id='log-span'>Total Volume</span><br />
                                                <span id='log-span1'>201,211</span>
                                            </div>
                                        </div>


                                        <div className='col-md-4 col-10 d-flex flex-row justify-content-md-center mt-3'>
                                            <div className=' d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                                <img src={Ellipse39} style={{ position: "absolute", width: "50px" }} />
                                                <img src={discount} style={{ position: " relative", width: "22px" }} />

                                            </div>
                                            <div className='ms-4'>
                                                <span id='log-span'>Avg. Price</span><br />
                                                <span id='log-span1'>1.2</span>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center pb-4' >
                    <div className='col-12 ' >
                        <div className="tabs-container">
                            <div className="tabs">
                                <input type="radio" name="tabs" id="tab-1" checked={secondcolorChange == "recent" ? true: false} />
                                <label for="tab-1" style={{ color: secondcolorChange == "recent" ? "white" : "#66676A" }} onClick={()=>secondchangeTab("recent")}>Recent</label>

                                <input type="radio" name="tabs" id="tab-2" checked={secondcolorChange == "Top" ? true: false}/>
                                <label for="tab-2" style={{ color: secondcolorChange == "Top" ? "white" : "#66676A" }} onClick={()=>secondchangeTab("Top")}>Top 50 (24h)</label>

                                <input type="radio" name="tabs" id="tab-3"  checked={secondcolorChange == "Mylog" ? true: false}/>
                                <label for="tab-3" style={{ color: secondcolorChange == "Mylog" ? "white" : "#66676A" }} onClick={()=>secondchangeTab("Mylog")}>My Log (0)</label>
                                <div className="tab scroll-tab">
                                <table className="table table-borderless table-responsive table-log p-3">
                                    <thead style={{ borderBottom: "3px solid #32333E" }}>
                                        <tr>
                                            <th scope="col" className='text-start log-table-tr'>Card</th>
                                            <th scope="col" className='text-start log-table-tr'>Buyer</th>
                                            <th scope="col" className='text-start log-table-tr'>Seller</th>
                                            <th scope="col" className='text-start log-table-tr'>Price</th>
                                            <th scope="col" className='text-end log-table-tr'>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className='m-3 '>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3} className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3} className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                </div>
                                <div className="tab scroll-tab">
                                <table className="table table-borderless table-responsive table-log p-3">
                                    <thead style={{ borderBottom: "3px solid #32333E" }}>
                                        <tr>
                                            <th scope="col" className='text-start log-table-tr'>Card</th>
                                            <th scope="col" className='text-start log-table-tr'>Buyer</th>
                                            <th scope="col" className='text-start log-table-tr'>Seller</th>
                                            <th scope="col" className='text-start log-table-tr'>Price</th>
                                            <th scope="col" className='text-end log-table-tr'>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className='m-3 '>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3} className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3} className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                </div>
                                <div className="tab scroll-tab">
                                <table className="table table-borderless table-responsive table-log p-3">
                                    <thead style={{ borderBottom: "3px solid #32333E" }}>
                                        <tr>
                                            <th scope="col" className='text-start log-table-tr'>Card</th>
                                            <th scope="col" className='text-start log-table-tr'>Buyer</th>
                                            <th scope="col" className='text-start log-table-tr'>Seller</th>
                                            <th scope="col" className='text-start log-table-tr'>Price</th>
                                            <th scope="col" className='text-end log-table-tr'>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className='m-3 '>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3} className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3}  className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>
                                        <tr className='log-tr-box mt-2 '>
                                            <td className='text-start'><img src={image3} className="log-image-size"/></td>
                                            <td className='log-text-td pt-4'>0x64F5...7895</td>
                                            <td className='log-text-td pt-4'>0xfAea...8888</td>
                                            <td className='log-text-td pt-4'> <img src={roadsign} style={{ width: "30px" }} /> 40.2 ROAD</td>
                                            <td className='text-end '>
                                                <span className='log-text-td'>2022.02.03</span><br/>
                                                <span className='log-text-td'>17:24:12</span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionLog