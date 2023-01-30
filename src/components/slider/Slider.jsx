import React, { useState } from 'react'
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import {
  InfoContainer,
  ImgContainer,
  Container,
  Wrapper,
  Button,
  Arrow,
  Slide,
  Image,
  Title,
  Desc,
} from './Slider'

import { sliderItems } from '../../data/Data';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [directions, setDirections] = useState('left')

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)

    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }


  setTimeout(() => {
    if (directions === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }, 5000)


  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title >{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider