import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Layout from './components/Layout/Layout';

const NotFound = () => <div style={{padding: "50px"}}>
  <h2>
    404: Page Not Found
  </h2>
</div>

const App = () => {
  return (
    <div className='w-full flex justify-center items-center p-2'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App