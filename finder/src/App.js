import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './header/header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>



        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
