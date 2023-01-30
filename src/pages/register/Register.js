import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
    
  ), url('https://images.pexels.com/photos/265705/pexels-photo-265705.jpeg') center ;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Agreement = styled.span`
  color: white;
  font-size: 12px;
  margin: 20px 0px;
`;

export const Wrapper = styled.div`
  box-shadow: 0px -2px 30px -2px rgba(255,255,255,0.75);
-webkit-box-shadow: 0px -2px 30px -2px rgba(255,255,255,0.75);
-moz-box-shadow: 0px -2px 30px -2px rgba(255,255,255,0.75);
  width: 40%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);

  ${mobile({ width: '75%' })}
`;
export const Button = styled.button`
  background-color: teal;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 28px;
  color: white;
  border: none;
  width: 40%;

  &:hover {
    background-color: #008060;
  }
`;
export const Title = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 300;
`;
export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.6);
  margin: 20px 10px 0 0 ;
  font-size: 18px;
  min-width: 40%;
  padding: 10px;
  outline: none;
  border: none;
  color: white;
  flex: 1;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

//'https://images.pexels.com/photos/265705/pexels-photo-265705.jpeg'