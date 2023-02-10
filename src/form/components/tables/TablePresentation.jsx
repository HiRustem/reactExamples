import React from 'react'

const TablePresentation = (props) => {
    return (
        <table className="w-1/2 m-auto bg-white text-center">
            <caption className="formCaption">{props.caption}</caption>
            <tbody>
                {
                    props.array.map((education, index) => (
                        <tr key={index} className="formTr">
                            {
                                Object.keys(education).map((key) => (
                                    <td key={key} className="formTd">{education[key]}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TablePresentation