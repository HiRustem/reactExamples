import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setSeventhQuestion} from '../../features/counter/MainInfoReducer'

import Textarea from './Textarea'

const TextareaSeventhQuestion = () => {
    const dispatch = useDispatch()

    const name = "25. Какими качествами должен обладать руководитель подразделения для успешного управления своим коллективом?"

    const value = useSelector((state) => state.mainInfo.seventhQuestion)

    const myFunction = (event) => {
        dispatch(setSeventhQuestion(event.target.value))
    }

    return (
        <div className="w-full">
            <Textarea name={name} value={value} myFunction={myFunction} />
        </div>
    )
}

export default TextareaSeventhQuestion