import React from 'react'
import { useSelector } from 'react-redux'

const Finish = () => {
    const isFinish = useSelector((state) => state.result.finish)

    return (
        <div className={`${isFinish === true ? '' : 'hidden'} w-full text-center`}>
            <p className={`w-1/4 m-auto p-2 border-2 border-orange-500 bg-white rounded-xl`}>Результат успешно отправлен</p>
        </div>
      )
}

export default Finish