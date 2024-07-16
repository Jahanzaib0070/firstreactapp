import React from "react";
import NetflixCard from "./NetflixCard";
import "./index.css";
import Ndata from "./Ndata";

function NetflixMain(){
    return(
        <div className='Main'>
            <h1>Top 4 Netflix Series</h1>
            <div className="Main-2">
                
                {Ndata.map((val) => {
                    return(
                        <NetflixCard 
                        key= {val.id}
                        imgSrc= {val.imgSrc}
                        seriesTitle= {val.seriesTitle}
                        seriesName= {val.seriesName}
                        seriesLink= {val.seriesLink}
                        />
                    )
            })}
            </div>
        </div>
    );
}

export default NetflixMain;