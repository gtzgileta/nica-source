import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { getToken, getMenus } from "./store/wordpress";
import { Routes } from "./routes";

const App = () => {
  useEffect(() => {
    // Load token if doesnt exists
    if (!localStorage.token) {
      store.dispatch(getToken());
    }
    // Get Menus
    store.dispatch(getMenus());
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
