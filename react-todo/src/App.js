import React, { Component } from "react";
import { Icon } from '@iconify/react';
import styled from "styled-components";
import IconPlus from "./files/IconPlus.png";
import IconMenus from "./files/IconMenus.svg";


const DivHeader = styled.nav`
background-color: #012D5C;
height: 7vh;
display: flex;
justify-content: space-evenly;
align-items: flex-end;
`
const TitleNav = styled.p`
color: white; 
font-size: 1.7rem;
text-transform:lowercase;
transition: all 0.2s ease-in;
font-family: 'Noto Sans', sans-serif;
font-weight:200;
&:hover {
  color: #A86B00;
}
`
const DivMenu = styled.div`
height: 5vh;
background-color: #4876A6;
display: flex;
justify-content: left;
align-items: center;
`
const MenuButton = styled.div`
background-color: transparent;
border:transparent;
width: 7vw;
color: white; 
font-size: 1.5rem;
margin-left: 2rem;
display: flex;
justify-content: space-evenly;
align-items: center;
transition: all 0.2s ease-in;
font-family: 'Noto Sans', sans-serif;
font-weight:500;
&:hover {
  color: white; 
}
@media (min-width: 201px) and (max-width: 500px) {
  width: 20vw;
  margin-left: 0.5rem;
}
`
const Main = styled.main`
height:88vh;
background-color: #012D5C;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction:column;
`
const SectionAddList = styled.section`
width: 85vw;
height:25vh;
background-color:#195EA8;
border-radius:2vw;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top:2rem;
@media (min-width: 201px) and (max-width: 500px){
  flex-direction:column-reverse;
  height:30vh;
}
`
const ContainerGrid = styled.div`
width: 75%;
height:25vh;
display: flex;
justify-content: space-evenly;
align-items: left;
flex-direction:column;
@media (min-width: 201px) and (max-width: 500px){
  width: 80vw;
height:15vh;
}
`
const DivAddList = styled.div`
border-radius:2vw;
width: 59vw;
height:10vh;
display: flex;
justify-content: space-evenly;
align-items: center;
@media (min-width: 201px) and (max-width: 500px){
  width: 80vw;
height:15vh;

}
`
const TitleHome = styled.h1`
font-size: 2.3rem;
padding-left:6rem;
color: white; 
font-family: 'Noto Sans', sans-serif;
@media (min-width: 201px) and (max-width: 500px){
  display:none;
}
`
const InputTarefas = styled.input`
width: 50vw;
height:5vh;
border:transparent;
border-radius:2vw;
padding-left:1rem;
font-size: 1.1rem;
font-family: 'Noto Sans', sans-serif;
@media (min-width: 201px) and (max-width: 500px){
  width: 50vw;
  height:7vh;

}
`
const ButtonAdd = styled.button`
width:4vw;
height:6vh;
border: transparent;
background-image: url(${IconPlus});
background-size:contain;
background-position:center;
background-repeat:no-repeat;
background-color:transparent;
transition: all 0.2s ease-in-out;
&:focus{
width:4vw;
height:6.5vh;
}
@media (min-width: 201px) and (max-width: 500px){
  width:8vw;
}&:focus{
width:9vw;
}
`
const DivTime = styled.div`
width: 16vw;
height:17vh;
background-color:#A86B00;
border-radius:2vw;
display: flex;
justify-content: space-evenly;
align-items: center;
@media (min-width: 201px) and (max-width: 500px){
  width: 50vw;
  height:10vh;
}
`
const TitleData = styled.h2`
text-align:center;
font-size: 1.3rem;
color:white;
font-family: 'Noto Sans', sans-serif;
word-wrap:break-word;
letter-spacing:0.1em;
`
const SectionAddItem = styled.section`
width: 80vw;
height:45vh;
background-color:#195EA8;
border-radius:2vw 2vw 0vw 0vw ;
`
const UlMap = styled.ul`
/* border:solid red; */
width: 79vw;
height:43vh;
border-radius:2vw ;
display: flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
overflow-x: hidden;
margin-top:0.4rem;
`
const ListItem = styled.li`
background-color: white;
list-style: none;
width: 75vw;
height:fit;
margin-left: 1rem;
border-radius:2vw;
padding:0.4rem 0.4rem 0.4rem 1rem;
margin:1rem 0.5rem 1rem 1rem;
display: flex;
justify-content:space-between;
align-items:center;
font-family: 'Noto Sans', sans-serif;
`
const ButtonDelete = styled.button`
margin-right:1rem;
min-width:4vw;
height:4vh;
border: transparent;
background-image: url(${IconMenus});
background-size:contain;
background-position:center;
background-repeat:no-repeat;
background-color:transparent;
@media (min-width: 201px) and (max-width: 500px){
  min-width:6vw;
  height:6vh;
  margin-right:1rem;
}
`
class Todo extends Component {

  state = {
    tarefa: "",
    lista: [],
  }

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  addTarefa = () => {
    if (this.state.tarefa === "") {
      return;
    };
    
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa,
        id: Math.random()
      }),
      tarefa: "",
    });
  };

  DeleteTarefa =(id) =>{
      this.setState({
        lista:this.state.lista.filter((item)=>{
          return item.id == !id; //eu ainda nao etneid essa parte 
        }),
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

        <DivMenu>
          <MenuButton>
            <Icon icon="material-symbols:list-alt-add-outline" />
            Lista
          </MenuButton>
        </DivMenu>

        <Main>
          <SectionAddList>

            <ContainerGrid>
              <TitleHome>Organize suas tarefas</TitleHome>
              <DivAddList>
                <ButtonAdd onClick={this.addTarefa}> </ButtonAdd>
                <form>
                  <InputTarefas
                    onChange={this.handleChange}
                    value={this.state.tarefa}
                    placeholder="Adicione sua tarefa..."
                  />
                </form>
              </DivAddList>
            </ContainerGrid>

            <DivTime>
              <TitleData>
                Terça-feira
                10 Mar, 2023
              </TitleData>
            </DivTime>
          </SectionAddList>

          {/* ---------------------------------------------------------------------------------------------------------------- */}
          <SectionAddItem>
            <UlMap>
              {this.state.lista.map((item) => (
     
                  <ListItem> {item.tarefa} 
                   <ButtonDelete onClick={() =>{
                    this.DeleteTarefa(item.id)
                   }}> </ButtonDelete>
                    </ListItem>
            
              ))}

            </UlMap>
          </SectionAddItem>
          {/* ---------------------------------------------------------------------------------------------------------------- */}

        </Main>
      </>
    )
  }

}
export default Todo;
