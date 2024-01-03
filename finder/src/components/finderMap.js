import React from "react";
import { NavBar } from "../App";
import DigitalMap from '../Digital-map-image.jpg';


function FinderMap() {
    return (
        <><NavBar />

        
        <div className="background">
            <h1>
                Finder Map page
            </h1>
            <p>
                The page will show map coordinations of registered devices connected to profiles on the account. Such as phone, Tag, bracelet ect for child, elderly or pet.
            </p>
            <img src={DigitalMap} className="map"/>
            
        </div>
        </>
    )
}

export default FinderMap;