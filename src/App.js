import React from "react";

// MUI-LIBRARIES
import { Box } from "@material-ui/core";

// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";

// PAGES
import Navigation from "./navigation/Navigation";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <Box flex={1}>
        <Navigation />
        <Footer/>
      </Box>
    </Provider>
  );
};

export default App;
