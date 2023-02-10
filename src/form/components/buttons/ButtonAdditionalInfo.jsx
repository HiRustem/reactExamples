import {React, useRef, useEffect, useState} from 'react'

import {useDispatch} from 'react-redux'
import {addAdditionalInfo, deleteAdditionalInfo} from '../../features/counter/MainInfoReducer'

import Popup from '../popups/Popup'

const ButtonAdditionalInfo = () => {
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

    const array = [
        {
            placeholder: "Степень владения ПК (программы)",
            value: firstColumn,
            myFunction: firstColumnOnChange,
        },
        {
            placeholder: "Степень владения иностранными языками (указать какими)",
            value: secondColumn,
            myFunction: secondColumnOnChange,
        },
        {
            placeholder: "Наличие водительских прав и а/м",
            value: thirdColumn,
            myFunction: thirdColumnOnChange,
        },
        {
            placeholder: "Судимость (есть, нет), статья",
            value: fourthColumn,
            myFunction: fourthColumnOnChange,
        },
    ]

    const showPopup = () => {
        setIsOpen(true)
    }

    const close = () => {
        setFirstColumn("")
        setSecondColumn("")
        setThirdColumn("")
        setFourthColumn("")
        setIsOpen(false)
    }

    const closePopup = () => {
        close()
    }

    const add = () => {
        dispatch(addAdditionalInfo(
            {
                firstColumn: firstColumn,
                secondColumn: secondColumn,
                thirdColumn: thirdColumn,
                fourthColumn: fourthColumn,
            }
        ))
        close()
    }

    const deleteLastAdditionalInfo = () => {
        dispatch(deleteAdditionalInfo())
    }

    return (
        <div ref={popupRef} className="w-full flex justify-center mt-5 mb-5 relative">
            <button className="buttonStyle mr-2" onClick={showPopup}>Добавить</button>
            <button className="buttonStyle" onClick={deleteLastAdditionalInfo}>Удалить</button>
            
            <div className={`${isOpen ? 'active' : 'inactive'} absolute -top-40 formAdaptivePopupWidth z-20`}>
                <Popup array={array} addFunction={add} closeFunction={closePopup} />
            </div>
            
        </div>
    )
}

export default ButtonAdditionalInfo