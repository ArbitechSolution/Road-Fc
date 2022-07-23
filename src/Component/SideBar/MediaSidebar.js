import React, { useEffect, useState, useLayoutEffect } from 'react'
import Growth from "../../Assets/Growth.png"
import Frame2 from "../../Assets/Frame 2.png"
import Frame3 from "../../Assets/Frame 3.png"
import Box from "../../Assets/Box.png"
import nft1 from "../../Assets/nft 1.png"

import Form from 'react-bootstrap/Form'
import marketplace1 from "../../Assets/marketplace 1.png"
import Group593 from "../../Assets/Group 593.png"
import { Link, NavLink, useNavigate, useHistory } from "react-router-dom";
import VectorDown from "../../Assets/VectorDown.png"
import "./SideBar.css"
import { IoIosArrowDown } from 'react-icons/io';
import Group480 from "../../Assets/Group 480.png"
function MediaSidebar() {
  const navigate = useNavigate();
  let [dropdown, setDropDown] = useState(false)
  let [updateDropDown, setUpdateDropDown] = useState({
    name: "Staking & Point",
    img: Group480
  })
  let newarry = [{
    name: "ROAD POOL",
    img: Group480
  }, {
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
    img: Box
  },
  {
    name: "NFT Staking",
    img: nft1
  },
    ,
  {
    name: "My NFT",
    img: Group593
  }
  ]

  const changeAutoNavgate = () => {
    let path = window.location.pathname
    path = path.split('/')
    console.log("path", path[1]);
    if (path[1] == '') {
      setUpdateDropDown({
        name: "ROAD POOL",
        img: Group480
      })
    } else if (path[1] == 'Staking') {
      setUpdateDropDown({
        name: "Staking & Point",
        img: Growth
      })
    } else if (path[1] == "mint") {
      setUpdateDropDown({
        name: "Mint",
        img: Frame2
      })
    } else if (path[1] == "breed") {
      setUpdateDropDown({
        name: "Breed",
        img: Frame3
      })
    } else if (path[1] == "MysteryBox") {
      setUpdateDropDown({
        name: "Mystery Box",
        img: Box
      })
    } else if (path[1] == "NFTstaking") {
      setUpdateDropDown({
        name: "NFT Staking",
        img: nft1
      })
    }
    else if (path[1] == "MyNFTs") {
      setUpdateDropDown({
        name: "My NFT",
        img: Group593
      })
    }
  }
  useLayoutEffect(() => {
    changeAutoNavgate()
  }, [])
  const changeNavigate = (image, name) => {
    setUpdateDropDown({
      name: name,
      img: image
    })
    if (name == "Staking & Point") {
      navigate('/Staking')
    } else if (name == "Mint") {
      navigate('/mint')
    } else if (name == "Breed") {
      navigate('/breed')
    } else if (name == "Mystery Box") {
      navigate('/MysteryBox')
    } else if (name == "NFT Staking") {
      navigate('/NFTstaking')
    }
    else if (name == "My NFT") {
      navigate('/MyNFTs')
    } else if (name == "ROAD POOL") {
      navigate('/')
    }
  }

  return (
    <div className=' pt-5' style={{ backgroundColor: "#111217" }}>

      <div className=' d-flex justify-content-center'>
        <div className='col-11 staking-coll' style={{}} >

          <div className="lang-select" id="newlocale"
            onClick={() => setDropDown(!dropdown)}>
            <img src={VectorDown} className="VectorDown-image" />
            <button className="btn-select"><ul><li><img src={updateDropDown.img} /> <span className='ms-sm-3 mt-4'>{updateDropDown.name}</span></li></ul> </button>
            <div className={dropdown ? "b" : "b1"}
            >
              <ul id="a">
                {newarry.map((item, index) => {
                  return <>
                    <li
                      onClick={() => changeNavigate(item.img, item.name)}
                    ><img src={item.img} /> {item.name}</li>
                  </>
                })}

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaSidebar