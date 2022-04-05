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
import Marketplace from "./Marketplace";

function MarketplaceHome() {
  return (
    <div className="imagePool">
      <div className="container">
        <div className="col-12">
          <div className="row d-flex justify-content-center justify-content-around">
            <div className="col-lg-7 d-flex justify-content-right">
              <ButtonSelect />
            </div>
            <div className="col-1 boxmarket d-flex justify-content-right align-items-center">
              <HiShoppingCart size={30} style={{ color: "white" }} />
            </div>
            <div className="col-lg-2 col-md-3 col-5 d-flex justify-content-end">
              <button className="btn poolbtn">CONNECT</button>
            </div>
          </div>
          <Marketplace />
        </div>
      </div>
    </div>
  );
}

export default MarketplaceHome;
