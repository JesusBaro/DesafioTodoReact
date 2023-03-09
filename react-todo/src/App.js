import React, { Component } from "react";
import { Icon } from '@iconify/react';
import styled from "styled-components";

const DivHeader = styled.nav`
background-color: gray;
height: 7vh;
display: flex;
justify-content: space-evenly;
align-items: flex-end;
`
const TitleNav = styled.p`
color: white; 
font-size: 1.7rem;
transition: all 0.3s ease-in;
&:hover {
text-decoration:underline;
}
`
const Main = styled.main`
height:93vh;
background-color: purple;
display: flex;
justify-content: center;
align-items: center;
`
const DivButton = styled.div`
height: 5vw;
background-color: blue;
display: flex;
justify-content: left;
align-items: center;
`

const Menu = styled.button`
background-color: transparent;
/* border: transparent; */
width: 8vw;
color: white; 
font-size: 1.5rem;
margin-left: 2rem;

`
//----------------------------------------------------------
// @media (min-width: 201px) and (max-width: 500px){
// const DivHeader = styled.nav`
// background-color: gray;
// height: 7vh;
// display: flex;
// justify-content: space-evenly;
//  align-items: flex-end;
//   `
// }


class Todo extends Component {

  state = {
    inputData: "",
    Listdata: [],
    Imagens:{
    }
  }

  render() {
    return (
      <>
    <DivHeader>  
      <TitleNav>Dia</TitleNav> 
      <TitleNav>Semana</TitleNav>
       <TitleNav>Mês</TitleNav>
       <TitleNav>Ano</TitleNav>
     </DivHeader>

     <DivButton> 
       <Menu> 
       Lista
       </Menu> 
       
     </DivButton>
     <Main>


     </Main>


      </>
    );
  }

}
export default Todo;
