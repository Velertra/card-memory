import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Router from './utilities/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
