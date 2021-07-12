import { ThemeProvider } from "styled-components";
import Navbar from "../Navbar";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import CountriesList from "../CountriesList/countries-list";
import { GlobalStyle, theme } from "../../styled-configuration/globalStyle";

import store from "../../redux/store";
import "./app.css";

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <GlobalStyle />
        <BrowserRouter forceRefresh={true}>
          <Route component={CountriesList} path="/" exact />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
