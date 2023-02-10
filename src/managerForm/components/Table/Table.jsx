import {React, useState, useRef, useEffect} from 'react'

import TablePresentation from './TablePresentation'

import {useDispatch, useSelector} from 'react-redux'

import {addSeventeenAnswer, deleteSeventeenAnswer} from '../../features/counter/FormReducer'

import TablePopup from './TablePopup'

const Table = ({name}) => {

    const dispatch = useDispatch()

    const array = useSelector((state) => state.form.seventeenAnswer)

    const [index, incrementIndex] = useState(0)

    const [isShow, setIsShow] = useState(false)

    let popupRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if (!popupRef.current.contains(e.target)) {
                setIsShow(false)
            }
        }

        document.addEventListener("mousedown", handler)

        return() => {
            document.removeEventListener("mousedown", handler)
        }
    })

    const showPopup = () => {
        if (index !== 4) {
            setIsShow(true)
        }
    }

    const deleteAnswer = () => {
        dispatch(deleteSeventeenAnswer(index))

        if (index === 0) {
            incrementIndex(0)
        } else {
            incrementIndex(index - 1)
        }
    }

    const [firstInput, setFirstInput] = useState('')
    const [secondInput, setSecondInput] = useState('')
    const [thirdInput, setThirdInput] = useState('')
    const [fourthInput, setFourthInput] = useState('')
    const [fifthInput, setFifthInput] = useState('')

    const firstInputOnChange = (event) => {
        setFirstInput(event.target.value)
    }

    const secondInputOnChange = (event) => {
        setSecondInput(event.target.value)
    }

    const thirdInputOnChange = (event) => {
        setThirdInput(event.target.value)
    }

    const fourthInputOnChange = (event) => {
        setFourthInput(event.target.value)
    }

    const fifthInputOnChange = (event) => {
        setFifthInput(event.target.value)
    }

    const clean = () => {
        setFirstInput('')
        setSecondInput('')
        setThirdInput('')
        setFourthInput('')
        setFifthInput('')
    }

    const closePopup = () => {
        clean()
        setIsShow(false)
    }

    const addAnswer = () => {
        dispatch(addSeventeenAnswer({
            index: index,
            firstInput: firstInput,
            secondInput: secondInput,
            thirdInput: thirdInput,
            fourthInput: fourthInput,
            fifthInput: fifthInput,
        }))

        incrementIndex(index + 1)
        
        closePopup()
    }

    const headers = ["Критерии", "2022г", "2021г", "2020г"]

    const inputs = [
        {
            id: 1,
            value: firstInput,
            onChange: firstInputOnChange,
        },
        {
            id: 2,
            value: secondInput,
            onChange: secondInputOnChange,
        },
        {
            id: 3,
            value: thirdInput,
            onChange: thirdInputOnChange,
        },
        {
            id: 4,
            value: fourthInput,
            onChange: fourthInputOnChange,
        },
        {
            id: 5,
            value: fifthInput,
            onChange: fifthInputOnChange,
        },
    ]

    return (
        <div className='w-full mb-2 relative'>
            <h1 className='w-full text-justify font-bold'>{name}</h1>

            <div ref={popupRef} className={`${isShow ? 'active' : 'inactive'} w-full absolute z-20 top-0 mt-5`}>
                <TablePopup headers={headers} inputsArray={inputs} index={index} addFunction={addAnswer} closeFunction={closePopup} />
            </div>

            <TablePresentation array={array} />

            <div className='w-full flex justify-center mt-5'>
                <button onClick={() => showPopup(index)} className='buttonStyle mr-2'>Добавить</button>
                <button onClick={deleteAnswer} className='buttonStyle'>Удалить</button>
            </div>
        </div>
    )
}

export default Table