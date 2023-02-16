import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Housing from './pages/Housing'
import About from './pages/About'
import Error from './components/Error'
import Header from './components/Header'
import GlobalStyle from './utils/style/GlobalStyle';
// import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/housing/:id' element={<Housing />}></Route>
        <Route path='/about' element ={<About />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>
);
