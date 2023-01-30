import styled from 'styled-components'
import { mobile } from '../../responsive';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
    
  ), url('https://images.pexels.com/photos/1006994/pexels-photo-1006994.jpeg') center ;
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
export const Error = styled.h3`
  color: red;
  font-size: 16px;
`

export const Wrapper = styled.div`
 box-shadow: 0px -2px 30px -2px rgba(255,255,255,0.75);
-webkit-box-shadow: 0px -2px 30px -2px rgba(255,255,255,0.75);
-moz-box-shadow: 0px -2px 30px -2px rgba(255,255,255,0.75);
  width: 25%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);

  ${mobile({ width: '75%' })}
`;
export const Button = styled.button`
  background-color: teal;
  padding: 15px 20px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 28px;
  color: white;
  border: none;
  width: 40%;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #008060;
  }
`;
export const Title = styled.h1`
color: white;
  font-size: 24px;
  font-weight: 600;
`;
export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.5);
  margin: 10px 0px ;
  font-size: 18px;
  min-width: 40%;
  padding: 10px;
  outline: none;
  border: none;
  flex: 1;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  `;
export const Link = styled.a`
  color: white;
  text-decoration: none;
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`

//'https://images.pexels.com/photos/265705/pexels-photo-265705.jpeg'