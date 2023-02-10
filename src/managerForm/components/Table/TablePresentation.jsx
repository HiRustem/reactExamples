import React from 'react'

const TablePresentation = ({array}) => {
    return (
        <table className='w-full bg-white'>
            <tbody>
                {
                    array.map((row, index) => (
                        <tr key={index}>
                            <td className='border-2 border-orange-500 w-1/6 p-1 font-bold'>{row.name}</td>
                            <td className='border-2 border-orange-500 w-1/6 p-1'>{row.firstValue}</td>
                            <td className='border-2 border-orange-500 w-1/6 p-1'>{row.secondValue}</td>
                            <td className='border-2 border-orange-500 w-1/6 p-1'>{row.thirdValue}</td>
                            <td className='border-2 border-orange-500 w-1/6 p-1'>{row.fourthValue}</td>
                            <td className='border-2 border-orange-500 w-1/6 p-1'>{row.fifthValue}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TablePresentation