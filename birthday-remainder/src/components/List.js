import React from 'react'

const List = ({info}) => {
  return (
    <ul>
        {iterate(info)}
    </ul>
  )
}

export default List


const iterate = (data) => {
    if(!data) return;
    return (
        <>
            {
                data.map((person, index) => {
                    return (
                        <li key={index}>
                            <div className='flex'>
                                <img src={person.img} alt='img'></img>
                                <div className='title'>
                                    <h3 className='name'>{person.name}</h3>
                                    <h5 className='age'>{calculateAge(person.birthday)} years</h5>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}

const calculateAge = (personAge) => {
    let year = new Date(personAge).getFullYear()
    let currentYear = new Date().getFullYear()
    
    let age = currentYear - year
    return age;
}