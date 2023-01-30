import React from 'react'
import FacebookOutlinedIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg'
import ForwardToInboxIcon from '@material-ui/icons/Email'
import {
  SocialContainer,
  ContantItem,
  SocialIcon,
  Container,
  ListItem,
  Payment,
  Center,
  Title,
  Right,
  List,
  Logo,
  Desc,
  Left,
} from './Footer'

const image = 'data:image/jpeg;base64,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'

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RSAS.</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Magnam ea, distinctio fugiat sequi, a expedita ad at incidunt
          commodi assumenda eveniet possimus corporis nobis officia sit
          sapiente, optio consequatur. Ipsam!
        </Desc>
        <SocialContainer>

          <SocialIcon color='#385999'>
            <FacebookOutlinedIcon />
          </SocialIcon>

          <SocialIcon color='#e4405f'>
            <InstagramIcon />
          </SocialIcon>

          <SocialIcon color='#385999'>
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon color='#e4405f'>
            <YouTubeIcon />
          </SocialIcon>

        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Acessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContantItem>
          <LocationOnIcon style={{ marginRight: 10 }} />
          622 Dixie Path, South Tobinchester 98336
        </ContantItem>
        <ContantItem>
          <PermPhoneMsgIcon style={{ marginRight: 10 }} />
          +1 234 56 78
        </ContantItem>
        <ContantItem>
          <ForwardToInboxIcon style={{ marginRight: 10 }} />
          contact@rsas.com
        </ContantItem>
        <Payment src={image} alt='payment' />
      </Right>
    </Container>
  )
}

export default Footer