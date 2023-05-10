import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';
import About from '../../pages/About/About';
import NotFound from '../../pages/NotFound/NotFound';


const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Main