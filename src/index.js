import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'

import './styles/main.css'
import './styles/app.css'
import './styles/motivation.css'
import './styles/form.css'
import './styles/russianTest.css'
import './styles/managerForm.css'

import './styles/mot.css'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)