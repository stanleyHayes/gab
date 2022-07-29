import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SnackbarProvider} from "notistack";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/app/store";
import {MapProvider} from "react-map-gl";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <MapProvider>
                <BrowserRouter>
                    <SnackbarProvider
                        autoHideDuration={2000}
                        anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                        maxSnack={5}>
                        <App/>
                    </SnackbarProvider>
                </BrowserRouter>
            </MapProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
