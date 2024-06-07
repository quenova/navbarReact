import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './containers/MovieList';
import About from './containers/About';
import Pricing from './containers/Pricing';
import Subscribed from './containers/Subscribed';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/subscribed" element={<Subscribed />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
