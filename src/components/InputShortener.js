import React, { useState } from 'react'

const InputShortener = ({ setInputValue }) => {

  const [value, setValue] = useState('')

  const handleClick = () => {
    setInputValue(value)
    setValue('')
  }

  return (
    <div className='input'>
        <input
          type="text"
          placeholder='Paste the link here'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Shorten URL</button>
    </div>
  )
}

export default InputShortener