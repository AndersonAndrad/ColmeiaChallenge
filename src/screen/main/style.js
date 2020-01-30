// dependencies
import Styled from 'styled-components';



export const Container = Styled.div`
  max-width: 1100px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    padding-left: 10px; 
  }
`;

export const SearchTeacher = Styled.div`
  display: flex;
  flex-direction: row; 

  input {
    flex: 1;
    margin: 10px 5px 10px 5px;
    color: #f14f16;
    border: 0px;
    background: #fff;

    box-shadow: 10px 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 50px;

    padding: 20px 16px 20px 60px;

    font-size:16px;

  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;

    height: 60px;

    margin: 16px 10px 10px 50px;
    
    padding: 16px 45px 20px 45px;

    border: 0px;
    color: #fff;
    background: #f14f16;

    font-size: 13px;
  }
`;

export const Card = Styled.div`
  display: flex;
  div {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 110px 30px 30px 20px;
    flex-grow: 1;
  }
`;