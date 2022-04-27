import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter as Router,
  Route, 
  Routes,
  } from 'react-router-dom';
import './index.css';
import Header from './components/Header/header';
import Home from './pages/home';
import About from './pages/about';
import Error from './pages/error';
import Footer from './components/Footer/footer';
import Fiche from './pages/ficheLogement';


const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/*' element={<Error/>}/>
          <Route path=':hebergementId' element={<Fiche />}/>
        </Routes>
        <Footer />
    </Router>
    
  </React.StrictMode>,
  
);
