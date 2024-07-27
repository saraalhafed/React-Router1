import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/* import { BrowserRouter } from 'react-router-dom' */
import { BrowserRouter as Router } from 'react-router-dom' /* we can rename that ,most developer make that */
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
  
  
)
/* to fegur out 2 and reder 2 time help the developer to identify errors */
/* browserRouter always in main.jsx in toplevel her eis the best place we can also inApp */
/* router component has only one childe */