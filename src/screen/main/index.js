// dependencies
import React, {Component} from 'react';

// styled
import {Container, SearchTeacher, Card} from './style';
import {IoIosSearch} from 'react-icons/io';

export default class Main extends Component {
  render(){
    return (
      <Container>
        <h1>So aqui voce encontra os melhores professores !!</h1>
        <SearchTeacher>
          <input placeholder='Ex: Anderson Andrade'/>
          <button><IoIosSearch/>Buscar</button>
        </SearchTeacher>
        <Card>
          <div>
            <h1>Anderson Andrade</h1>
            <p>4.5</p>
            <p>Disciplinas</p>
            <p>Portugues</p>
            <p>matematica</p>
            <p>ingles</p>
            <p>Curriculo</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.</p>
            <p>Brasilia DF</p>
            <button><IoIosSearch/>Buscar</button>
          </div>
          <div>
            <h1>Anderson Andrade</h1>
            <p>4.5</p>
            <p>Disciplinas</p>
            <p>Portugues</p>
            <p>matematica</p>
            <p>ingles</p>
            <p>Curriculo</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.</p>
            <p>Brasilia DF</p>
            <button><IoIosSearch/>Buscar</button>
          </div>  
        </Card>
      </Container>
    );
  }
}