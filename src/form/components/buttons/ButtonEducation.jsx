import {React, useState, useEffect, useRef} from 'react'

import {useDispatch} from 'react-redux'
import {addEducation, deleteEducation} from '../../features/counter/MainInfoReducer'

import Popup from '../popups/Popup'

const ButtonEducation = () => {
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

    const firstColumnOnChange = (event) => {
        setFirstColumn(event.target.value)
    }

    const secondColumnOnChange = (event) => {
        setSecondColumn(event.target.value)
    }

    const thirdColumnOnChange = (event) => {
        setThirdColumn(event.target.value)
    }

    const array = [
        {
            placeholder: "Год поступления и окончания",
            value: firstColumn,
            myFunction: firstColumnOnChange,
        },
        {
            placeholder: "Учебное заведение",
            value: secondColumn,
            myFunction: secondColumnOnChange,
        },
        {
            placeholder: "Факультет, специальность",
            value: thirdColumn,
            myFunction: thirdColumnOnChange,
        },
    ]

    const showPopup = () => {
        setIsOpen(true)
    }

    const closePopup = () => {
        close()
    }

    const add = () => {

        dispatch(addEducation(
            {
                firstColumn: firstColumn,
                secondColumn: secondColumn,
                thirdColumn: thirdColumn,
            }
        ))

        close()
    }

    const deleteLastEducation = () => {
        dispatch(deleteEducation())
    }

    const close = () => {
        setFirstColumn("")
        setSecondColumn("")
        setThirdColumn("")
        setIsOpen(false)
    }

    return (
        <div ref={popupRef} className="flex justify-center mt-5 mb-5 relative">
            <button className={`buttonStyle mr-2`} onClick={showPopup}>Добавить</button>
            <button className={`buttonStyle`} onClick={deleteLastEducation}>Удалить</button>

            <div className={`${isOpen ? 'active' : 'inactive'} absolute -top-32 formAdaptivePopupWidth z-20`}>
                <Popup array={array} addFunction={add} closeFunction={closePopup} />
            </div>
            
        </div>
    )
}

export default ButtonEducation