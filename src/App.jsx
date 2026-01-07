import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';

const NotFound = () => <div style={{padding: "50px"}}>
  <h2>
    404: Page Not Found
  </h2>
</div>

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route index element={<Home />}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App