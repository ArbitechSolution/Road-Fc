import React,{useEffect} from 'react'
import Growth from "../../Assets/Growth.png"
import Frame2 from "../../Assets/Frame 2.png"
import Frame3 from "../../Assets/Frame 3.png"
import Box from "../../Assets/Box.png"
import nft1 from "../../Assets/nft 1.png"
// import webroukCustomSelect from "https://cdn.skypack.dev/webrouk-custom-select@latest";
// import webroukCustomSelect from "https://cdn.skypack.dev/webrouk-custom-select@latest";
import Form from 'react-bootstrap/Form'
import marketplace1 from "../../Assets/marketplace 1.png"
import Group593 from "../../Assets/Group 593.png"
import { Link, NavLink, useNavigate, useHistory } from "react-router-dom";
import VectorDown from "../../Assets/VectorDown.png"
import "./SideBar.css"
import { IoIosArrowDown } from 'react-icons/io';
function MediaSidebar() {
  const navigate = useNavigate();

  let newarry = [{
    name: "Staking & Point",
    img: Growth
  },
  {
    name: "Mint",
    img: Frame2
  },
  {
    name: "Breed",
    img: Frame3
  },
  {
    name: "Mystery Box",
    img: Frame3
  },
  {
    name: "NFT Staking",
    img: Frame3
  }, {
    name: "NFT Market",
    img: marketplace1
  },
  {
    name: "My NFT",
    img: Group593
  }
  ]
  const changeAutoNavgate = () => {
    let path = window.location.pathname
    path = path.split('/')
    console.log("path", path[1]);
    if(path[1]==''){
      let element =   document.getElementById("newlocale");
      element.value = "/";
    }else{
       let element = document.getElementById("newlocale");
       element.value =  `/${path[1]}`;
    }
  }
  useEffect(()=>{
    changeAutoNavgate()
  },[])
  const changeNavigate = (event) => {
    navigate(event.target.value)
  }
  return (
    <div className=' pt-5' style={{backgroundColor: "#111217"}}>

   <div className='row d-flex justify-content-center'>
      <div className='col-11 staking-coll'  style={{}}>




      <div className='form-group ' >

        <img src={VectorDown} className="VectorDown-image"/>
        <select id="newlocale" className='form-select selector' aria-label="Default select example"
          onChange={(event) => changeNavigate(event)}
          required

        >
            <option value="/">ROAD POOL</option>
          <option value="/Staking"
style={{width: "200px"}}
          >Staking & Point</option>
          <option value="/Mint">Mint</option>
          <option value="/breed">Breed</option>
          <option value="/MysteryBox">Mystery Box</option>
          <option value="/NFTstaking">NFT Staking</option>
          <option value="/marketplace">NFT Market</option>
          <option value="/MyNFTs">My NFT</option>
        </select>

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
             </div>
    </div>
  )
}

export default MediaSidebar