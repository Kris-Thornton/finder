import React from "react";
import logo from '../logo.svg';

function Header()  {
    return (
        <>
         <section >
            <div className={'header'}>
                <h3 className={'headerWord'}>Home</h3>
                <h3 className={'headerWord'}>Profile</h3>
                <h3 className={'headerWord'}>Account</h3>
                <h3 className={'headerWord'}>Settings</h3>
                <h3 className={'headerWord'}>Find-ER Map</h3>
            </div>
        </section>


        <div className={'App-header'}>
      <header className={'title-header'}>
        <h1>FIND-</h1><h1 className={'title-backend'}>ER</h1>
      </header>
      
      <img src={logo} className="App-logo" alt="logo" />
    </div>
        </>
       
    )
    
}

export default Header;