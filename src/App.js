import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


//context

import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Navbar from '../src/components/Navbar';
import Footer from './components/Footer';
import Aprendizado from './pages/Aprendizado/Aprendizado';
import Dashboard from './pages/Dashboard/Dashboard';
//pages

function App() {


  //barra de carregamento da página. usar algum efeito css diferente nessa parte

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/aprendizado' element={<Aprendizado />} />
            <Route path='/Dashboard' element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
