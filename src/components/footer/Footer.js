import styled from 'styled-components'
import { mobile } from '../../responsive';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;

  ${mobile({ flexDirection: 'column' })}
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  `;
export const Center = styled.div`
  flex: 1; 
  padding: 20px;

  ${mobile({ display: 'none' })}
`
export const Title = styled.h3`
  margin-bottom: 30px;
`
export const List = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  margin: 0;
  padding: 0;

`
export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

export const Right = styled.div`
  flex: 1; 
  
  ${mobile({ backgroundColor: '#fff8f8' })}
`
export const ContantItem = styled.div`
  margin-bottom: 20px;
  align-items: center;
  display: flex;
`
export const Payment = styled.img`
  width: 50%;
`
export const SocialContainer = styled.div`
  flex: 1;  
  display: flex;
`;

export const SocialIcon = styled.div`
  background-color:  ${props => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  display: flex;
  width: 50px;
  height: 50px;
  color: white;
  margin: 20px;
`
export const Logo = styled.h1`

`
export const Desc = styled.p`
  margin: 20px 0;
`