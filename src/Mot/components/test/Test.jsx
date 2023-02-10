import { React, useState, useRef } from 'react'

import emailjs from '@emailjs/browser'

import { useDispatch, useSelector } from 'react-redux'

import { setIsFinish } from '../../features/counter/PersonReducer'

import { addAnswer, deleteAnswer, analysis, createResultString } from '../../features/counter/TestReducer'

import { questions } from '../../data/data'

import Rules from '../Rules'
import Question from './Question'

const Test = () => {
    const [isOpen, setIsOpen] = useState(false)

    const surname = useSelector((state) => state.person.surname)
    const name = useSelector((state) => state.person.name)
    const middleName = useSelector((state) => state.person.middleName)

    const isFinished = useSelector((state) => state.person.isFinished)

    const form = useRef()

    const dispatch = useDispatch()

    const array = useSelector((state) => state.test.answers)

    const resultString = useSelector((state) => state.test.resultString)

    const add = (id, answer, quantity) => {
        dispatch(addAnswer(
            {
                id: id,
                answer: answer,
                quantity: quantity,
            }
        ))
    }

    const remove = (id, variant) => {
        dispatch(deleteAnswer(
            {
                id: id,
                variant: variant,
            }
        ))
    }

    const open = () => {
        if (name !== '' && surname !== '' && middleName !== '') {
            dispatch(analysis())
            dispatch(createResultString())
            setIsOpen(true)
        } else {
            alert('Заполните ФИО')
        }
    }

    const close = () => {
        setIsOpen(false)
    }

    const send = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_21gr3nn',
            'template_8u5pfsv',
            form.current,
            'b_xhwTPd5JUj2cv8C',
        ).then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })

        dispatch(setIsFinish(true))
    }

    return (
        <div className='w-full flex flex-col'>
            <div className={`w-1/2 m-auto ${isFinished === false ? '' : 'hidden'}`}>
                <Rules />
                {
                    questions.map((question) => (
                        <Question key={question.id} question={question} array={array[question.id]} add={add} remove={remove} />
                    ))
                }
            </div>

            <div className={`w-full mt-5 mb-5 ${isFinished === false ? '' : 'hidden'}`}>
                <div className="w-1/2 m-auto flex justify-center">
                    <button className={`${isOpen === false ? '' : 'hidden'} buttonStyle`} onClick={open}>Отправить</button>
                    <div className={`${isOpen === true ? '' : 'hidden'} w-full flex flex-col text-center justify-center`}>
                        <div className="flex flex-row justify-center">
                            <form className="flex flex-row justify-center mr-1" ref={form} onSubmit={send}>
                                <input type="hidden" name="name" value={`${surname} ${name} ${middleName}`} />
                                <input type="hidden" name="result" value={resultString} />
                                <input type="submit" value="Да" className="cursor-pointer mr-2 buttonStyle"/>
                            </form>
                            <button className="buttonStyle" onClick={close}>Нет</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`w-full flex ${isFinished === false ? 'hidden' : ''}`}>
                <p className='w-auto p-2 m-auto border-2 border-orange-500 bg-white rounded-xl'>Результат успешно отправлен</p>
            </div>

        </div>
    )
}

export default Test