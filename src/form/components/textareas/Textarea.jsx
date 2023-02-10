import {React, useRef, useEffect} from 'react'

const Textarea = (props) => {

    const textareaRef = useRef(null)

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = '0px'
            const scrollHeight = textareaRef.current.scrollHeight
            textareaRef.current.style.height = scrollHeight + 'px'
        }
    }, [props.value])

    return (
        <div className="w-full">
            <label className="w-1/2 formTextareaLabel m-auto flex flex-col text-justify">
                {props.name}
                <textarea ref={textareaRef} value={props.value} onChange={props.myFunction} className="formTextarea"/>
            </label>
        </div>
    )
}

export default Textarea