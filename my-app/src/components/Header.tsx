import React from 'react'
type HeaderProps = {
    children: string
}

const Header = ({children}: HeaderProps) => {
  return (
    <div>{ children }</div>
  )
}

export default Header