import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logoMain from './logoMain.svg.png'
import './App.css';
import Profile from './components/profile';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <NavBar />} /> 
          <Route path='/profile' element={ <Profile />} />


        
      </Routes>
    </BrowserRouter>
  )
}


function NavBar(props) {
  return (
    <>
      <section >
    {/* FIND-ER Name and logo section in header */}
        <div className={'App-header'}>
          <header className={'title-header'}>
            <h1>FIND-</h1><h1 className={'title-backend'}>ER</h1>
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

            <h3 className={'headerWord'}>Account</h3>
            <h3 className={'headerWord'}>Settings</h3>
            <h3 className={'headerWord'}>Find-ER Map</h3>

          </div>
        </div>

      </section>



    </>

  )

}







export default App;
