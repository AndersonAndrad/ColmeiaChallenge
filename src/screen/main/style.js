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

  @media (max-width: 375px) {
  max-width: 375px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

    h1 {
      font-size: 14px;
    }
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

  @media (max-width: 375px) {
 
      input {
      flex: 1;
      margin: 5px 0px 5px 2.5px;
      color: #f14f16;
      border: 0px;
      background: #fff;

      box-shadow: 10px 0 20px rgba(0, 0, 0, 0.1);
      border-radius: 50px;

      padding: 0px 0px 0px 30px;

      font-size:14px;
    }

      button {
      
      justify-content: center;
      align-items: center;
      border-radius: 50px;

      height: 60px;

      margin: 16px 10px 10px 2px;
      
      padding: 16px 45px 20px 45px;

      border: 0px;
      color: #fff;
      background: #f14f16;

      font-size: 13px;
    }
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
    max-width: 500px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 110px 30px 30px 20px;
    
  div {
    border-radius: 10px;
  }

  @media (max-width: 375px) {
    max-width: 375px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin: 20px -10px 0px -10px;
    
  }
`;

export const Perfil = Styled.div`
  display: flex;
  h1 {
    color: #f14f16;
    margin-left: 120px;
    
  }

  img {
      height: 120px;
      width: 120px;
      border-radius: 100px;

      border: 2px solid #4d4d4d;
    }

  div {

    p {
      margin-left: 330px;
    }
  }

  @media (max-width: 375px) {
    flex-direction: column; 
    background: #eee;

    img {
      margin-left: 60px;
      height: 120px;
      width: 120px;
      border-radius: 100px;

      border: 2px solid #4d4d4d;
    }

    h1 {
    color: #f14f16;
    margin-left: -10px;
    }

    div {
        p {
          margin-left: 0px;
        }
      }
`;

export const Subjects = Styled.div`
  
  div {
    display: flex;
    //background: #333;
    margin-left: 60px;

    p {
      margin: 2px 15px 2px 15px;
      padding: 5px 15px 5px 15px;
      border: 1px solid #f14f16;
      border-radius: 50px;
    }

    @media (max-width: 375px) {
      background: #eef134;
      margin-left: 0px;
      flex-direction: column;
      
      & + p {
        margin: 10px 0px 0px 0px;
      }

      p {
        justify-content:center;
        align-items: center;
        padding: 2px 2px 2px 2px;
        border: 1px solid #f14f16;
        border-radius: 50px;
      }

    }
  }
`;

export const Bio = Styled.div`
  p {
    color: #919191
  }
`;

export const Select = Styled.div`
  display: flex;
  
  button {
      border-radius: 50px;

      height: 60px;

      margin: 2px 2px 2px 2px;

      margin-left: 270px;
      
      padding: 0px 50px 0px 50px;

      border: 0px;
      color: #fff;
      background: #f14f16;

      font-size: 13px;
  }
`;