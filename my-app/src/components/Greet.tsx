import React from 'react'
type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

const Greet = ({name, messageCount, isLoggedIn}: GreetProps) => {
  return (
    <div>
        {
            isLoggedIn ? 
            <p>Welcome mr.{name} you have {messageCount} unread message</p> : 
            'welcome'
        }
    </div>
  )
}

export default Greet