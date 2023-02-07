import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  height: 60vh;
  width: 100%;

  ${mobile({ display: 'none' })}
`
export const Arrow = styled.div`
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  background-color: #fff7f7;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  margin: auto;
  opacity: 0.5;
  height: 50px;
  width: 50px;
  z-index: 2;
  bottom: 0;
  top: 0;
`
export const Wrapper = styled.div`
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
  height: 100%;
  display: flex;
`
export const Slide = styled.div`
  background-color: #${props => props.bg};
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
`
export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`
export const Image = styled.img`
  height: 80%;
`
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
export const Title = styled.h1`
  font-size: 70px;
`
export const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`