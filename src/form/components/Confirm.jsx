import emailjs from '@emailjs/browser'

import {React, useState, useRef} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {analysis, setFormDate, setIsFinished} from '../features/counter/MainInfoReducer'

const Confirm = () => {
    const dispatch = useDispatch()

    const name = useSelector((state) => state.mainInfo.name)
    const birthDate= useSelector((state) => state.mainInfo.birth)
    const isMarried = useSelector((state) => state.mainInfo.isMarried)
    const children = useSelector((state) => state.mainInfo.children)
    const placeOfBirth = useSelector((state) => state.mainInfo.placeOfBirth)
    const registration = useSelector((state) => state.mainInfo.registration)
    const placeOfResidence = useSelector((state) => state.mainInfo.placeOfResidence)
    const telephone = useSelector((state) => state.mainInfo.telephone)
    const activity = useSelector((state) => state.mainInfo.activity)
    const post = useSelector((state) => state.mainInfo.post)
    const minimum = useSelector((state) => state.mainInfo.minimum)
    const sources = useSelector((state) => state.mainInfo.sources)

    const educations = useSelector((state) => state.mainInfo.educations)
    const military = useSelector((state) => state.mainInfo.military)
    const jobs = useSelector((state) => state.mainInfo.jobs)
    const duties = useSelector((state) => state.mainInfo.duties)
    const additionalInfo = useSelector((state) => state.mainInfo.additionalInfo)
    const family = useSelector((state) => state.mainInfo.family)

    const firstQuestion = useSelector((state) => state.mainInfo.firstQuestion)
    const secondQuestion = useSelector((state) => state.mainInfo.secondQuestion)
    const thirdQuestion = useSelector((state) => state.mainInfo.thirdQuestion)
    const fourthQuestion = useSelector((state) => state.mainInfo.fourthQuestion)
    const fifthQuestion = useSelector((state) => state.mainInfo.fifthQuestion)
    const sixthQuestion = useSelector((state) => state.mainInfo.sixthQuestion)
    const seventhQuestion = useSelector((state) => state.mainInfo.seventhQuestion)
    const eighthQuestion = useSelector((state) => state.mainInfo.eighthQuestion)
    const ninthQuestion = useSelector((state) => state.mainInfo.ninthQuestion)

    const firstCheckboxArray = useSelector((state) => state.mainInfo.firstCheckboxArray)
    const secondCheckboxArray = useSelector((state) => state.mainInfo.secondCheckboxArray)
    const thirdCheckboxArray = useSelector((state) => state.mainInfo.thirdCheckboxArray)

    const tenthQuestion = useSelector((state) => state.mainInfo.tenthQuestion)
    const eleventhQuestion = useSelector((state) => state.mainInfo.eleventhQuestion)


    const result = useSelector((state) => state.mainInfo.result)
    const date = useSelector((state) => state.mainInfo.formDate)

    const form = useRef()


    const [isOpen, setIsOpen] = useState(false)

    const analysisInfo = () => {

        if (name !== "" && birthDate !== "" && isMarried !== "" && children !== "" && placeOfBirth !== "" && registration !== "" && placeOfResidence !== "" && telephone !== "" && activity !== "" && post !== "" && minimum !== "" && sources !== "" && educations.length !== 1 && military !== "" && jobs.length !== 1 && duties !== "" && additionalInfo.length !== 1 && family.length !== 1 && firstQuestion !== "" && secondQuestion !== "" && thirdQuestion !== "" && fourthQuestion !== "" && fifthQuestion !== "" && sixthQuestion !== "" && seventhQuestion !== "" && eighthQuestion !== "" && ninthQuestion !== "" && firstCheckboxArray.length !== 0 && secondCheckboxArray.length !== 0 && thirdCheckboxArray.length !== 0 && tenthQuestion !== "" && eleventhQuestion !== "") {
            dispatch(setFormDate(new Date().toString()))
            dispatch(analysis())
            setIsOpen(true)
        } else {
            alert("Заполните все поля")
        }
    }

    const open = () => {
        analysisInfo()
    }

    const close = () => {
        setIsOpen(false)
    }

    const send = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_lony4kh',
            'template_bmmj2eb',
            form.current,
            'QUQpKK43jWqEiYFiY')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })


        close()
        dispatch(setIsFinished(true))
    }

    return (
        <div className="w-full mt-5 mb-5">
            <div className="w-1/2 m-auto flex justify-center">
                <button className={`${isOpen === false ? '' : 'hidden'} buttonStyle`} onClick={open}>Отправить</button>
                <div className={`${isOpen === true ? '' : 'hidden'} w-full flex flex-col text-center justify-center`}>
                    <div className="flex flex-row justify-center">
                        <form className="flex flex-row justify-center mr-1" ref={form} onSubmit={send}>
                            <input name="name" type="hidden" value={name} />
                            <input name="result" type="hidden" value={result} />
                            <input name="date" type="hidden" value={date} />
                            <input type="submit" value="Да" className="cursor-pointer buttonStyle mr-2"/>
                        </form>
                        <button className="buttonStyle" onClick={close}>Нет</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirm