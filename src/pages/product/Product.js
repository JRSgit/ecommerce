import styled from 'styled-components'
import { mobile } from '../../responsive';

export const Container = styled.div`
  
`;
export const Wapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;
export const ImgContainer = styled.div`
  flex: 1;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: '10px' })}
`;
export const Title = styled.h1`
  font-weight: 200;
`;
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;

export const Desc = styled.p`
  margin: 20px 0;
`
export const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`
export const FilterContainer = styled.div`
  margin: 30px 0px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`
export const Filter = styled.div`
  align-items: center;
  display: flex;
`
export const FilterColor = styled.div`
  background-color: ${props => props.color};
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`
export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
export const FilterSizerOption = styled.option`

`
export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
export const AddContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  display: flex;
  width: 50%;

  ${mobile({ width: '100%' })}
  
`
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Button = styled.button`
  border: 2px solid teal;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  padding: 15px;
  
  &:hover {
    background-color: #f8f4f4;
  }
`
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`