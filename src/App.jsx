import React from "react";
import "./App.css";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const App = () => {
  return(
    <div className="container">

      <div className="container-aside">

            <div className="top-menu">
              <div className="top-menu-inicio">
                <div className="tm-btn">
                  <HomeOutlinedIcon style={{color: "#b3b3b3", width: "30px", height: "30px"}}/>
                </div>
                  <p style={{color: "#b3b3b3"}}>Início</p>
              </div>
              <div className="top-menu-buscar">
                <div className="tm-btn">
                  <SearchOutlinedIcon style={{color: "#b3b3b3", width: "30px", height: "30px"}}/> 
                </div>
                  <p style={{color: "#b3b3b3"}}>Buscar</p>
              </div>
            </div>

            <div className="aside-menu">
                  <div className="aside-m-top">
                      <div className="your-library">
                        <div className="your-l-btn-1">
                        <TurnedInNotOutlinedIcon style={{color: "#b3b3b3", width: "30px", height: "30px"}}/>
                        <p style={{color: "#b3b3b3"}}>Sua Biblioteca</p>
                        </div>
                        <div className="else-btn">
                            <div className="your-l-btn-else">
                            <AddOutlinedIcon style={{color: "#b3b3b3", width: "25px", height: "25px"}}/>
                            </div>
                            <div className="your-l-btn-else">
                            <ArrowForwardOutlinedIcon style={{color: "#b3b3b3", width: "25px", height: "25px"}}/>
                            </div>
                          </div>
                        </div>
                      <div className="tags">
                        <p>something</p>
                        <p>something</p>
                        <p>something</p>
                      </div>
                      <div className="library-area">
                        <div className="search">

                        </div>
                        <div className="artists-albums">

                        </div>
                      </div>
                  </div>
            </div>

      </div>

      <div className="container-screen">

      </div>
      <div className="container-footer-play">

      </div>

    </div>
  )
}

export default App;