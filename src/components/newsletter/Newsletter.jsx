import React from 'react'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import {
  InputContainer,
  Desc,
  Container,
  Button,
  Title,
  Input,

} from './Newslletter'

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter