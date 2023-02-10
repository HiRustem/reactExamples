import {React, useState} from 'react'

import {useDispatch} from 'react-redux'
import {addToFirstCheckboxArray, deleteFromFirstCheckboxArray} from '../../features/counter/MainInfoReducer'

import CheckboxPresentation from './CheckboxPresentation'

const CheckboxFirstQuestion = () => {
    const dispatch = useDispatch()

    const question = "28. Во время проведения переговоров, какими Вы предпочитаете пользоваться стратегиями (отметить):"

    /* Status */
    const [firstStatus, setFirstStatus] = useState(false)
    const [secondStatus, setSecondStatus] = useState(false)
    const [thirdStatus, setThirdStatus] = useState(false)
    const [fourthStatus, setFourthStatus] = useState(false)
    const [fifthStatus, setFifthStatus] = useState(false)


    /* Add */
    const addFirst = () => {
        dispatch(addToFirstCheckboxArray("противоборство, отстаивание своих интересов"))
        setFirstStatus(true)
    }

    const addSecond = () => {
        dispatch(addToFirstCheckboxArray("компромисс"))
        setSecondStatus(true)
    }

    const addThird = () => {
        dispatch(addToFirstCheckboxArray("сотрудничество"))
        setThirdStatus(true)
    }

    const addFourth = () => {
        dispatch(addToFirstCheckboxArray("уступка"))
        setFourthStatus(true)
    }

    const addFifth = () => {
        dispatch(addToFirstCheckboxArray("избегание"))
        setFifthStatus(true)
    }

    /* Delete */
    const deleteFirst = () => {
        dispatch(deleteFromFirstCheckboxArray("противоборство, отстаивание своих интересов"))
        setFirstStatus(false);
    }

    const deleteSecond = () => {
        dispatch(deleteFromFirstCheckboxArray("компромисс"))
        setSecondStatus(false)
    }

    const deleteThird = () => {
        dispatch(deleteFromFirstCheckboxArray("сотрудничество"))
        setThirdStatus(false)
    }

    const deleteFourth = () => {
        dispatch(deleteFromFirstCheckboxArray("уступка"))
        setFourthStatus(false)
    }

    const deleteFifth = () => {
        dispatch(deleteFromFirstCheckboxArray("избегание"))
        setFifthStatus(false)
    }

    const addFunctions = [addFirst, addSecond, addThird, addFourth, addFifth]

    const deleteFunctions = [deleteFirst, deleteSecond, deleteThird, deleteFourth, deleteFifth]

    const checkboxes = [
        {
            id: 0,
            name: "противоборство, отстаивание своих интересов;",
            status: firstStatus,
        },
        {
            id: 1,
            name: "компромисс;",
            status: secondStatus,
        },
        {
            id: 2,
            name: "сотрудничество;",
            status: thirdStatus,
        },
        {
            id: 3,
            name: "уступка;",
            status: fourthStatus,
        },
        {
            id: 4,
            name: "избегание;",
            status: fifthStatus,

        },
    ]

    return (
        <div className="w-full bg-transparent mb-5 mt-5">
            <div className="w-full">
                <div className="formTextareaLabel">
                    {question}
                    {checkboxes.map((checkbox) => (
                        <CheckboxPresentation key={checkbox.id} name={checkbox.name} status={checkbox.status} addFunction={addFunctions[checkbox.id]} deleteFunction={deleteFunctions[checkbox.id]} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CheckboxFirstQuestion