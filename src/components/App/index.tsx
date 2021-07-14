import { ThemeProvider } from "styled-components";
import Navbar from "../Navbar";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../Main/main";
import { GlobalStyle, theme } from "../../styled-configuration/globalStyle";

import store from "../../redux/store";

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <GlobalStyle />
        <BrowserRouter forceRefresh={true}>
          <Route component={Main} path="/" exact />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
