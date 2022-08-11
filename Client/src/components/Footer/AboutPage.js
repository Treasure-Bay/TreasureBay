import React from 'react';
import styled from 'styled-components';

function AboutPage() {
  return (
    <AboutContainer>
      <AboutHeader>
        About
      </AboutHeader>
      <TextHeaderContainer>
        <h1>TreasureBay</h1>
      </TextHeaderContainer>
      <SiteSummaryContainer>

        <P1>
          Treasure Bay is an E-Commerce website where a user can buy and sell their used items based on their location.
          It was made by a group of 6 Full Stack Developers using Agile Methodologies and week long sprints.
        </P1>
      </SiteSummaryContainer>
      <TextHeaderContainer>
        <h1>Technologies Used</h1>
        <P2>

        </P2>
      </TextHeaderContainer>
      <TextHeaderContainer>
        <h1>Meet the Team</h1>
      </TextHeaderContainer>
      <InfoCardContainer>
        <InfoCard>
          Gibran Reyes
        </InfoCard>
        <InfoCard>
          Aaron Warren
        </InfoCard>
        <InfoCard>
          Justin Smith
        </InfoCard>
        <InfoCard>
          Michael Howard
        </InfoCard>
        <InfoCard>
          Joshua McMiller
        </InfoCard>
        <InfoCard>
          Yancho Jin
        </InfoCard>
      </InfoCardContainer>


    </AboutContainer>
  )
}

export default AboutPage;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
`

const AboutHeader = styled.div`
  height: 120px;
  width: 100vw;
  background-color: #0D99FF;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 60px;
  font-weight: bold;
`

const SiteSummaryContainer = styled.div`
  color: #0D99FF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1500px;
  p{
    color: black;
  }
`

const InfoCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1300px;
`

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-right: 40px;
  width: 300px;
  height: 300px;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  border-radius: 10px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    /* cursor: pointer; */
  }
`

const TextHeaderContainer = styled.div`
  color: #0D99FF;
`
const P1 = styled.p`
  width: 1300px;
  font-size: 16px;
`

const P2 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`