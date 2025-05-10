import React from 'react'
type ButtonProps = {
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void
}

const Button = ({clickHandler}: ButtonProps) => {
  return (
    <div>
        <button onClick={(event) => clickHandler(event, '1')}>Click me</button>
    </div>
  )
}

export default Button