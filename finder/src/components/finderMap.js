import React from "react";
import { NavBar } from "../App";
import DigitalMap from '../images/Digital-map-image.jpg';
import '../componentCss/finderPage.css';

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
            <img className="maps" src={DigitalMap} />
            
        </div>
        </>
    )
}

export default FinderMap;