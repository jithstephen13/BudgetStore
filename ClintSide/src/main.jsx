import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import ScrollToTop from './Components/Scroll-top/Scroll-to-top';

let persistor=persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Provider store={store}>
     <PersistGate persistor={persistor}>
      <ScrollToTop>
        <App />
        </ScrollToTop>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
)
