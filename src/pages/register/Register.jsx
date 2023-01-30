import React from 'react'
import {
  Container,
  Agreement,
  Wrapper,
  Button,
  Title,
  Input,
  Form,
} from './Register'

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACOOUNT</Title>
        <Form>
          <Input placeholder='Name' />
          <Input placeholder='Last name' />
          <Input placeholder='Username' />
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Input placeholder='Confirm password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register