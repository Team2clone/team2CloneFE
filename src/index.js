import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./styles/globalStyles";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { QueryClient, QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <GlobalStyles />
        <App />
      </CookiesProvider>
    </QueryClientProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
