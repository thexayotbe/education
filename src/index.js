import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from "react-auth-kit";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import store from "./redux";
import Root from "./root";
import { Provider } from "react-redux";
const theme = {
  main_color: "#001C27",
  add_color: "#2D9CDB",
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider
    authType={"cookie"}
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={window.location.protocol === "https:"}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Root />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </AuthProvider>
);
