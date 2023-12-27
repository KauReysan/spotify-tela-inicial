import React from "react";
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

export const FooterPLayer = () => {
    return(
        <div className="container-player">
            <div className="first-part">
                <FavoriteIcon/>
            </div>
            <div className="middle">
                <ShuffleIcon/>
                <SkipPreviousIcon/>
                <PauseCircleIcon/>
                <SkipNextIcon/>
                <LoopIcon/>
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