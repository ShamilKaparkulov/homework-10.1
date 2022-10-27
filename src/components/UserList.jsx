import React, { useEffect, useState } from 'react'
import UserItem from './UserItem';
import styled from 'styled-components';

function UserList() {
    const [getUser,setGetUser] = useState([])
    console.log(getUser);
useEffect(() => {
    const getRequest = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        const data = await response.json()
 setGetUser(data)
    }
    getRequest()
},[])

  return (
    <ConteinerStyled>
        {getUser.map((el) => {
         return   <UserItem key={el.id} title={el.title} id={el.id} url={el.thumbnailUrl
}/>
        })}
    </ConteinerStyled>
  )
}

export default UserList


const ConteinerStyled = styled.div`
width: 950px;
height: 100%;
display: grid;
  grid-template-columns: 1fr 1fr 1fr;
margin: auto;
border:2px solid black
`