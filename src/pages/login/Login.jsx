import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/apisCall'
import {
  Container,
  Agreement,
  Wrapper,
  Button,
  Title,
  Error,
  Input,
  Form,
  Link,
} from './Login'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { isFetching, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleClick = async (e) => {
    e.preventDefault()
    login(dispatch, { email, password })
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong</Error>}
          <Link href='/reset-password'>DO NOT YOU REMEMBER THE PASSWORD</Link>
          <Link href='/register'>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login