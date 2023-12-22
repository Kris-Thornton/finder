import React from "react";
import logo from '../logo.svg';

function Header()  {
    return (
        <>
         <section >
            <div className={'header'}>
                <h3>Home</h3>
                <h3>Profile</h3>
                <h3>Account</h3>
                <h3>Settings</h3>
                <h3>Find-ER Map</h3>
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