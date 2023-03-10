import React, { Component } from "react";
import { Icon } from '@iconify/react';
import styled from "styled-components";
import IconPlus from "./files/IconPlus.png"

// Input para adicionar a tarefa
// botão para adicionar a tarefa em uma lista
// botão para apagar um item dessa lista
// estilização

// Bônus
// Limpar o input ao adicionar uma tarefa
// Não pode adicionar uma tarefa com o input vazio

const DivHeader = styled.nav`
background-color: #012D5C;
height: 9vh;
display: flex;
justify-content: space-evenly;
align-items: flex-end;
`
const TitleNav = styled.p`
color: white; 
font-size: 1.7rem;
transition: all 0.2s ease-in;
&:hover {
  color: #A86B00;
}
`
const DivAddList = styled.div`
border: solid pink;
width: 59vw;
height:10vh;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Div2 = styled.div`
border: solid red;
width: 60vw;
height:20vh;
display: flex;
justify-content: center;
align-items: left;
flex-direction:column;
`
const DivButton = styled.div`
height: 7vh;
background-color: #4876A6;
display: flex;
justify-content: left;
align-items: center;
`

const MenuButton = styled.button`
background-color: transparent;
border: transparent;
width: 7.5vw;
color: white; 
font-size: 1.5rem;
margin-left: 2rem;
display: flex;
justify-content: space-evenly;
align-items: center;
transition: all 0.2s ease-in;
text-transform:lowercase;
&:hover {
  color: white; 
}
`

const Main = styled.main`
height:90vh;
background-color: #012D5C;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction:column;
`
const SectionAddList = styled.section`
width: 85vw;
height:35vh;
background-color:#195EA8;
border-radius:4vw;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const DivTime = styled.div`
width: 19vw;
height:25vh;
background-color:#A86B00;
border-radius:4vw;
display: flex;
justify-content: center;
align-items: center;

`
const TitleData = styled.h2`
text-align:center;
font-size: 1.3rem;
color:white;
`
// const DivInput =styled.div`
// width: 55vw;
// height:10vh;
// background-color:white;
// display: flex;
// justify-content: space-evenly;
// align-items: center;
// border:solid red;
// border-radius:4vw;
// `

const InputTarefas = styled.input`
width: 50vw;
height:6vh;
border:transparent;
border-radius:4vw;
padding-left:1rem;
font-size: 1.1rem;
`
const ButtonAdd = styled.button`
  width:3vw;
  height:3vw;
border:transparent;
background-image:url(${IconPlus});
background-size:cover;
background-color:transparent;
transition: all 0.1s ease-in;
&:focus {
  width:3.2vw;
  height:3.2vw;
}
`

//----------------------------------------------------------
// como  add uma media query?????????

// @media (min-width: 201px) and (max-width: 500px){
// const DivHeader = styled.nav`
// background-color: gray;
// height: 7vh;
// display: flex;
// justify-content: space-evenly;
//  align-items: flex-end;
//   `
// }

export const BoxImg = styled.figure`
    width:10%;
    height:20vh;
    
    @media(max-width:400px){
        width:40%;
    }
`


class Todo extends Component {

  state = {
    tarefa:"",
    Listdata: [],
  }

  handleChange=(event) =>{
this.setState({
  tarefa: event.target.value //input dentro da tarefa
});
  }

  addTarefa =() =>{

    this.setSate({
      lista:this.setState.lista.concat({
        tarefa:this.state.tarefas //juntando a lista e a tarefa numa nova array
      })
    })
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
          <MenuButton>
            <Icon icon="material-symbols:list-alt-add-outline" />
            Lista
          </MenuButton>
        </DivButton>

        <Main>
          <SectionAddList>

            <Div2>
                <h1>To do</h1> 

              <DivAddList> 

{/* ---------------------------------------- */}
              <ButtonAdd 
              onClick={this.addTarefa}
               > 

              </ButtonAdd>

              <InputTarefas
              onChange={this.handleChange} 
              value={this.state.tarefa}
                placeholder="Adicione sua tarefa..."/>


                </DivAddList>

              </Div2>
         

            <DivTime>
              <TitleData>
                Terça-feira
                  <br/>
             10 de Mar, 2023
              </TitleData>
            </DivTime>
          </SectionAddList>



          <SectionAddList>
{this.state.lista.map((item)=>(
  <li> {item.tarefa}</li>
))}
          </SectionAddList>
          {/* butao plus */}
          {/* <Icon onClick={this.TitleNav} icon="material-symbols:add-circle-rounded" /> */}

        </Main>
      </>
    );
  }

}
export default Todo;
