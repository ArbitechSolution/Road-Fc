
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Component/navbar/Navbars';
import RoadPool from './Component/Road-Pool/RoadPool';
import Footer from './Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Presale from './Component/Presale/Presale';
import Staking from "./Component/Staking-Point/Staking"
import Mint from './Component/Mint/Mint';
import Breed from './Component/Breed/Breed';
import MyNFTs from './Component/MY-NFTs/MyNFTs';
import NFTstaking from './Component/NFT-Staking/NFTstaking';
import MysteryBox from './Component/Mystery-Box/MysteryBox';
import Marketplace from './Component/NFT-MarketPlace/Marketplace';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<RoadPool />} />
          <Route exact path="/presale" element={<Presale />} />
          <Route exact path='/Staking' element={<Staking />} />
          <Route exact path='/Mint' element={<Mint />} />
          <Route exact path="/breed" element={<Breed />} />
          <Route exact path="/MyNFTs" element={<MyNFTs />} />
          <Route exact path='/NFTstaking' element={<NFTstaking />} />
          <Route exact path='/MysteryBox' element={<MysteryBox />} />
          <Route exact path='/marketplace' element={<Marketplace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
