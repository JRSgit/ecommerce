import styled from 'styled-components'
import { mobile } from '../../responsive';

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({ height: '30vh' })}
`
export const Info = styled.div`
  background-color: rgba(0,0,0, 0.3);
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

`
export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`
export const Button = styled.button`
  background-color: white;
  transition: all 0.5s ease;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
  border: none;
  color: gray;

  &:hover{
    transform: scale(1.5);
  }
`
