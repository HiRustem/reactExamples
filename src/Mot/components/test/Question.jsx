import React from 'react'

import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

const Question = ({ question, array, add, remove }) => {
    return (

        <div className='w-full mb-5'>
            <h1 className='w-full font-bold text-justify mb-2'>{question.id + 1}. {question.text}</h1>

            <ul className='w-full'>
                {
                    question.valuesArray.map((variant) => (
                        <li key={variant.id} className='w-full flex items-center'>
                            <button className={array.includes(variant.id) ? 'hidden' : ''} onClick={() => add(question.id, variant.id, question.quantity)}>
                                <MdCheckBoxOutlineBlank className="text-orange-500 mr-1 active:scale-95" />
                            </button>

                            <button className={array.includes(variant.id) ? '' : 'hidden'} onClick={() => remove(question.id, variant.id)}>
                                <MdCheckBox className="text-orange-500 mr-1 active:scale-95" />
                            </button>

                            <p className='w-full text-justify'>{variant.text}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Question