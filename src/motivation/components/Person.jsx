import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPersonName, setPersonSurname, setPersonMiddleName } from '../features/counter/PersonReducer'

const Person = () => {

  const dispatch = useDispatch()

  const isFinish = useSelector((state) => state.result.finish)

  const setName = (event) => {
    dispatch(setPersonName(event.target.value))
  }

  const setSurname = (event) => {
    dispatch(setPersonSurname(event.target.value))
  }

  const setMiddleName = (event) => {
    dispatch(setPersonMiddleName(event.target.value))
  }

  return (
    <div className={`${isFinish === true ? 'hidden' : ''} w-full h-auto mb-5 flex justify-center`}>
      <form className="flex personFlex">
        <input 
          className="personInput border-solid border-2 border-orange-500 rounded-full outline-none" 
          type="text" 
          onChange={setSurname}
          placeholder="Введите фамилию"
        />

        <input 
          className="personInput border-solid border-2 border-orange-500 rounded-full outline-none" 
          type="text"
          onChange={setName}
          placeholder="Введите имя"
        />

        <input 
          className="personInput border-solid border-2 border-orange-500 rounded-full outline-none" 
          type="text" 
          onChange={setMiddleName}
          placeholder="Введите отчество"
        />
      </form>
        
      
    </div>
  )
}

export default Person
