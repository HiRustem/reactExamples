import {React, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {addToThirdCheckboxArray, deleteFromThirdCheckboxArray} from '../../features/counter/MainInfoReducer'

import CheckboxPresentation from './CheckboxPresentation'

const CheckboxThirdQuestion = () => {
    const dispatch = useDispatch()

    const array = useSelector((state) => state.mainInfo.thirdCheckboxArray)

    const question = "30. В каком случае Вы готовы (или не готовы) отстаивать свою точку зрения, которую считаете правильной, перед вышестоящим руководством? Отметьте один вариант."

    /* Status */
    const [firstStatus, setFirstStatus] = useState(false)
    const [secondStatus, setSecondStatus] = useState(false)
    const [thirdStatus, setThirdStatus] = useState(false)
    const [fourthStatus, setFourthStatus] = useState(false)
    const [fifthStatus, setFifthStatus] = useState(false)

    /* Add */
    const addFirst = () => {
        if (array.length < 1) {
            dispatch(addToThirdCheckboxArray("не буду спорить, так как начальник отвечает за все"))
            setFirstStatus(true)
        } else {
            alert("Нельзя добавить больше 1 вариантов")
        }
    }

    const addSecond = () => {

        if (array.length < 1) {
            dispatch(addToThirdCheckboxArray("выскажу свое мнение, но спорить не буду"))
            setSecondStatus(true)   
        } else {
            alert("Нельзя добавить больше 1 вариантов")
        }
    }

    const addThird = () => {
        if (array.length < 1) {
            dispatch(addToThirdCheckboxArray("буду отстаивать, если лично отвечаю за конечный результат"))
            setThirdStatus(true)
        } else {
            alert("Нельзя добавить больше 1 вариантов")
        }
    }

    const addFourth = () => {
        if (array.length < 1) {
            dispatch(addToThirdCheckboxArray("буду отстаивать, если не отвечаю за конечный результат, но от моего результата в значительной степени зависит успех работы"))
            setFourthStatus(true)   
        } else {
            alert("Нельзя добавить больше 1 вариантов")
        }
    }

    const addFifth = () => {
        if (array.length < 1) {
            dispatch(addToThirdCheckboxArray("буду отстаивать, чтобы не пострадала репутация организации"))
            setFifthStatus(true)   
        } else {
            alert("Нельзя добавить больше 1 вариантов")
        }
    }

    /* Delete */
    const deleteFirst = () => {
        dispatch(deleteFromThirdCheckboxArray("не буду спорить, так как начальник отвечает за все"))
        setFirstStatus(false);
    }

    const deleteSecond = () => {
        dispatch(deleteFromThirdCheckboxArray("выскажу свое мнение, но спорить не буду"))
        setSecondStatus(false)
    }

    const deleteThird = () => {
        dispatch(deleteFromThirdCheckboxArray("буду отстаивать, если лично отвечаю за конечный результат"))
        setThirdStatus(false)
    }

    const deleteFourth = () => {
        dispatch(deleteFromThirdCheckboxArray("буду отстаивать, если не отвечаю за конечный результат, но от моего результата в значительной степени зависит успех работы"))
        setFourthStatus(false)
    }

    const deleteFifth = () => {
        dispatch(deleteFromThirdCheckboxArray("буду отстаивать, чтобы не пострадала репутация организации"))
        setFifthStatus(false)
    }

    const addFunctions = [addFirst, addSecond, addThird, addFourth, addFifth]

    const deleteFunctions = [deleteFirst, deleteSecond, deleteThird, deleteFourth, deleteFifth]

    const checkboxes = [
        {
            id: 0,
            name: "не буду спорить, так как начальник отвечает за все;",
            status: firstStatus,
        },
        {
            id: 1,
            name: "выскажу свое мнение, но спорить не буду;",
            status: secondStatus,
        },
        {
            id: 2,
            name: "буду отстаивать, если лично отвечаю за конечный результат;",
            status: thirdStatus,
        },
        {
            id: 3,
            name: "буду отстаивать, если не отвечаю за конечный результат, но от моего результата в значительной степени зависит успех работы;",
            status: fourthStatus,
        },
        {
            id: 4,
            name: "буду отстаивать, чтобы не пострадала репутация организации.",
            status: fifthStatus,

        },
    ]

    return (
        <div className="w-full bg-transparent mb-5">
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

export default CheckboxThirdQuestion