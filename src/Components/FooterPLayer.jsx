import React, { useState } from "react";
import "./FooterPlayer.css"

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RadioIcon from '@mui/icons-material/Radio';
import MicNoneIcon from '@mui/icons-material/MicNone';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import DevicesIcon from '@mui/icons-material/Devices';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import LoopIcon from '@mui/icons-material/Loop';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const FooterPLayer = () => {

    const [repIcon, setRepIcon] = useState(false)

    const song = {
        name: "Walk",
        artist: "Foo Fighters",
        img: "/public/wl.jpeg"
    }

    return(
        <div className="container-player">
            <div className="first-part">
                <div className="song-area">
                    <img src={song.img} alt="" />
                    <div className="s-g-text-area">
                        <p id="musica-name">{song.name}</p>
                        <p id="artist-name">{song.artist}</p>
                    </div>
                    <div className="s-g-icon-area" onClick={e => setRepIcon(!repIcon)}>
                        {repIcon ? <FavoriteIcon style={{width: "20px", height: "20px", color: "rgb(33, 153, 33)"}}/> : <FavoriteBorderOutlinedIcon style={{width: "20px", height: "20px"}}/>}
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="middle-top-area">
                <ShuffleIcon style={{width: "27px", height: "27px", margin: "0 5px"}}/>
                <SkipPreviousIcon style={{width: "27px", height: "27px", margin: "0 5px"}}/>
                <PauseCircleIcon style={{width: "40px", height: "40px", margin: "0 5px"}}/>
                <SkipNextIcon style={{width: "27px", height: "27px", margin: "0 5px"}}/>
                <LoopIcon style={{width: "27px", height: "27px", margin: "0 5px"}}/>
                </div>
                <div className="middle-input-area">
                    <p style={{color: "#b3b3b3"}}>00:00</p>
                    <input type="range" />
                    <p style={{color: "#b3b3b3"}}>00:00</p>
                </div>
            </div>
            <div className="last-part">
                <RadioIcon/>
                <MicNoneIcon/>
                <MicrowaveIcon/>
                <DevicesIcon/>
                <VolumeUpIcon/>
                <OpenInFullIcon/>
            </div>
        </div>
    );
}
