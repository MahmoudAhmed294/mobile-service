import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import ErrorMessage from "./components/ErrorMessage";
import ThemeProvider from "./theme/theme";
import store from "./store/store";
import "./index.css"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ErrorMessage>
          <App />
        </ErrorMessage>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
