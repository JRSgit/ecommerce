import styled from 'styled-components'
import { mobile } from '../../responsive';

export const Container = styled.div`
  background-color: #fcf5f5;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 60vh;
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  ${mobile({ width: '80%' })}
`;
export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  ${mobile({ textAlign: 'center' })}
  `;
export const Button = styled.button`
  background-color: teal;
  cursor: pointer;
  border: none;
  color: white;
  flex: 1;
  `;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  `;
export const Input = styled.input`
  padding-left: 20px;
  font-size: 20px;
  border: none;
  outline: none;
  flex: 8;
  
  `;
