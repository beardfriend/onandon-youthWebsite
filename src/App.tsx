import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Artists from './pages/artist/artists';
import NotFound from './pages/404/notFound';
import ArtistDetail from './pages/artist/artistDetail';
import './reset.css';
const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/artists' element={<Artists />}></Route>
          <Route path='/artists/:id' element={<ArtistDetail />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
