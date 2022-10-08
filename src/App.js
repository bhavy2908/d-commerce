import './App.css';
import Navb from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Carousel';
import Products from './components/Products';

function App() {
  return (
    <div style={{ backgroundColor: '#DDDDDD'}}>
      <Navb />
      <Hero />
      <div className='container'>
        <Products />
      </div>
    </div>
  );
}

export default App;
