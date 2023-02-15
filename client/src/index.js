import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import  { AppContextProvider } from './Components/Context/AppContext'
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/product/store';
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AppContextProvider>
 <Provider store={store}>

<BrowserRouter>

    <App />
</BrowserRouter>
 </Provider>
    
 </AppContextProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

