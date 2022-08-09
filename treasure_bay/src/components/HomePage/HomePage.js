import { React, useContext, useState, useEffect, useRef } from 'react';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import UserContext from '../../context/UserProvider'
import ProductPage from '../ProductItem/ProductPage';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function HomePage() {
  const { user, setUser } = useContext(UserContext)
  console.log(user)
  //test comment
  return (
    <div className='homepage'>
      <HomePageMessageContainer>
        <H1>Welcome to Treasure Bay! Before using our site we recommend that you please visit our Online Shopping Safety Tips <StyledLink to='/onlineshoppingtips'>here</StyledLink>.</H1>
        <H1>To learn more about the devs who worked hard on Treasure Bay click <StyledLink to='/about'>here</StyledLink>.</H1>
      </HomePageMessageContainer>
      {/* {user && <h1>{user[0].first_name}</h1>} */}
      <ProductPage />
    </div>
  )
}

export default HomePage

const HomePageMessageContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
    width: 1500px;
    margin-left: 50px;
    margin-top: 10px;
`

const H1 = styled.h1`
  font-size: 17px;

`

const StyledLink = styled(Link)`
  color: #0D99FF;
  text-decoration: underline;
`

