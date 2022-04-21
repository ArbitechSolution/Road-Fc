import React,{useState} from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

import { BsTwitter,BsYoutube } from 'react-icons/bs';
import { FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { RiGithubLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
import "./navbars.css"
import roadfc from "../../Assets/roadfc-logo 1.png"
function Navbars() {


  return (
    <div className='navbariamge'>
            <div className='container' >
                <div className='row' >
                    <div className='col-12' >


                        <Navbar collapseOnSelect expand="lg" variant="dark">
                            {/* <Container> */}
                            {/* <Link to="/"> */}
                           <Navbar.Brand ><img src={roadfc} width="110px" /></Navbar.Brand>
                            {/* </Link> */}
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav >
                                    <Nav.Link className='fw-bold text1 '  href="#" onClick={() => { window.scrollTo(0, 0);}}>HOME</Nav.Link>
                                    <Nav.Link className='fw-bold text1'  href="#about" >TOKENOMICS</Nav.Link>
                                    <Nav.Link className='fw-bold text1'  href="#token" >ECOSYSTEM</Nav.Link>
                                   <Link to="/MyNFTs" style={{textDecoration: "none"}}> <Nav.Link  className='fw-bold text1' href="#features">NFTs CARD</Nav.Link></Link>
                                    <Nav.Link className='fw-bold text1'  href="#nft" >GAME</Nav.Link>
                                    <Link to="/" style={{textDecoration: "none"}}> <Nav.Link  className='fw-bold text1' href="/" >ROAD POOL</Nav.Link></Link>
                                    <Nav.Link className='fw-bold text1' href="#roadmap" >ROADMAP</Nav.Link>
                                    <Link to="/presale" style={{textDecoration: "none"}}><Nav.Link  className='fw-bold text1' href="#presale" >PRESALE</Nav.Link></Link>
                                    {/* <Nav.Link className='fw-bold text1' href="#global" >GLOBAL</Nav.Link> */}
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav className='flex-row justify-content-evenly'>
                                    <Nav.Link href="" ><FaTelegramPlane size={28} className="icon"  style={{color: "#BC5A5A"}}/></Nav.Link>
                                    <Nav.Link href="" ><BsTwitter size={28} className="icon" style={{color: "#BC5A5A"}}/></Nav.Link>
                                    <Nav.Link href="" ><RiGithubLine size={28} className="icon" style={{color: "#BC5A5A"}}/></Nav.Link>
                                    <Nav.Link href="" ><BsYoutube size={28} className="icon" style={{color: "#BC5A5A"}}/></Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                            {/* </Container> */}
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbars