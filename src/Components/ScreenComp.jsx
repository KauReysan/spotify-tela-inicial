import React from "react";
import "./ScreenComp.css";

import { Podcasts } from "./Podcasts";
import { FavArtists } from "./FavArtists";

import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const ScreenComp = () => {

    const artist = {
        name: "Metalica",
        img: "metalica.jpeg"
    }

    return(
    <div className="screen-comp-container">
        <div className="s-c-top">
            <div className="s-c-left-area">
                <NavigateBeforeIcon className="arrow" style={{width: "30px", height: "30px"}}/>
                <ChevronRightIcon className="arrow" style={{width: "30px", height: "30px"}}/>
            </div>
            <div className="s-c-right-area">
                <NotificationsNoneOutlinedIcon className="right-icons" style={{width: "23px", height: "23px"}}/>
                <Groups2OutlinedIcon className="right-icons" style={{width: "23px", height: "23px"}}/>
                <PersonOutlineOutlinedIcon className="right-icons" style={{width: "23px", height: "23px"}}/>
            </div>
        </div>
        <div className="s-c-middle">
            <h1>Bom dia</h1>
            <div className="s-c-options">
                <div className="s-c-option">
                    <FavoriteIcon className="op-icon"/>
                    <p>Músicas Curtidas</p>
                </div>
                <div className="s-c-option">
                    <img src={artist.img} alt="" />
                    <p>Metalica</p>
                </div>
            </div>
        </div>
        <div className="s-c-category">
            <h2>Spotify originais podcasts</h2>
            <div className="s-c-podcasts-area">
                <Podcasts/>
                <Podcasts/>
                <Podcasts/>
                <Podcasts/>
                <Podcasts/>
            </div>
            <h2>Seus artistas favoritos</h2>
            <div className="s-c-favartists-area">
                <FavArtists/>
                <FavArtists/>
                <FavArtists/>
                <FavArtists/>
                <FavArtists/>
            </div>
        </div>
    </div>
    );
}