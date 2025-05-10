import React from 'react'
type PersonProps = {
    names: {
        fname: string,
        lname: string
    }[]
}

const PersonList = ({names}: PersonProps) => {
  return (
    <div className='list'>
        {names.map(name => {
            return (
                <div key={name.fname}>
                    <h1>{name.fname} {name.lname}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default PersonList