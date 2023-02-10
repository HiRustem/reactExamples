import React from 'react'

import {useDispatch} from 'react-redux'
import {mainInfo} from '../../data/data'

import MainInfoPresentation from './MainInfoPresentation'

import {setName, setDate, setIsMarried, setChildren, setPlaceOfBirth, setRegistration, setPlaceOfResidence, setTelephone, setActivity, setPost, setMinimum} from '../../features/counter/MainInfoReducer'

const MainInfo = () => {

    const dispatch = useDispatch()

    //Функции
    const nameOnChange = (event) => {
        dispatch(setName(event.target.value))
    }

    const dateOnChange = (event) => {
        dispatch(setDate(event.target.value))
    }
    
    const isMarriedOnChange = (event) => {
        dispatch(setIsMarried(event.target.value))
    }

    const childrenOnChange = (event) => {
        dispatch(setChildren(event.target.value))
    }
    
    const placeOfBirthOnChange = (event) => {
        dispatch(setPlaceOfBirth(event.target.value))
    }

    const registrationOnChange = (event) => {
        dispatch(setRegistration(event.target.value))
    }

    const placeOfResidenceOnChange = (event) => {
        dispatch(setPlaceOfResidence(event.target.value))
    }

    const telephoneOnChange = (event) => {
        dispatch(setTelephone(event.target.value))
    }

    const activityOnChange = (event) => {
        dispatch(setActivity(event.target.value))
    }

    const postOnChange = (event) => {
        dispatch(setPost(event.target.value))
    }

    const minimumOnChange = (event) => {
        dispatch(setMinimum(event.target.value))
    }

    //Массив с функциями
    const functions = [nameOnChange, dateOnChange, isMarriedOnChange, childrenOnChange, placeOfBirthOnChange, registrationOnChange, placeOfResidenceOnChange, telephoneOnChange, activityOnChange, postOnChange, minimumOnChange]

    return (
        <div className="w-full bg-transparent mt-20">
            {mainInfo.map(info => (
                <MainInfoPresentation key={info.id} id={info.id} name={info.name} style={info.style} placeholder={info.placeholder} myFunction={functions[info.id - 1]} />
            ))}
        </div>
    )
}

export default MainInfo