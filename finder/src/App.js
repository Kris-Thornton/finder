import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logoMain from './images/logoMain.svg.png'
import './App.css';
import Profile from './components/profile';
import Account from './components/account';
import Settings from './components/settings';
import FinderMap from './components/finderMap';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <NavBar />} /> 
          <Route path='/profile' element={ <Profile />} />
          <Route path='/account' element={ <Account />} />
          <Route path='/settings' element={ <Settings />} />
          <Route path='/finderMap' element={ <FinderMap />} />
      </Routes>
    </BrowserRouter>
  )
}


export function NavBar() {
  return (
    <>
      <section >
    {/* FIND-ER Name and logo section in header */}
        <div className={'App-header'}>
          <header className={'title-header'}>
            <h1>Find</h1><h1 className={'title-backend'}>ER</h1>
          </header>
        <img src={logoMain} className="App-logo" alt="logo" />


    {/* Navigation Bar section */}
          <div className={'header'}>
            <Link to='/'>
              <h3 className={'headerWord'}>Home</h3>
            </Link>
            <Link to='/profile'>
              <h3 className={'headerWord'}>Profile</h3>
            </Link>
            <Link to='/account'>
              <h3 className={'headerWord'}>Account</h3>
            </Link>
            <Link to='/settings'>
              <h3 className={'headerWord'}>Settings</h3>
            </Link>
            <Link to='/finderMap'>
              <h3 className={'headerWord'}>Find-ER Map</h3>
            </Link>
            

          </div>
        </div>

      </section>



    </>

  )

}







export default App;
