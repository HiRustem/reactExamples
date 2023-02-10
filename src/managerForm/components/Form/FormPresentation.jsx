import React from 'react'

import Table from '../Table/Table'
import Textarea from '../Textarea/Textarea'

const FormPresentation = ({ questions }) => {
    return (
        <div className='w-full'>
            <ul className='managerTestSize m-auto'>
                {
                    questions.map((question) => (
                        question.id !== 17 ?
                            <Textarea key={question.id} question={question} />
                        :
                        <Table key={question.id} name={`${question.id}. ${question.header}`} />
                    ))
                }
            </ul>
        </div>
    )
}

export default FormPresentation