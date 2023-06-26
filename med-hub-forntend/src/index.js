import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store,{persistor} from "./store";
import  {PersistGate} from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
import { MedicineProvider } from "./components/home_page/MedicineContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MedicineProvider>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App />
        <ToastContainer/>
        </PersistGate>
      </Provider>
    </BrowserRouter>
    </MedicineProvider>
  </React.StrictMode>
);
