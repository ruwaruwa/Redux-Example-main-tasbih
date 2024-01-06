import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
 //providerka waxo loo is ticmala in data da mel wlbo laga isticmalo (sidi props cml ayow ushaqeya)
//waxo ushaqenaya wihtout prop
import store from '../redux/store/index.js'
 //store waxo noo hayaa 
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
