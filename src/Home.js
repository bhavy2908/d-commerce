import './App.css';
import Navb from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Carousel';
import Products from './components/Products';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const home = () => {
  return (
      <div style={{ backgroundColor: '#DDDDDD' }}>
          <Navb />
          <Hero />
          <div className='container'>
              <Products />
          </div>
          <Footer />
      </div>
  )
}

export default home