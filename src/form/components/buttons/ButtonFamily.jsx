import {React, useState, useRef, useEffect} from 'react'

import {useDispatch} from 'react-redux'
import {addFamily, deleteFamily} from '../../features/counter/MainInfoReducer'

import Popup from '../popups/Popup'

const ButtonFamily = () => {
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)

    let popupRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if (!popupRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handler)

        return() => {
            document.removeEventListener("mousedown", handler)
        }
    })

    const [firstColumn, setFirstColumn] = useState("")
    const [secondColumn, setSecondColumn] = useState("")
    const [thirdColumn, setThirdColumn] = useState("")
    const [fourthColumn, setFourthColumn] = useState("")
    const [fifthColumn, setFifthColumn] = useState("")

    const firstColumnOnChange = (event) => {
        setFirstColumn(event.target.value)
    }

    const secondColumnOnChange = (event) => {
        setSecondColumn(event.target.value)
    }

    const thirdColumnOnChange = (event) => {
        setThirdColumn(event.target.value)
    }

    const fourthColumnOnChange = (event) => {
        setFourthColumn(event.target.value)
    }

    const fifthColumnOnChange = (event) => {
        setFifthColumn(event.target.value)
    }

    const array = [
        {
            placeholder: "Степень родства",
            value: firstColumn,
            myFunction: firstColumnOnChange,
        },
        {
            placeholder: "Ф.И.О.",
            value: secondColumn,
            myFunction: secondColumnOnChange,
        },
        {
            placeholder: "Дата рождения",
            value: thirdColumn,
            myFunction: thirdColumnOnChange,
        },
        {
            placeholder: "Место работы, должность",
            value: fourthColumn,
            myFunction: fourthColumnOnChange,
        },
        {
            placeholder: "Место жительства",
            value: fifthColumn,
            myFunction: fifthColumnOnChange,
        },
    ]

    const showPopup = () => {
        setIsOpen(true)
    }

    const closePopup = () => {
        close()
    }

    const add = () => {
        dispatch(addFamily(
            {
                firstColumn: firstColumn,
                secondColumn: secondColumn,
                thirdColumn: thirdColumn,
                fourthColumn: fourthColumn,
                fifthColumn: fifthColumn,
            }
        ))
        close()
    }

    const deleteLastAdditionalInfo = () => {
        dispatch(deleteFamily())
    }

    const close = () => {
        setFirstColumn("")
        setSecondColumn("")
        setThirdColumn("")
        setFourthColumn("")
        setFifthColumn("")
        setIsOpen(false)
    }

    return (
        <div ref={popupRef} className="flex justify-center mt-5 mb-5 relative">
            <button className="buttonStyle mr-2" onClick={showPopup}>Добавить</button>
            <button className="buttonStyle" onClick={deleteLastAdditionalInfo}>Удалить</button>
            
            <div className={`${isOpen ? 'active' : 'inactive'} absolute -top-40 formAdaptivePopupWidth z-20`}>
                <Popup array={array} addFunction={add} closeFunction={closePopup} />
            </div>
            
        </div>
    )
}

export default ButtonFamily