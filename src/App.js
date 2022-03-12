
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Component/navbar/Navbars';
import RoadPool from './Component/Road-Pool/RoadPool';
import Footer from './Component/Footer/Footer';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<RoadPool />} />
          <Route exact path="/presale" element={<Presale />} />
          <Route exact path='/Staking' element={<Staking />} />
          <Route exact path='/Mint' element={<Mint />} />
          <Route exact path="/breed" element={<Breed />} />
          <Route exact path="/MyNFTs" element={<MyNFTs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
