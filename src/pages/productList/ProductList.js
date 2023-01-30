import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  
`;
export const FilterContainer = styled.div`
  justify-content: space-between;
  display: flex;
`;
export const Filter = styled.div`
  margin:20px;
  ${mobile({ padding: '0px 10px', display: 'flex', flexDirection: 'column' })}
`;
export const Title = styled.h1`
  margin: 10px 0px;
  
  `;
export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  `
export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px' })}

`
export const Option = styled.option`

`