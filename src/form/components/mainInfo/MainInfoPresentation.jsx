import React from 'react'

const MainInfoPresentation = (props) => {

  const {id, name, style, placeholder, myFunction} = props
  
  return (

    <label className={`m-auto flex ${id === 2 || id === 3 ? 'formStaticFlex' : 'formAdaptiveFlex'} formLabel`}>
      {id}. {name}
      <input
        className={`${style} inputStyle`} 
        placeholder={placeholder}
        onChange={myFunction}
      />
    </label>
  )
}

export default MainInfoPresentation