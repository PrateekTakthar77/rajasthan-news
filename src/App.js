import React from 'react';
import Box from '@mui/material/Box';
import Navigation from './navigation/Navigation';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
// import store from "./store"
import store from './Redux/store';
import { ThreeSixty } from '@mui/icons-material';

function App() {
  return (
    <Provider store={store}>
      <Box flex={1}>
        <Navigation />
        <Footer />
      </Box>
    </Provider>
  )
}

export default App;
