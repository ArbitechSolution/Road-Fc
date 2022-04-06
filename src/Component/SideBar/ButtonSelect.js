import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./ButtonSelect.css";

function ButtonSelect() {

  return (
    <div className=" row d-flex justify-content-center align-items-center">
      <div className="col-12 ">
      <ul className="nav nav-pills mb-3  navSection" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
        <NavLink to="/marketPlace"
            className={({ isActive }) => (isActive ? 'btnMarketPlace nav-link active' : 'btnMarketPlace nav-link')}
            >
            Marketplace
        </NavLink>
        </li>
        <li className="nav-item" role="presentation">
        <NavLink to="/marketPlaceSell"
            className={({ isActive }) => (isActive ? 'btnSell nav-link active' : 'btnSell nav-link')}
            >
            Sell
        </NavLink>
        </li>
        <li className="nav-item" role="presentation">
        <NavLink to="/marketPlaceList"
            className={({ isActive }) => (isActive ? 'btnListed nav-link active' : 'btnListed nav-link')}
            >
            Listed
      </NavLink>
        </li>
        <li className="nav-item" role="presentation">
        <NavLink to="/transactionlog"
            className={({ isActive }) => (isActive ? 'btnTransaction nav-link active' : 'btnTransaction nav-link')}
            >
            Transaction Log
        </NavLink>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default ButtonSelect;
