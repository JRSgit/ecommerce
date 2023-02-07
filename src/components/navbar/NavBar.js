import styled from 'styled-components'
import { mobile, tablet } from '../../responsive'

export const Container = styled.div`
  height: 70px;
  margin-bottom: 10px;
  
  
  ${mobile({ height: '50px' })}
  
  `

export const MenuItem = styled.div`
font-size: .8rem;
display: flex;
align-items: center;
cursor: pointer;
margin-left: 10px;
transition: all 0.5s;

color: #${props => props.color};

${mobile({ fontSize: '10px', marginLeft: '10px' })}
${tablet({ display: 'none' })}

&:hover {
  text-decoration: underline;
}
`

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  position: relative;
  justify-content: space-between;

  ${mobile({ padding: '10px 0' })}
  /* ${tablet({ padding: '10px 0' })} */
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  span {
    ${tablet({ display: 'none' })}
  }
`

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  
  ${mobile({ width: '100%' })}

  input {
    width: 100%;
  }

`
export const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ flex: 0, })}

  `
export const Right = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: fit-content;
  

  ${mobile({ flex: 0, })}
  ${tablet({ flex: 1, })}

  .avatarUser {
    display: flex;
    max-width: 100px;
    align-items: center;
    flex-direction: column;
    height: 55px;
    text-align: center;

    span {
      font-size: 100%;
      min-width: 80px;
    }
  }
`
export const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: '50px' })}
  /* ${tablet({ width: '50px' })} */
`
export const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  font-size: 2.5rem;
  margin: 0;
  /* ${mobile({ fontSize: '22px' })}
  ${tablet({ fontSize: '24px' })} */
`

export const MenuImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  margin-left: 30px;
  cursor: pointer;
  
  ${mobile({
  width: 30,
  height: 30,

  marginLeft: '10px',
})}
  ${tablet({
  width: 40,
  height: 40,

  marginLeft: '15px',
})}
`
export const MenuImgRotate = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 50px;
  margin-right: -2px;
  border: 3px solid transparent;
  margin-left: 10px;
  height: 50px;
  border-radius: 50%;
  transition: all 1s;
  cursor: pointer;
  &:hover {
    border: 3px dashed gray;
    transform: rotate(100deg);
  }

`

