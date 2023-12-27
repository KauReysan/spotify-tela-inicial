import react, { useState } from "react";
import "./ArtistsLibrary.css"

const ArtistsLibrary = () => {

    const [dataArtists, setDataArtists] = useState([
        {
            id: 2,
            name: "AC/DC",
            type: "Artista",
            img: "/public/acdc.jpeg"
        },
        {
            id: 1,
            name: "Metalica",
            type: "Artista",
            img: "/public/metalica.jpeg"
        }
    ]);

    return(
        <div className="artists-container">
                    <div className="artists">
                        {
                            dataArtists.map((item) => (
                            <div className="artist" key={item.id}>
                                <div className="artist-img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="text-container">
                                    <p id="title">{item.name}</p>
                                    <p id="type" style={{color: "#b3b3b3"}}>{item.type}</p>
                                </div>
                            </div>
                            ))
                        }
                    </div>
            </div>            
    );
}

export default ArtistsLibrary;