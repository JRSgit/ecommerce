import styled from 'styled-components'
import { mobile } from '../../responsive';

export const Container = styled.div`
  
`;


export const Wapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
export const TopTexts = styled.div`
  
`;
export const Toptext = styled.span`
  ${mobile({ display: 'none' })}
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

export const Info = styled.span`
  flex: 3;
`
export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  height: 50vh;
`
export const ProductSize = styled.span`

`;


export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;




export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

export const ProductName = styled.span`

`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
  `;

export const Image = styled.img`
  width: 200px;
  transition: 0.5s;
  object-fit: cover;

`;

export const ProductId = styled.div`

`;

export const Details = styled.span`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`;
export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  margin: 10px 0px;
  height: 2px;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SumaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '500'};
  font-size: ${props => props.type === 'total' && '24px'};
`;

export const SumaryItemText = styled.span`

`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export const SumaryItemPrice = styled.span`

`;

