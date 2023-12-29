import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import  Profile  from './components/profile';





function Header()  {
  return (
      <>

    


       <section >

        <div className={'App-header'}>
          <header className={'title-header'}>
            <h1>FIND-</h1><h1 className={'title-backend'}>ER</h1>
          </header>
    
            <img src={logo} className="App-logo" alt="logo" />
        


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






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
        <Route path='/profile' element={<Profile />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
