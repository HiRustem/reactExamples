import React from 'react'

import {Provider} from 'react-redux'

import {Routes, Route} from 'react-router-dom'

import StartPage from './pages/StartPage'
import Form from './pages/Form'
import Motivation from './pages/Motivation'
import RussianTest from './pages/RussianTest'
import ManagerForm from './pages/ManagerForm'
import Mot from './pages/Mot'

import formStore from './form/app/store'
import motivationStore from './motivation/app/store'
import russianTestStore from './russian/app/store'
import managerFormStore from './managerForm/app/store'
import motStore from './Mot/app/store'

const App = () => {
  return (
    <div className='mainText'>

      <Routes>
        <Route path="/" element={ <StartPage /> } />
        <Route path="/form" element={ <Provider store={formStore}><Form /></Provider> } />
        <Route path="/motivationProfile" element={ <Provider store={motivationStore}><Motivation /></Provider> } />
        <Route path="/russianTest" element={ <Provider store={russianTestStore}><RussianTest /></Provider> } />
        <Route path="/managerForm" element={ <Provider store={managerFormStore}><ManagerForm /></Provider> } />
        <Route path="/mot" element={ <Provider store={motStore}><Mot /></Provider> } />

      </Routes>

    </div>
  )
}

export default App
