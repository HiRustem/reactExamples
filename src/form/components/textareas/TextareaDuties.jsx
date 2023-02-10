import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setDuties} from '../../features/counter/MainInfoReducer'

import Textarea from './Textarea'

const TextareaDuties = () => {
    const dispatch = useDispatch()

    const name = "16. Перечислите подробно все должностные обязанности, выполняемые Вами."

    const value = useSelector((state) => state.mainInfo.duties)

    const myFunction = (event) => {
        dispatch(setDuties(event.target.value))
    }

    return (
        <div className="w-full">
            <Textarea name={name} value={value} myFunction={myFunction} />
        </div>
    )
}

export default TextareaDuties