import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SearchIcon from '@material-ui/icons/Search'
import Badge from '@material-ui/core/Badge/Badge'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { logout } from '../../redux/apisCall'

import {
  SearchContainer,
  Container,
  Language,
  MenuItem,
  MenuImg,
  Wrapper,
  Center,
  Right,
  Input,
  Logo,
  Left,
} from './NavBar'
import { Link, useNavigate } from 'react-router-dom';
import { stringAvatar } from './StringColor'
import MenuLinks from '../menuLinks/MenuLinks.jsx';


const NavBar = () => {
  const user = useSelector((state) => state.user.currentUser)
  const quantity = useSelector(state => state.cart.quantity)
  const username = user ? user.user.username : 'Bem Vindo'


  const [disp, setDisp] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleRegiste = () => {
    navigate('/register')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  
  const handleHome = () => {
    navigate('/')
  }
  const handleLogout = () => {
    setDisp(false)
   logout(dispatch)
  }

  const handleDisp = () => {
    setDisp(!disp)
  }


  return (
    <Container>
      <Wrapper>

        <Left>
          <Language>BR</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center><Logo onClick={handleHome}>RSAS.</Logo></Center>
        {
          user ? (
            <Right>
              <MenuItem onClick={handleRegiste}>PRODUTOS</MenuItem>
              <MenuItem onClick={handleRegiste}>CATEGORIAS</MenuItem>
              <MenuItem onClick={handleRegiste} color='d76903'>PROMOÇŌES</MenuItem>
              <MenuItem></MenuItem>
              <MenuItem>
                <Link to='/cart'>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                  </Badge>
                </Link>
              </MenuItem>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: 55,
                marginLeft: 20,
              }}>
                {disp && <MenuLinks logChange={handleLogout} />}
                {!user.img ? (
                  <Stack
                    style={{
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    direction="row"
                    spacing={2}
                    onClick={handleDisp}>
                    <Avatar {...stringAvatar(username + ' Rsas')} />
                  </Stack>
                ) : (
                  <MenuImg
                    onClick={handleDisp}
                    src='https://images.pexels.com/photos/6545318/pexels-photo-6545318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />

                )}
                <span style={{ marginLeft: 0, }}> {username}</span>

              </div>
            </Right>
          ) : (
            <Right>
              <MenuItem onClick={handleRegiste}>PRODUTOS</MenuItem>
              <MenuItem onClick={handleRegiste}>CATEGORIAS</MenuItem>
              <MenuItem onClick={handleRegiste} color='d76903'>PROMOÇŌES</MenuItem>
              <MenuItem onClick={handleRegiste}>REGISTER</MenuItem>
              <MenuItem>
                <Link to='/cart'>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                  </Badge>
                </Link>
              </MenuItem>
              <div className='avatarUser' style={{

              }}>
                {disp && <MenuLinks logChange={handleLogin} />}
                {!user?.img ? (
                  <Stack
                    style={{
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    direction="row"
                    spacing={2}
                    onClick={handleDisp}>
                    <Avatar {...stringAvatar(username + ' Rsas')} />
                  </Stack>
                ) : (
                  <MenuImg src='https://images.pexels.com/photos/6545318/pexels-photo-6545318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />

                )}
                <span > {username}</span>

              </div>
            </Right>

          )
        }

        {/* onClick={handleDisp}
              src='https://images.pexels.com/photos/1857292/pexels-photo-1857292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='avatar'
            /> */}


        {/* <MenuImgRotate onClick={() => setDisp(!disp)}>
            </MenuImgRotate> */}

      </Wrapper>
    </Container>
  )
}

export default NavBar