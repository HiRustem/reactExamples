import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setEleventhQuestion} from '../../features/counter/MainInfoReducer'

import Textarea from './Textarea'

const TextareaEleventhQuestion = () => {
    const dispatch = useDispatch()

    const name = "32. Увлечения, хобби:"

    const value = useSelector((state) => state.mainInfo.eleventhQuestion)

    const myFunction = (event) => {
        dispatch(setEleventhQuestion(event.target.value))
    }

    return (
        <div className="w-full">
            <Textarea name={name} value={value} myFunction={myFunction} />
        </div>
    )
}

export default TextareaEleventhQuestion