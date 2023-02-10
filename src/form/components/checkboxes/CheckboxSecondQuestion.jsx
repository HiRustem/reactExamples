import {React, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {addToSecondCheckboxArray, deleteFromSecondCheckboxArray} from '../../features/counter/MainInfoReducer'

import CheckboxPresentation from './CheckboxPresentation'

const CheckboxSecondQuestion = () => {
    const dispatch = useDispatch()

    const array = useSelector((state) => state.mainInfo.secondCheckboxArray)

    const question = "29. При каких условиях Вы готовы возглавить решение задачи (отметьте 2 варианта):"

    /* Status */
    const [firstStatus, setFirstStatus] = useState(false)
    const [secondStatus, setSecondStatus] = useState(false)
    const [thirdStatus, setThirdStatus] = useState(false)
    const [fourthStatus, setFourthStatus] = useState(false)
    const [fifthStatus, setFifthStatus] = useState(false)

    /* Add */
    const addFirst = () => {
        if (array.length < 2) {
            dispatch(addToSecondCheckboxArray("Вы являетесь начальником в данной группе"))
            setFirstStatus(true)
        } else {
            alert("Нельзя добавить больше 2 вариантов")
        }
    }

    const addSecond = () => {

        if (array.length < 2) {
            dispatch(addToSecondCheckboxArray("Вы точно знаете, как решать данную задачу"))
            setSecondStatus(true)   
        } else {
            alert("Нельзя добавить больше 2 вариантов")
        }
    }

    const addThird = () => {
        if (array.length < 2) {
            dispatch(addToSecondCheckboxArray("кроме Вас больше некому взять на себя ответственность"))
            setThirdStatus(true)
        } else {
            alert("Нельзя добавить больше 2 вариантов")
        }
    }

    const addFourth = () => {
        if (array.length < 2) {
            dispatch(addToSecondCheckboxArray("если есть более опытные коллеги, не буду мешать им руководить"))
            setFourthStatus(true)   
        } else {
            alert("Нельзя добавить больше 2 вариантов")
        }
    }

    const addFifth = () => {
        if (array.length < 2) {
            dispatch(addToSecondCheckboxArray("это дело руководителя назначать ответственных за задачу"))
            setFifthStatus(true)   
        } else {
            alert("Нельзя добавить больше 2 вариантов")
        }
    }

    /* Delete */
    const deleteFirst = () => {
        dispatch(deleteFromSecondCheckboxArray("Вы являетесь начальником в данной группе"))
        setFirstStatus(false);
    }

    const deleteSecond = () => {
        dispatch(deleteFromSecondCheckboxArray("Вы точно знаете, как решать данную задачу"))
        setSecondStatus(false)
    }

    const deleteThird = () => {
        dispatch(deleteFromSecondCheckboxArray("кроме Вас больше некому взять на себя ответственность"))
        setThirdStatus(false)
    }

    const deleteFourth = () => {
        dispatch(deleteFromSecondCheckboxArray("если есть более опытные коллеги, не буду мешать им руководить"))
        setFourthStatus(false)
    }

    const deleteFifth = () => {
        dispatch(deleteFromSecondCheckboxArray("это дело руководителя назначать ответственных за задачу"))
        setFifthStatus(false)
    }

    const addFunctions = [addFirst, addSecond, addThird, addFourth, addFifth]

    const deleteFunctions = [deleteFirst, deleteSecond, deleteThird, deleteFourth, deleteFifth]

    const checkboxes = [
        {
            id: 0,
            name: "Вы являетесь начальником в данной группе;",
            status: firstStatus,
        },
        {
            id: 1,
            name: "Вы точно знаете, как решать данную задачу;",
            status: secondStatus,
        },
        {
            id: 2,
            name: "кроме Вас больше некому взять на себя ответственность;",
            status: thirdStatus,
        },
        {
            id: 3,
            name: "если есть более опытные коллеги, не буду мешать им руководить;",
            status: fourthStatus,
        },
        {
            id: 4,
            name: "это дело руководителя назначать ответственных за задачу;",
            status: fifthStatus,

        },
    ]

    return (
        <div className="w-full bg-transparent mb-5">
            <div className="w-full">
                <div className="formTextareaLabel">
                    {question}
                    {
                        checkboxes.map((checkbox) => (
                            <CheckboxPresentation key={checkbox.id} name={checkbox.name} status={checkbox.status} addFunction={addFunctions[checkbox.id]} deleteFunction={deleteFunctions[checkbox.id]} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CheckboxSecondQuestion