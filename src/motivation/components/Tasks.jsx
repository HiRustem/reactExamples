import emailjs from '@emailjs/browser'
import { React, useState, useRef } from 'react'
import { tasks } from '../data/data'

import { useDispatch, useSelector } from 'react-redux'
import { addResult, addResultString, setFinish } from '../features/counter/ResultReducer'

const Tasks = () => {
    const dispatch = useDispatch()

    const isFinish = useSelector((state) => state.result.finish)

    const form = useRef()

    const resultString = useSelector((state) => state.result.resultString)

    const personSurname = useSelector((state) => state.person.surname)
    const personName = useSelector((state) => state.person.name)
    const personMiddleName = useSelector((state) => state.person.middleName)

    const [active, setActive ] = useState(1)

    const [ firstVar, setFirstVar ] = useState(0)
    const [ secondVar, setSecondVar ] = useState(0)
    const [ thirdVar, setThirdVar ] = useState(0)
    const [ fourthVar, setFourthVar ] = useState(0)

    const firstVarChange = (event) => {
        setFirstVar(event.target.value)
    }

    const secondVarChange = (event) => {
        setSecondVar(event.target.value)
    }

    const thirdVarChange = (event) => {
        setThirdVar(event.target.value)
    }

    const fourthVarChange = (event) => {
        setFourthVar(event.target.value)
    }

    const next = () => {

        if (parseInt(firstVar, 10) + parseInt(secondVar, 10) + parseInt(thirdVar, 10) + parseInt(fourthVar, 10) === 11) {

            dispatch(addResult(
                {
                    id: active,
                    var1: firstVar,
                    var2: secondVar,
                    var3: thirdVar,
                    var4: fourthVar,
                }
            ))

            dispatch(addResultString())

            clean()
            setActive(active + 1)
        } else {
            alert('Сумма баллов не равна 11')
        }
    }

    const selectVar = (e) => {
        e.target.select()
    }

    const clean = () => {
        setFirstVar(0)
        setSecondVar(0)
        setThirdVar(0)
        setFourthVar(0)
    }

    const send = (e) => {
        e.preventDefault();

        if (personSurname === "" || personName === "" || personMiddleName === "") {
            alert("Введите ФИО")
        } else {

            emailjs.sendForm(
                'service_ungvjm6',
                 'template_ysxhu7f',
                  form.current,
                   '4fcmw4Dq2gLGqc3VF')
                .then((result) => {
                    console.log(result.text)
                }, (error) => {
                    console.log(error.text)
                })
    
            dispatch(setFinish(true))
        }
    }

    return (
        <div className={`${isFinish === true ? 'hidden' : ''} w-full flex flex-col mb-10`}>
            <div className="m-auto flex flex-col items-center bg-white p-4 border-2 border-orange-500 rounded-xl cardWidth">
                {
                    tasks.map((task) => (
                        active === task.id ? 
                            <div key={task.id} className={`${active !== tasks.length ? '' : 'hidden'} w-full`}>
                                <h1 className="font-bold">{`${task.id}. ${task.question}`}</h1>
                                <div className={`${active !== tasks.length ? '' : 'hidden'} flex flex-col `}>
                                    <span>{`а) ${task.var1}`}</span>
                                    <span>{`б) ${task.var2}`}</span>
                                    <span>{`в) ${task.var3}`}</span>
                                    <span>{`г) ${task.var4}`}</span>
                                </div>
                                <div className="flex flex-row w-full mt-5 mb-5 justify-center">
                                    {`а)`} <input value={firstVar} onClick={selectVar} onChange={firstVarChange} className="border-orange-500 border-2 rounded mr-2 ml-1 inputWidth" />
                                    {`б)`} <input value={secondVar} onClick={selectVar} onChange={secondVarChange} className="border-orange-500 border-2 rounded mr-2 ml-1 inputWidth" />
                                    {`в)`} <input value={thirdVar} onClick={selectVar} onChange={thirdVarChange} className="border-orange-500 border-2 rounded mr-2 ml-1 inputWidth" />
                                    {`г)`} <input value={fourthVar} onClick={selectVar} onChange={fourthVarChange} className="border-orange-500 border-2 rounded mr-2 ml-1 inputWidth" />
                                </div>
                            </div>
                        : ''
                    ))
                }

                <div className="flex flex-row">
                    <button className={`${active === tasks.length ? 'hidden' : active === tasks.length - 1 ? 'hidden' : ''} buttonStyle`} onClick={() => next()}>Дальше</button>
                    <button className={`${active === tasks.length - 1 ? '' : 'hidden'} buttonStyle`} onClick={() => next()}>Завершить</button>
                </div>

                <p className={`${active === tasks.length ? '' : 'hidden'} mb-2`}>Отправить результаты тестирования?</p>
                <form ref={form} onSubmit={send} className={`flex flex-row w-26 ${active === tasks.length ? '' : 'hidden'}`}>
                    <input type="hidden" name="name" value={`${personSurname} ${personName} ${personMiddleName}`} />
                    <input type="hidden" name="result" value={resultString} />  

                    <input type="submit" value="Отправить" className="h-12 w-26 mb-2 cursor-pointer buttonStyle" />
                </form>
            </div>
        </div>
      )
}

export default Tasks