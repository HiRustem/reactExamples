import { React, useRef, useEffect } from 'react'

const Textarea = ({ question }) => {

    const textareaRef = useRef(null)

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = '0px'
            const scrollHeight = textareaRef.current.scrollHeight
            textareaRef.current.style.height = scrollHeight + 'px'
        }
    }, [question.value])

    return (
        <li className='w-full mb-2'>
            <h1 className='w-full text-justify font-bold'>{question.id}. {question.header}</h1>
            <textarea ref={textareaRef} onChange={question.onChange} className='w-full border-2 border-orange-500 rounded-xl outline-none p-2 resize-none overflow-hidden' />
        </li>
    )
}

export default Textarea