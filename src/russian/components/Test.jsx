import {React, useRef, useState, useEffect} from 'react';

import emailjs from '@emailjs/browser'

import {firstVar, firstVarAnswers, secondVar, secondVarAnswers, thirdVar, thirdVarAnswers, fourthVar, fourthVarAnswers, fifthVar, fifthVarAnswers} from '../data/data'

import {useDispatch, useSelector} from 'react-redux'
import {setFirstQuestion, setSecondQuestion, setThirdQuestion, setFourthQuestion, setFifthQuestion, setSixthQuestion, setSeventhQuestion, setEighthQuestion, setNinthQuestion, setTenthQuestion, setEleventhQuestion, setTwelveQuestion, setThirteenQuestion, setFourteenQuestion, setFifteenQuestion, setResult, setIsFinished, setIsEnd} from '../features/counter/TestReducer'

import CheckboxPresentation from './CheckboxPresentation'

const Test = (props) => {

    const dispatch = useDispatch()

    const variants = [firstVar, secondVar, thirdVar, fourthVar, fifthVar]
    const answers = [firstVarAnswers, secondVarAnswers, thirdVarAnswers, fourthVarAnswers, fifthVarAnswers]

    const array = variants[props.random]
    const answerArray = answers[props.random]

    //Имя
    const name = useSelector((state) => state.test.personName)
    const surname = useSelector((state) => state.test.personSurname)
    const middleName = useSelector((state) => state.test.personMiddleName)

    //Переменные
    const firstQuestion = useSelector((state) => state.test.firstQuestion)
    const secondQuestion = useSelector((state) => state.test.secondQuestion)
    const thirdQuestion = useSelector((state) => state.test.thirdQuestion)
    const fourthQuestion = useSelector((state) => state.test.fourthQuestion)
    const fifthQuestion = useSelector((state) => state.test.fifthQuestion)
    const sixthQuestion = useSelector((state) => state.test.sixthQuestion)
    const seventhQuestion = useSelector((state) => state.test.seventhQuestion)
    const eighthQuestion = useSelector((state) => state.test.eighthQuestion)
    const ninthQuestion = useSelector((state) => state.test.ninthQuestion)
    const tenthQuestion = useSelector((state) => state.test.tenthQuestion)
    const eleventhQuestion = useSelector((state) => state.test.eleventhQuestion)
    const twelveQuestion = useSelector((state) => state.test.twelveQuestion)
    const thirteenQuestion = useSelector((state) => state.test.thirteenQuestion)
    const fourteenQuestion = useSelector((state) => state.test.fourteenQuestion)
    const fifteenQuestion = useSelector((state) => state.test.fifteenQuestion)
    
    const values = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion, seventhQuestion, eighthQuestion, ninthQuestion, tenthQuestion, eleventhQuestion, twelveQuestion, thirteenQuestion, fourteenQuestion, fifteenQuestion]

    //Функции
    const firstQuestionOnChange = (variant) => {
        dispatch(setFirstQuestion(variant))
    }

    const secondQuestionOnChange = (variant) => {
        dispatch(setSecondQuestion(variant))
    }

    const thirdQuestionOnChange = (variant) => {
        dispatch(setThirdQuestion(variant))
    }

    const fourthQuestionOnChange = (variant) => {
        dispatch(setFourthQuestion(variant))
    }

    const fifthQuestionOnChange = (variant) => {
        dispatch(setFifthQuestion(variant))
    }

    const sixthQuestionOnChange = (variant) => {
        dispatch(setSixthQuestion(variant))
    }

    const seventhQuestionOnChange = (variant) => {
        dispatch(setSeventhQuestion(variant))
    }

    const eighthQuestionOnChange = (variant) => {
        dispatch(setEighthQuestion(variant))
    }

    const ninthQuestionOnChange = (variant) => {
        dispatch(setNinthQuestion(variant))
    }

    const tenthQuestionOnChange = (variant) => {
        dispatch(setTenthQuestion(variant))
    }

    const eleventhQuestionOnChange = (variant) => {
        dispatch(setEleventhQuestion(variant))
    }

    const twelveQuestionOnChange = (variant) => {
        dispatch(setTwelveQuestion(variant))
    }

    const thirteenQuestionOnChange = (variant) => {
        dispatch(setThirteenQuestion(variant))
    }

    const fourteenQuestionOnChange = (variant) => {
        dispatch(setFourteenQuestion(variant))
    }

    const fifteenQuestionOnChange = (variant) => {
        dispatch(setFifteenQuestion(variant))
    }

    const functions = [firstQuestionOnChange, secondQuestionOnChange, thirdQuestionOnChange, fourthQuestionOnChange, fifthQuestionOnChange, sixthQuestionOnChange, seventhQuestionOnChange, eighthQuestionOnChange, ninthQuestionOnChange, tenthQuestionOnChange, eleventhQuestionOnChange, twelveQuestionOnChange, thirteenQuestionOnChange, fourteenQuestionOnChange, fifteenQuestionOnChange]

    const form = useRef()

    const [isOpen, setIsOpen] = useState(false)
    const result = useSelector((state) => state.test.result)

    const analysis = () => {
        let rightAnswers = 0

        dispatch(setResult(`<span style="font-weight: bold;">Вариант: ${props.random + 1}</span><br/><br/><table style="border-collapse: collapse;"><tbody>`))

        for (let i = 0; i <values.length; i++) {
            if (values[i] === answerArray[i]) {
                dispatch(setResult(`<tr><td style="border: 2px solid black; padding: 4px; text-align: center;">${i + 1}</td><td style="border: 2px solid black; padding: 4px;">${values[i]}</td><td style="border: 2px solid black; padding: 4px; color: green; text-align: center;">Верно</td></tr>`))                
                rightAnswers++
            } else {
                dispatch(setResult(`<tr><td style="border: 2px solid black; padding: 4px; text-align: center;">${i + 1}</td><td style="border: 2px solid black; padding: 4px;">${values[i]}</td><td style="border: 2px solid black; padding: 4px; color: red; text-align: center;">Неверно</td></tr>`))
            }
        }

        dispatch(setResult(`</tbody></table><br/><br/><span style="font-weight: bold;">Правильных ответов: ${rightAnswers}</span><br/>`))

        const percentage = rightAnswers / 15

        if (percentage === 1) {
            dispatch(setResult(`<span style="font-weight: bold;">Итоговая оценка: 10 баллов</span>`))
        } else if (percentage >= 0.81 && percentage <= 0.9) {
            dispatch(setResult(`<span style="font-weight: bold;">Итоговая оценка: 9 баллов</span>`))
        } else if (percentage === 0.8) {
            dispatch(setResult(`<span style="font-weight: bold;">Итоговая оценка: 8 баллов</span>`))
        } else if (percentage >= 0.7 && percentage <= 0.79) {
            dispatch(setResult(`<span style="font-weight: bold;">Итоговая оценка: 7 баллов</span>`))
        } else if (percentage >= 0.61 && percentage <= 0.69) {
            dispatch(setResult(`<span style="font-weight: bold;">Итоговая оценка: 6 баллов</span>`))
        } else if (percentage === 0.6) {
            dispatch(setResult(`<span style="font-weight: bold;">Итоговая оценка: 5 баллов</span>`))
        } else if (percentage >= 0.5 && percentage <= 0.59) {
            dispatch(setResult(`<span style="font-weight: bold;">Итоговая оценка: 4 балла</span>`))
        } else if (percentage >= 0.41 && percentage <= 0.49) {
            dispatch(setResult(`<span style="font-weight: bold;">Итоговая оценка: 3 балла</span>`))
        } else if (percentage <= 0.40) {
            dispatch(setResult(`<span style="font-weight: bold;">Итоговая оценка: 2 балла</span>`))
        }
    }

    const open = () => {
        if (name !== "" && surname !== "" && middleName !== "") {
            analysis()
            setIsOpen(true)
        } else {
            alert("Заполните все поля")
        }
    }

    const close = () => {
        setIsOpen(false)
    }

    const send = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_2vgkcmo',
            'template_rp0830p',
            form.current,
            '5PaUlcmEnvZf61a3b')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })

        dispatch(setIsFinished(true))
    }

    //Timer
    const isEnd = useSelector((state) => state.test.isEnd)
    const [[hrs, mins, secs], setTime] = useState([0, 10, 0])

    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0) {
            if (isEnd === false) {
                dispatch(setIsEnd(true))
            }
        } else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59])
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59])
        } else {
            setTime([hrs, mins, secs - 1])
        }
    }

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000)
        return () => clearInterval(timerId)
    })

    return (
        <div className="w-full">
            <div className={`w-full ${isEnd ? 'hidden' : ''}`}>
                <h1 className="russianTestH1 russianTestAdaptiveWidth m-auto mt-5 mb-10 flex">Вариант {props.random + 1}</h1>
                {
                    array.map((question) => (
                        <CheckboxPresentation key={question.id} id={question.id} text={question.text} addedText={question.addedText} value={values[question.id - 1]} variables={question.vars} setFunction={functions[question.id - 1]} />
                    ))
                }
            </div>

            <div className={`w-full flex justify-center mb-10 ${isEnd ? '' : 'hidden'}`}>
                <p className='p-2 border-2 border-orange-500 rounded-lg bg-white'>Время истекло!</p>
            </div>

            <div className="russianTestAdaptiveWidth m-auto mt-5 mb-10 text-center">
                <button className={`${isOpen === true ? 'hidden' : ''} buttonStyle`} onClick={open}>Отправить</button>
                <div className={`${isOpen === true ? '' : 'hidden'} justify-center w-full flex flex-row`}>
                    <form ref={form} onSubmit={send}>
                        <input type="hidden" name="name" value={`${surname} ${name} ${middleName}`} />
                        <input type="hidden" name="result" value={result} />
                        <input className="buttonStyle mr-2 cursor-pointer" value="Да" type="submit" />
                    </form>
                    <button className="buttonStyle" onClick={close}>Нет</button>
                </div>
            </div>

            <p className='timerFont fixed top-20 right-10 p-2 border-2 border-orange-500 rounded-lg bg-white font-bold'>{`${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
        </div>
    )
}

export default Test