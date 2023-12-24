import React from "react";
import "./Library.css";

import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PushPinIcon from '@mui/icons-material/PushPin';

export const Library = () => {
    return(
        <div className="library-container">
                <div className="first-sections">
                    <div className="liked-musics">
                        <div className="liked-icon">
                        <FavoriteIcon/>
                        </div>
                        <div className="text">
                         <p id="f-s-title">Músicas Curtidas</p>
                            <div className="legend">
                                <PushPinIcon style={{color: "green", width: "15px", height: "15px"}}/>
                                <p id="f-s-legend" style={{color: "#b3b3b3"}}>Playlist - 0 músicas</p>
                            </div>
                        </div>
                    </div>
                    <div className="episodes">
                        <div className="episodes-icon">
                            <BookmarkIcon style={{color: "greenyellow"}}/>
                        </div>
                        <div className="text">
                        <p id="f-s-title">Seus Episódios</p>
                            <div className="legend">
                                <PushPinIcon style={{color: "green", width: "15px", height: "15px"}}/>
                                <p id="f-s-legend" style={{color: "#b3b3b3"}}>Episódios salvos e baixados</p>
                            </div>
                        </div>
                    </div>
            </div>            
        </div>
    );
}