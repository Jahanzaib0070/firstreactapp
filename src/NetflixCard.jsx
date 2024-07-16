import React from "react";
import "./index.css";

function NetflixCard(props){
    return(
        <>
            <div className="Cards">
                <img src={props.imgSrc} alt= "Netflix pic" className="card-image"/>
                <div className="card_info">
                    <span className="card_cateogory">{props.seriesTitle}</span>
                    <h3 className="card_title">{props.seriesName}</h3>
                    <a href={props.seriesLink} target="">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default NetflixCard;