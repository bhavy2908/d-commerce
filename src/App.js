import './App.css';
import Navb from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Carousel';
import Products from './components/Products';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
