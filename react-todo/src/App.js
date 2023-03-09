import React, { Component } from "react";
import styled from "styled-components";

const DivHeader = styled.div`
height: 7vh;
background-color: gray;
display: flex;
justify-content: space-evenly;
align-items: flex-end;
`

const Main = styled.main`
height:120vh;
background-color: purple;
display: flex;
justify-content: center;
align-items: center;
`

const Menu = styled.p`
width: 20vw;
color: white; 
font-size: 2rem
`
const DivButton = styled.div`
height: 5vw;
background-color: blue;
`

// const Iframe = styled.iframe`
// border:solid  transparent;
//        width:60vw ;
//        height:70vh;
//         frameborder:0 ;
//         scrolling:yes;`
        

class Todo extends Component {

  state = {
    inputData: "",
    Listdata: []
  }

  render() {
    return (
      <>
    <DivHeader>  
      <p>Dia</p> 
      <p>Semana</p>
       <p>Mês</p>
       <p>Ano</p>
     </DivHeader>

     <DivButton> 
       <Menu> x Lista </Menu> 
       
     </DivButton>
     <Main>




      {/* <div>
     <Iframe
      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&title=Agenda%20%20Vai%20na%20Web&src=Y19jbGFzc3Jvb21mOWNkMWE5Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23202124"
       >
       </Iframe>
      </div> */}

     </Main>


      </>
    );
  }

}
export default Todo;
