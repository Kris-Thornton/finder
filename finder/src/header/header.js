import React from "react";
import logo from '../logo.svg';

function Header()  {
    return (
        <div className={'App-header'}>
      <header className={'title-header'}>
        <h1>FIND-</h1><h1 className={'title-backend'}>ER</h1>
      </header>
      
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    )
    
}

export default Header;