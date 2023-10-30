import React from 'react';
import Box from '@mui/material/Box';
import Navigation from './navigation/Navigation';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from "./Redux/store"
import Caro1 from './pages/Carousel/Caro1';
function App() {
  return (
    <Provider store={store}>
      <Box flex={1}>
        <Navigation />
        <Footer />
      </Box>
    </Provider>
    // <Caro1 />
  )
}

export default App;
