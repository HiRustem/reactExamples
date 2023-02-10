import React from 'react'
import { useSelector } from 'react-redux'

import {Person, Form, Confirm, Finish} from '../managerForm/components'

const ManagerForm = () => {

    const isFinished = useSelector((state) => state.form.isFinished)

    return (
        <div>
            <div className={`${isFinished ? 'hidden' : ''}`}>
                <Person />
                <Form />
                <Confirm />
            </div>

            <div className={`${isFinished ? '' : 'hidden'}`}>
                <Finish />
            </div>
        
        </div>
    )
}

export default ManagerForm