import React, { useState } from 'react'
import "./Marketplace.css"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import circle from "../../Assets/circle.png"
import { makeStyles } from "@material-ui/core/styles";

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
const useStyles = makeStyles(theme => ({
    root: {
        width: 270
    },
    margin: {
        height: theme.spacing(3)
    },
    thumb: {
        background: "#F92D1E",
        "&~&": {
            background: "#F92D1E"
        }
    },
    mark: {
        background: "#F92D1E"
    },
    rail: {
        background: "linear-gradient(to right, #821C15, #821C15 50%, #821C15 50%, #821C15);"
    },
    track: {
        background: "#FF5043"
    },
    valueLabel: {
        "&>*": {
            // backgr.ound: "#821C15"
        }
    }
}));
function Marketplace() {

    const classes = useStyles();
    const [value, setValue] = useState([0, 100]);

    const onChange = (e, value) => {
      const [min, max] = value;
      if (max >= 50 && min <= 50 && max !== min) {
        setValue(value);
      }
    };
    // const [value, setValue] = useState([0, 100]);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    // const classes = useStyles();
    return (
        <div className='imagePool'>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-center pt-5 pb-3'>
                    <div className='col-lg-3 col-md-5'>
                        <div className='row'>
                            <div className='col-12'>
                                <p className='market-span text-start'>FILTERS</p>
                                <div className='col-11 mt-2' >
                                    <p style={{ border: "1px solid #292C38" }}></p>
                                </div>
                                <p className='market-span1 text-start'>Fighters</p>

                                <div className='text-start'>
                                    <form>
                                        <input type="checkbox" id="Trainer" name="Trainer" value="Trainer" />
                                        <label for="Trainer" className='checkinput'>&nbsp;&nbsp;Trainer</label><br />
                                        <input type="checkbox" id="Frankenstein" name="Frankenstein" value="Frankenstein" />
                                        <label for="Frankenstein" className='checkinput'>&nbsp;&nbsp;Frankenstein</label><br />
                                        <input type="checkbox" id="Ape" name="Ape" value="Ape" />
                                        <label for="Ape" className='checkinput'>&nbsp;&nbsp;Ape</label><br />
                                        <input type="checkbox" id="Pepe" name="Pepe" value="Pepe" />
                                        <label for="Pepe" className='checkinput'>&nbsp;&nbsp;Pepe</label><br />
                                        <input type="checkbox" id="Wolf" name="Wolf" value="Wolf" />
                                        <label for="Wolf" className='checkinput'>&nbsp;&nbsp;Wolf</label><br />
                                        <input type="checkbox" id="Alien" name="Alien" value="Alien" />
                                        <label for="Alien" className='checkinput'>&nbsp;&nbsp;Alien</label><br />
                                        <input type="checkbox" id="Vampir" name="Vampir" value="Vampir" />
                                        <label for="Vampir" className='checkinput'>&nbsp;&nbsp; Vampire</label><br />
                                    </form>
                                </div>
                                <div className='col-11 mt-2' >
                                    <p style={{ border: "1px solid #292C38" }}></p>
                                </div>
                                <p className='market-span1 text-start'>Rarity</p>
                                <div className='text-start d-flex justify-content-between'>
                                    <form >
                                        <input type="checkbox" id="Common" name="Common" value="Common" />
                                        <label for="Common" className='checkinput'>&nbsp;&nbsp;Common</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="checkbox" id="Uncommon" name="Uncommon" value="Frankenstein" />
                                        <label for="Uncommon" className='checkinput'>&nbsp;&nbsp;Uncommon</label><br />
                                        <input type="checkbox" id="Rare" name="Rare" value="Rare" />
                                        <label for="Rare" className='checkinput'>&nbsp;&nbsp;Rare</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="checkbox" id="Epic" name="Epic" value="Epic" />
                                        <label for="Epic" className='checkinput'>&nbsp;&nbsp;Epic</label><br />
                                        <input type="checkbox" id="Legendary" name="Legendary" value="Legendary" />
                                        <label for="Legendary" className='checkinput'>&nbsp;&nbsp;Legendary</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="checkbox" id="Mythic" name="Mythic" value="Mythic" />
                                        <label for="Mythic" className='checkinput'>&nbsp;&nbsp;Mythic</label><br />

                                    </form>
                                </div>
                                <div className='col-11 mt-2' >
                                    <p style={{ border: "1px solid #292C38" }}></p>
                                </div>
                                <p className='market-span1 text-start'>Price</p>
                                <div className='row'>
                                    <div className='col-5'>
                                        <form>
                                            <input type='number' class="form-control" placeholder='From' />
                                        </form>
                                    </div>
                                    <div className='col-1 d-flex justify-content-between align-items-center'>
                                        <img src={circle} />
                                    </div>
                                    <div className='col-5'>
                                        <form>
                                            <input type='number' class="form-control" placeholder='To' />
                                        </form>
                                    </div>
                                </div>
                                <div className='col-11 mt-3' >
                                    <p style={{ border: "1px solid #292C38" }}></p>
                                </div>
                                <p className='market-span1 text-start'>Level</p>
                                <div className=''>
                                    <Slider
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
                                    />
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
                </div>
            </div>
        </div>
    )
}

export default Marketplace