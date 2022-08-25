import React from 'react';
import styled from 'styled-components';

function AboutPage() {
  return (
    <AboutContainer>
      <AboutHeader>
        About
      </AboutHeader>
      <TextHeaderContainer>
        <h1>Treasure Bay</h1>
      </TextHeaderContainer>
      <SiteSummaryContainer>
        <Quote>
          <b>One man's trash is another man's treasure.</b>
        </Quote>
        <P1>
          Treasure Bay is an E-Commerce website where a user can buy and sell their used items based on their location.
          It was made by a group of six Full Stack Software Engineers over the course of 3 weeks using an Agile work environment with week long sprints.
          The dev team was assigned a client and developed Treasure Bay by following user stories based off of the requests of the client.
          This project is a culmination of all the skills we have learned during our time in the Advanced Software Engineering Immersive at Galvanize.
          The front end was built using JavaScript, HTML5, CSS3, and React and, deployed with Netlify.
          For the back end, AWS(RDS, S3), PostgreSQL, Express.js, Node.js, Passport.js, Bcrypt, Socket.io and Multer was used and then, deployed using Heroku.
          A great deal was learned during the development of this site and the team had an absolute blast collaborating with one another.
          The team looks forward to what is over the horizon and is eager to take the next step in their software engineering journey.

        </P1>
      </SiteSummaryContainer>
      <TextHeaderContainer>
        {/* <h1>Technologies Used</h1> */}
        <P2>

        </P2>
      </TextHeaderContainer>
      <TextHeaderContainer>
        <h1>The Dev Team</h1>
      </TextHeaderContainer>
      <InfoCardContainer>
        <InfoCard>
          <TeamMemberImg src='https://ca.slack-edge.com/T1T555TL0-U02N4NDLR2B-f319d3d7a40a-512'></TeamMemberImg>
          <TeamMemberName>Gibran Reyes</TeamMemberName>
          <TeamMemberInfo>Houston, TX</TeamMemberInfo>
          <TeamMemberInfo><b>Title:</b> Full Stack Software Engineer</TeamMemberInfo>
          <TeamMemberInfo><b>Role:</b> Lead Developer</TeamMemberInfo>
          <LinksContainer>
            <A href='https://www.linkedin.com/in/gibran-reyes-22052793/'>
              <LinkLogo src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></LinkLogo>
            </A>
            <A href='https://github.com/Greyes92'>
              <LinkLogo src='https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png'></LinkLogo>
            </A>
          </LinksContainer>
        </InfoCard>
        <InfoCard>
          <TeamMemberImg src='https://ca.slack-edge.com/T1T555TL0-U033C7T2REH-d9af3f4e6464-512'></TeamMemberImg>
          <TeamMemberName>Aaron Warren</TeamMemberName>
          <TeamMemberInfo>Weaverville, NC</TeamMemberInfo>
          <TeamMemberInfo><b>Title:</b> Full Stack Software Engineer</TeamMemberInfo>
          <TeamMemberInfo><b>Role:</b> UI/UX Lead</TeamMemberInfo>
          <LinksContainer>
            <A href='https://www.linkedin.com/in/aaron-m-warren/'>
              <LinkLogo src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></LinkLogo>
            </A>
            <A href='https://github.com/AMWARREN21'>
              <LinkLogo src='https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png'></LinkLogo>
            </A>
          </LinksContainer>
        </InfoCard>
        <InfoCard>
          <TeamMemberImg src='https://ca.slack-edge.com/T1T555TL0-U030D8FK9A4-0dfac926830f-512'></TeamMemberImg>
          <TeamMemberName>Justin Smith</TeamMemberName>
          <TeamMemberInfo>Oceanside, CA</TeamMemberInfo>
          <TeamMemberInfo><b>Title:</b> Full Stack Software Engineer</TeamMemberInfo>
          <TeamMemberInfo><b>Role:</b> Scrum Master</TeamMemberInfo>
          <LinksContainer>
            <A href='https://www.linkedin.com/in/justinsmith854/'>
              <LinkLogo src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></LinkLogo>
            </A>
            <A href='https://github.com/jsmith3763'>
              <LinkLogo src='https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png'></LinkLogo>
            </A>
          </LinksContainer>
        </InfoCard>
        <InfoCard>
          <TeamMemberImg src='https://ca.slack-edge.com/T1T555TL0-U035A7S48J0-03dddcbff376-512'></TeamMemberImg>
          <TeamMemberName>Michael Howard</TeamMemberName>
          <TeamMemberInfo>Honolulu, HI</TeamMemberInfo>
          <TeamMemberInfo><b>Title:</b> Full Stack Software Engineer</TeamMemberInfo>
          <TeamMemberInfo><b>Role:</b> Database Administrator</TeamMemberInfo>
          <LinksContainer>
            <A href='https://www.linkedin.com/in/michael-gene-howard/'>
              <LinkLogo src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></LinkLogo>
            </A>
            <A href='https://github.com/howardmg'>
              <LinkLogo src='https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png'></LinkLogo>
            </A>
          </LinksContainer>
        </InfoCard>
        <InfoCard>
          <TeamMemberImg src='https://ca.slack-edge.com/T1T555TL0-U02RXK2AZ5E-c2ac77bf02cf-512'></TeamMemberImg>
          <TeamMemberName>Joshua McMiller</TeamMemberName>
          <TeamMemberInfo>Killeen, TX</TeamMemberInfo>
          <TeamMemberInfo><b>Title:</b> Full Stack Software Engineer</TeamMemberInfo>
          <TeamMemberInfo><b>Role:</b> Communications Lead</TeamMemberInfo>
          <LinksContainer>
            <A href='https://www.linkedin.com/in/joshuamcmillersr/'>
              <LinkLogo src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></LinkLogo>
            </A>
            <A href='https://github.com/jjmcmil79'>
              <LinkLogo src='https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png'></LinkLogo>
            </A>
          </LinksContainer>
        </InfoCard>
        <InfoCard>
          <TeamMemberImg></TeamMemberImg>
          <TeamMemberName>Lexi Jin</TeamMemberName>
          <TeamMemberInfo></TeamMemberInfo>
          <TeamMemberInfo><b>Title:</b> Full Stack Software Engineer</TeamMemberInfo>
          <TeamMemberInfo><b>Role:</b> Lead Developer</TeamMemberInfo>
          <LinksContainer>
            <A href='https://www.linkedin.com/in/lexi-jin/'>
              <LinkLogo src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></LinkLogo>
            </A>
            <A href='https://github.com/yanchaoj'>
              <LinkLogo src='https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png'></LinkLogo>
            </A>
          </LinksContainer>
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
  margin-top: 10px;
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
  height: 325px;
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
  margin-top: 10px;
`
const Quote = styled.p`
  text-align: center;
  width: 1300px;
  font-size: 17px;
  margin-bottom: 10px;
`
const P1 = styled.p`
  width: 1300px;
  font-size: 17px;
`

const P2 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TeamMemberImg = styled.img`
  border-radius: 999px;
  height: 120px;
  width: 120px;
  background-color: gray;
  border: 3px #0D99FF solid;
`

const TeamMemberName = styled.h2`
`
const TeamMemberInfo = styled.h4`
  font-weight: normal;
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`

const LinkLogo = styled.img`
  height: 50px;
`

const A = styled.a`

`