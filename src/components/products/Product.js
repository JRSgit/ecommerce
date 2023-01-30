import styled from 'styled-components';

export const Info = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  justify-content: center;
  align-items: center;
  position: absolute;
  display: flex;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  left: 0;
  top: 0;
`;

export const Image = styled.img`
  object-fit: cover;
  transition: 00.5s ease;
  z-index: 2;
  width: 100%;  
  height: 100%;
`

export const Container = styled.div`
  background-color: #f5fbfb;
  justify-content: center;
  position: relative;
  align-items: center;
  min-width: 280px;
  height: 350px;
  display: flex;
  margin: 10px 20px;
  flex: 1;

  &:hover ${Info} {
    transform: scale(1.2);
    opacity: 1;
  }
  &:hover ${Image} {
    transform: scale(1.2);
  }
`
export const Circle = styled.div`
  background-color: white;
  border-radius: 50%;
  position: absolute;
  width: 200px;
  height: 200px;
  
  `


export const Icon = styled.div`
  background-color: white;
  justify-content: center;
  transition: 0.5s ease;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  width: 40px;
  height: 40px;
  margin: 10px;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.5);
  }

  a {
    list-style: none;
    text-decoration: none;
    color: black;
  }
`;
