import React, { useState } from "react";
import "./Marketplace.css";
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
import circle from "../../Assets/circle.png";
import { HiShoppingCart } from "react-icons/hi";
// import { makeStyles } from "@material-ui/core/styles";
import { ToggleButton, ButtonGroup } from "react-bootstrap";
import image2 from "../../Assets/image 2.png";
import Frame26 from "../../Assets/Frame 26.png";
import Rectangle572 from "../../Assets/Rectangle 572.png";
import Vector22 from "../../Assets/Vector22.png";
import Vector33 from "../../Assets/Vector33.png";
import tiger10 from "../../Assets/tiger 1 10.png";
import tiger11 from "../../Assets/tiger 1 11.png";
import tiger12 from "../../Assets/tiger 1 12.png";
import tiger13 from "../../Assets/tiger 1 13.png";
import { Link, NavLink } from "react-router-dom";
import ButtonSelect from "../SideBar/ButtonSelect";

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
// import getMuiTheme from 'material-ui/styles';
// import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Slider from "@material-ui/core/Slider";
// function valuetext(value) {
//     return `${value}°C`;
// }
// const muiTheme = getMuiTheme({
//     slider: {
//       trackColor: "yellow",
//       selectionColor: "red"
//     }
//   })

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: 260
//     },
//     margin: {
//         height: theme.spacing(3)
//     },
//     thumb: {
//         background: "#F92D1E",
//         "&~&": {
//             background: "#F92D1E"
//         }
//     },
//     mark: {
//         background: "#F92D1E"
//     },
//     rail: {
//         background: "linear-gradient(to right, #821C15, #821C15 50%, #821C15 50%, #821C15);"
//     },
//     track: {
//         background: "#FF5043"
//     },
//     valueLabel: {
//         "&>*": {
//             // backgr.ound: "#821C15"
//         }
//     }
// }));
const  Marketplace=()=> {
  // const classes = useStyles();
  // const [value, setValue] = useState([0, 100]);

  // const onChange = (e, value) => {
  //     const [min, max] = value;
  //     if (max >= 50 && min <= 50 && max !== min) {
  //         setValue(value);
  //     }
  // };
  // const [value, setValue] = useState([0, 100]);

  // const handleChange = (event, newValue) => {
  //     setValue(newValue);
  // };
  // const classes = useStyles();

  // let [checked, setChecked] = useState(false);
  // let [radioValue, setRadioValue] = useState('1');
  // const radios = [
  //     { name: 'Marketplace', value: '1' },
  //     { name: 'Sell', value: '2' },
  //     { name: 'Listed', value: '3' },
  //     { name: 'Transaction Log', value: '4' },
  // ];
  return (
    <div className="imagePool">
      <div className="container">
        <div className="row d-flex justify-content-between pt-5 pb-3">
          <div className="col-lg-3 col-md-5">
            <div className="row">
              <div className="col-12">
                <p className="market-span text-start">FILTERS</p>
                <div className="col-11 mt-2">
                  <p style={{ border: "1px solid #292C38" }}></p>
                </div>
                <p className="market-span1 text-start">Fighters</p>

                <div className="text-start">
                  <form>
                    <input
                      type="checkbox"
                      id="Trainer"
                      name="Trainer"
                      value="Trainer"
                    />
                    <label for="Trainer" className="checkinput">
                      &nbsp;&nbsp;Trainer
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      id="Frankenstein"
                      name="Frankenstein"
                      value="Frankenstein"
                    />
                    <label for="Frankenstein" className="checkinput">
                      &nbsp;&nbsp;Frankenstein
                    </label>
                    <br />
                    <input type="checkbox" id="Ape" name="Ape" value="Ape" />
                    <label for="Ape" className="checkinput">
                      &nbsp;&nbsp;Ape
                    </label>
                    <br />
                    <input type="checkbox" id="Pepe" name="Pepe" value="Pepe" />
                    <label for="Pepe" className="checkinput">
                      &nbsp;&nbsp;Pepe
                    </label>
                    <br />
                    <input type="checkbox" id="Wolf" name="Wolf" value="Wolf" />
                    <label for="Wolf" className="checkinput">
                      &nbsp;&nbsp;Wolf
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      id="Alien"
                      name="Alien"
                      value="Alien"
                    />
                    <label for="Alien" className="checkinput">
                      &nbsp;&nbsp;Alien
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      id="Vampir"
                      name="Vampir"
                      value="Vampir"
                    />
                    <label for="Vampir" className="checkinput">
                      &nbsp;&nbsp; Vampire
                    </label>
                    <br />
                  </form>
                </div>
                <div className="col-11 mt-2">
                  <p style={{ border: "1px solid #292C38" }}></p>
                </div>
                <p className="market-span1 text-start">Rarity</p>
                <div className="text-start d-flex justify-content-between">
                  <form>
                    <input
                      type="checkbox"
                      id="Common"
                      name="Common"
                      value="Common"
                    />
                    <label for="Common" className="checkinput">
                      &nbsp;&nbsp;Common
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="checkbox"
                      id="Uncommon"
                      name="Uncommon"
                      value="Frankenstein"
                    />
                    <label for="Uncommon" className="checkinput">
                      &nbsp;&nbsp;Uncommon
                    </label>
                    <br />
                    <input type="checkbox" id="Rare" name="Rare" value="Rare" />
                    <label for="Rare" className="checkinput">
                      &nbsp;&nbsp;Rare
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" id="Epic" name="Epic" value="Epic" />
                    <label for="Epic" className="checkinput">
                      &nbsp;&nbsp;Epic
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      id="Legendary"
                      name="Legendary"
                      value="Legendary"
                    />
                    <label for="Legendary" className="checkinput">
                      &nbsp;&nbsp;Legendary
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="checkbox"
                      id="Mythic"
                      name="Mythic"
                      value="Mythic"
                    />
                    <label for="Mythic" className="checkinput">
                      &nbsp;&nbsp;Mythic
                    </label>
                    <br />
                  </form>
                </div>
                <div className="col-11 mt-2">
                  <p style={{ border: "1px solid #292C38" }}></p>
                </div>
                <p className="market-span1 text-start">Price</p>
                <div className="row">
                  <div className="col-5">
                    <form>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="From"
                      />
                    </form>
                  </div>
                  <div className="col-1 d-flex justify-content-between align-items-center">
                    <img src={circle} />
                  </div>
                  <div className="col-5">
                    <form>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="To"
                      />
                    </form>
                  </div>
                </div>
                <div className="col-11 mt-3">
                  <p style={{ border: "1px solid #292C38" }}></p>
                </div>
                <p className="market-span1 text-start">Level</p>
                <div className="">
                  {/* <Slider
                                        classes={{
                                            thumb: classes.thumb,
                                            rail: classes.rail,
                                            track: classes.track,
                                            valueLabel: classes.valueLabel,
                                            mark: classes.mark
                                        }}
                                        valueLabelDisplay="auto"
                                        value={value}
                                        step={10}

                                        min={0}
                                        max={100}
                                        onChange={onChange}
                                    /> */}
                  {/* <Box sx={{ width: 270 }}>
                                        <Slider
                                            getAriaLabel={() => 'Temperature range'}
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                        />
                                    </Box> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className='row d-flex justify-content-center justify-content-around'>
                            <div className='col-lg-7 d-flex justify-content-left'>
                                <ButtonSelect />
                            </div>
                            <div className='col-1 boxmarket d-flex justify-content-left align-items-center' >
                                <HiShoppingCart size={30} style={{ color: "white" }} />
                            </div>
                            <div className='col-lg-3 col-md-3 col-5 d-flex justify-content-end' >
                                <button className='btn poolbtn'>CONNECT</button>
                            </div>
                        </div>
                        <div className='row mt-3 d-flex justify-content-center justify-content-around'>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <div className='d-flex flex-row justify-content-between align-items-center mb-2'>
                                    <span className='placespan'>Lv. 10</span>
                                    <span className='placespan1'><img src={Frame26} width="24px" /> 1</span>
                                </div>
                                <img src={image2} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>Alien</span>
                                    <span className='place-pp'>50 ROAD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='palce-h6'>Legendary</span>
                                    <span className='palce-h6'>20 USD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <div className='col-4'>
                                        <div className="d-grid gap-2 mt-4 mb-2">
                                            <button className='btn btnplace' size="lg">
                                                Buy
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-1 boxplace d-flex justify-content-center align-items-center mt-3' >
                                        <HiShoppingCart size={20} style={{ color: "white" }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <div className='d-flex flex-row justify-content-between align-items-center mb-2'>
                                    <span className='placespan'>Lv. 10</span>
                                    <span className='placespan1'><img src={Frame26} width="24px" /> 1</span>
                                </div>
                                <img src={tiger10} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>Alien</span>
                                    <span className='place-pp'>50 ROAD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='palce-h6'>Legendary</span>
                                    <span className='palce-h6'>20 USD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <div className='col-4'>
                                        <div className="d-grid gap-2 mt-4 mb-2">
                                            <button className='btn btnplace' size="lg">
                                                Buy
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-1 boxplace d-flex justify-content-center align-items-center mt-3' >
                                        <HiShoppingCart size={20} style={{ color: "white" }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <div className='d-flex flex-row justify-content-between align-items-center mb-2'>
                                    <span className='placespan'>Lv. 10</span>
                                    <span className='placespan1'><img src={Frame26} width="24px" /> 1</span>
                                </div>
                                <img src={tiger11} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>Alien</span>
                                    <span className='place-pp'>50 ROAD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='palce-h6'>Legendary</span>
                                    <span className='palce-h6'>20 USD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <div className='col-4'>
                                        <div className="d-grid gap-2 mt-4 mb-2">
                                            <button className='btn btnplace' size="lg">
                                                Buy
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-1 boxplace d-flex justify-content-center align-items-center mt-3' >
                                        <HiShoppingCart size={20} style={{ color: "white" }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <div className='d-flex flex-row justify-content-between align-items-center mb-2'>
                                    <span className='placespan'>Lv. 10</span>
                                    <span className='placespan1'><img src={Frame26} width="24px" /> 1</span>
                                </div>
                                <img src={tiger12} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>Alien</span>
                                    <span className='place-pp'>50 ROAD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='palce-h6'>Legendary</span>
                                    <span className='palce-h6'>20 USD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <div className='col-4'>
                                        <div className="d-grid gap-2 mt-4 mb-2">
                                            <button className='btn btnplace' size="lg">
                                                Buy
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-1 boxplace d-flex justify-content-center align-items-center mt-3' >
                                        <HiShoppingCart size={20} style={{ color: "white" }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <div className='d-flex flex-row justify-content-between align-items-center mb-2'>
                                    <span className='placespan'>Lv. 10</span>
                                    <span className='placespan1'><img src={Frame26} width="24px" /> 1</span>
                                </div>
                                <img src={tiger13} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>Alien</span>
                                    <span className='place-pp'>50 ROAD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='palce-h6'>Legendary</span>
                                    <span className='palce-h6'>20 USD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <div className='col-4'>
                                        <div className="d-grid gap-2 mt-4 mb-2">
                                            <button className='btn btnplace' size="lg">
                                                Buy
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-1 boxplace d-flex justify-content-center align-items-center mt-3' >
                                        <HiShoppingCart size={20} style={{ color: "white" }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <div className='d-flex flex-row justify-content-between align-items-center mb-2'>
                                    <span className='placespan'>Lv. 10</span>
                                    <span className='placespan1'><img src={Frame26} width="24px" /> 1</span>
                                </div>
                                <img src={tiger11} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>Alien</span>
                                    <span className='place-pp'>50 ROAD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='palce-h6'>Legendary</span>
                                    <span className='palce-h6'>20 USD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <div className='col-4'>
                                        <div className="d-grid gap-2 mt-4 mb-2">
                                            <button className='btn btnplace' size="lg">
                                                Buy
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-1 boxplace d-flex justify-content-center align-items-center mt-3' >
                                        <HiShoppingCart size={20} style={{ color: "white" }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <div className='d-flex flex-row justify-content-between align-items-center mb-2'>
                                    <span className='placespan'>Lv. 10</span>
                                    <span className='placespan1'><img src={Frame26} width="24px" /> 1</span>
                                </div>
                                <img src={image2} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>Alien</span>
                                    <span className='place-pp'>50 ROAD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='palce-h6'>Legendary</span>
                                    <span className='palce-h6'>20 USD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <div className='col-4'>
                                        <div className="d-grid gap-2 mt-4 mb-2">
                                            <button className='btn btnplace' size="lg">
                                                Buy
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-1 boxplace d-flex justify-content-center align-items-center mt-3' >
                                        <HiShoppingCart size={20} style={{ color: "white" }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 nft-boxx p-2 mt-3'>
                                <div className='d-flex flex-row justify-content-between align-items-center mb-2'>
                                    <span className='placespan'>Lv. 10</span>
                                    <span className='placespan1'><img src={Frame26} width="24px" /> 1</span>
                                </div>
                                <img src={tiger12} className="nfts-image " />
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='nfts-h6'>Alien</span>
                                    <span className='place-pp'>50 ROAD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center mt-3 '>
                                    <span className='palce-h6'>Legendary</span>
                                    <span className='palce-h6'>20 USD</span>
                                </div>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <div className='col-4'>
                                        <div className="d-grid gap-2 mt-4 mb-2">
                                            <button className='btn btnplace' size="lg">
                                                Buy
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-1 boxplace d-flex justify-content-center align-items-center mt-3' >
                                        <HiShoppingCart size={20} style={{ color: "white" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex flex-row justify-content-center justify-content-evenly mb-4 mt-4' >

                            <div className='col-1 d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
                                <img src={Rectangle572} style={{ position: "absolute" }} />
                                <img src={Vector22} style={{ position: " relative" }} />
                            </div>
                            <div className='col-lg-3 col-md-5 col d-flex flex-row align-items-center justify-content-evenly'>
                                <span className='MyCollectionspan'>Current</span>
                                <div className='bosCollection'>
                                    <span className='mycollectionsP '>1</span>
                                </div>
                                <span className='MyCollectionspan'>/3</span>
                            </div>

                            {/* <button className='btn '> */}
                            <div className='col-1 d-flex align-items-center justify-content-center ms-4' style={{ cursor: "pointer" }}>
                                <img src={Rectangle572} style={{ position: "absolute" }} />
                                <img src={Vector33} style={{ position: " relative" }} />
                            </div>
                            {/* </button> */}
                </div>
              </div>
            </div>
          </div>

        </div>
    //   </div>
    // </div>
  );
}

export default Marketplace;
