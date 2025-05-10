import React, { ChangeEvent } from 'react'
type InputProps = {
    value: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, changeHandler}: InputProps) => {
  return (
    <div className='input'>
        <input type='text' value={value} onChange={changeHandler} />
    </div>
  )
}

export default Input