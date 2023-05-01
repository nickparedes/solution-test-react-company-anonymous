import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 78.71px) ;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const ButtonLink = styled(Link)`
  display: block;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #333;
  border-radius: 5px;

  &:hover {
    background-color: #555;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
    padding: 2rem;
  }
`;

const Inicio = () => {
  return (
    <HomeContainer>
      <LeftSide>
        <ButtonLink to="/peliculas">Películas</ButtonLink>
      </LeftSide>
      <RightSide>
        <ButtonLink to="/series">Series</ButtonLink>
      </RightSide>
    </HomeContainer>
  )
}

export default Inicio