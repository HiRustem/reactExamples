import React from 'react'

const Popup = (props) => {
    return (
        <div className={`bg-white flex flex-col adaptiveInputWidth placeholderText rounded-xl shadow-lg`}>
            <div className={`flex flex-col w-3/4 m-auto justify-center mt-10`}>
                {
                    props.array.map((object, index) => (
                        <input key={index} value={object.value} onChange={object.myFunction} placeholder={object.placeholder} className="formPlaceholderText formInput border-2 border-orange-500 rounded-xl pl-1 mt-2 formMainText" />
                    ))
                }
            </div>
            <div className="flex flex-row justify-center mt-5 mb-3">
                <button className="buttonStyle mr-2 formMainText" onClick={props.addFunction}>Сохранить</button>
                <button className="buttonStyle formMainText" onClick={props.closeFunction}>Закрыть</button>
            </div>
        </div>
    )
}

export default Popup