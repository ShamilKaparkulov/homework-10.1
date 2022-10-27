import React from 'react'
import styled from 'styled-components'

function UserItem({title,id,url}) {
  return (
    <BoxStyled>
    <DivStyled>
        <h5>{title}</h5>
        <span>{id}</span>

    </DivStyled>

    <img src={url} alt="" />
    </BoxStyled>
  )
}

export default UserItem
const BoxStyled = styled.div`
width: 300px;
height: 400px;
border: 2px solid gray;
gap: 30px;
& > img {
    padding-top: 50px;
}
`

const DivStyled = styled.div`
display: flex;
justify-content:space-between;
text-align: center;
align-items: center;
width: 280px;
height: 100px;
& > h5{
    width: 200px;
    height: 50px;
}
& > span {
    width: 40px;
    height: 40px;
    border: 1px solid black;
 
}
`