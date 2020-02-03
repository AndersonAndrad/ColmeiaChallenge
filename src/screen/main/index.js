// dependencies
import React, {Component} from 'react';

// styled
import {Container, SearchTeacher, Card, Perfil, Subjects, Bio, Select} from './style';
import {IoIosSearch, IoIosStar} from 'react-icons/io';

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
          <Perfil>
            <img src="https://vignette.wikia.nocookie.net/half-life/images/4/41/G-Man_Alyx_Trailer.jpg/revision/latest?cb=20191122020607&path-prefix=en" alt=""/>
            <div>
              <h1>Anderson Andrade Silva dos santos pereira </h1>
              <p>4.5 <IoIosStar/></p>
            </div>
          </Perfil>
          <Subjects>
            <p>Disciplinas</p>
            <div>
              <p>Portugues</p>
              <p>matematica</p>
              <p>ingles</p>
            </div>
          </Subjects>
          <Bio>
            <h1>Curriculo</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.</p>
          </Bio>
          <Select>
            <p>Brasilia DF</p>
            <button><IoIosSearch/>Buscar</button>
          </Select>
          </div>
        </Card>

        
      </Container>
    );
  }
}