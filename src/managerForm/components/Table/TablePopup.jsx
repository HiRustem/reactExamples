import React from 'react'

const TablePopup = ({headers, inputsArray, index, addFunction, closeFunction}) => {
    return (
        <div className='w-full m-auto border-2 border-orange-500 rounded-xl bg-white text-center'>
            <h1 className='font-bold mb-5'>{headers[index]}</h1>

            <div className='w-full flex managerTestInputFlex mb-5'>   
                {
                    inputsArray.map((input) => (
                        <input key={input.id} value={input.value} onChange={input.onChange} className='managerTestInputSize border-2 border-orange-500 rounded-lg pl-2 outline-none' />
                    ))
                }
            </div>

            <div className='w-full flex justify-center mb-5'>
                <button onClick={addFunction} className='buttonStyle mr-2'>Сохранить</button>
                <button onClick={closeFunction} className='buttonStyle'>Закрыть</button>
            </div>
        </div>
    )
}

export default TablePopup