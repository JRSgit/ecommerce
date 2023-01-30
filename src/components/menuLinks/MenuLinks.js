import styled from "styled-components";
import { mobile, tablet } from '../../responsive'

export const MenuLink = styled.div`
  position: absolute;
  z-index: 1;
  overflow: hidden;
  width: 250px;
  border: 1px dashed gray;
  height: 400px;
  background-color: #ebebeb;
  top: 70px;
  right: 30px;
  padding: 15px;
  border-radius: 15px 0px 15px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  display: flex;

  
  .menu {
    display: flex;
    flex-direction: column;
    width: 100%;

    h3 {
      font-size: 1.3rem;
      text-transform: capitalize;
      color: gray;
      font-weight: lighter;
    }

    hr {
      width: 100%;
      margin-bottom: 1rem;
    }

    a {
      transition: 0.5s;
      text-decoration: none;
      display: flex;
      border-radius: 10px;
      padding: 5px;
      align-items: center;
      color: #000;
      font-weight: 400;
      font-size: 22px;
      text-align: center;
      &:hover {
        background-color: #fff;
      }
      
    }


  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
      width: 100%;
      transition: 0.5s;
      border-radius: 10px;
      padding: 5px;
      text-decoration: none;
      display: flex;
      align-items: center;
      color: #000;
      font-weight: 400;
      font-size: 24px;
      text-align: center;
      &:hover {
        background-color: #fff;
      }
    }
  }
  
  
`
