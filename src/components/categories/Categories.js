import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 20px;

  ${mobile({ padding: '0px', flexDirection: 'column' })}
`;
