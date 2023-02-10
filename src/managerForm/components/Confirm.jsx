import {React, useState, useRef} from 'react'

import emailjs from '@emailjs/browser'

import {useDispatch, useSelector} from 'react-redux'

import {analysis, setIsFinished} from '../features/counter/FormReducer'

const Confirm = () => {
    const dispatch = useDispatch()

    //Form
    const form = useRef()

    const [isOpen, setIsOpen] = useState(false)

    const surname = useSelector((state) => state.person.surname)
    const name = useSelector((state) => state.person.name)
    const middleName = useSelector((state) => state.person.middleName) 

    const result = useSelector((state) => state.form.result)

    const open = () => {
        if (name !== '' && surname !== '' && middleName !== '') {
            dispatch(analysis())
            setIsOpen(true)
        } else {
            alert('Заполните поля ФИО')
        }
    }

    const close = () => {
        setIsOpen(false)
    }

    const send = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_iygqvkf',
            'template_xwwjzcf',
            form.current,
            'zaDWd6wxZPFnyEdLP')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })

        close()
        dispatch(setIsFinished(true))
    }

    return (
        <div className='w-full flex flex-row justify-center mt-10 mb-10'>
            <button className={`${isOpen ? 'hidden' : ''} buttonStyle`} onClick={open}>Отправить</button>

            <div className={`${isOpen ? '' : 'hidden'} flex flex-row justify-center`}>
                <form className='w-full flex flex-row justify-center' ref={form} onSubmit={send}>
                    <input name='name' type='hidden' value={`${surname} ${name} ${middleName}`} />
                    <input name='result' type='hidden' value={result} />
                    <input type='submit' value='Да' className='cursor-pointer mr-2 buttonStyle' />
                </form>
                <button onClick={close} className='buttonStyle'>Нет</button>
            </div>
        </div>
    )
}

export default Confirm