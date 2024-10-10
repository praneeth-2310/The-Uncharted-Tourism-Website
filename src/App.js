
import './App.css';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Service from './Pages/Service';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booknow from './Pages/Booknow';
import Explore from './Pages/Explore';
import Travel from './Pages/Home';
import Logo from './Pages/Info';
import Details from './Pages/Details';
import Paris from './Pages/Paris';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Service' element={<Service />}></Route>
      <Route path='/Booknow' element={<Booknow />}></Route>
      <Route path='/Explore' element={<Explore />}></Route>
      <Route path='/' element={<Travel />}></Route>
      <Route path='/Info' element={<Logo />}></Route>
      <Route path='/Details' element={<Details />}></Route>
      <Route path='/Paris' element={<Paris />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
