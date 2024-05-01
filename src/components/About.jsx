import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Fade from "react-reveal";
import AboutImage from "../assets/aboutMe.svg";
import styled, { ThemeContext } from "styled-components";

const TextContainer = styled(Col)`
  margin: 10;
  flex-direction: column;
  white-space: pre-wrap;
  text-align: left;
  font-size: 1.5em;
  font-weight: 500;
`;

const TextPara = styled.p`
  text-align: justify;
`;

const ImageContainer = styled(Col)`
  margin: 10;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const TitleText = styled.p`
  font-weight: bolder;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ColorSpan = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.mainColorTheme};
`;

const AboutMeImage = styled.img`
  transform: scaleX(-1);
`;

function About(props) {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="section-content-container">
        <Container>
          <Fade>
            <Row>
              <TextContainer>
                <TitleText>{"Hello Everyone,"}</TitleText>
                <TextPara>
                  I am <ColorSpan theme={theme}>Bharat Dave</ColorSpan> from{" "}
                  <ColorSpan theme={theme}>Mumbai, India.</ColorSpan>
                  <br />
                  <br />I have completed my{" "}
                  <ColorSpan theme={theme}>
                    BE (Bachelor of Engineering) in Computer Engineering
                  </ColorSpan>{" "}
                  and I have a passion for developing full stack web apps.
                  <br />
                  <br />I am fluent in classics of MERN Stack Web Development
                  like{" "}
                  <ColorSpan theme={theme}>
                    HTML+CSS+JS, ReactJs, MongoDB & ExpressJs.
                  </ColorSpan>
                  <br />
                  <br />
                  Currently exploring{" "}
                  <ColorSpan theme={theme}>NextJs</ColorSpan> and{" "}
                  <ColorSpan theme={theme}>Redux</ColorSpan> to improve myself
                  further.
                  <br />
                  <br />
                </TextPara>
              </TextContainer>
              <ImageContainer>
                <AboutMeImage src={AboutImage} alt="profile" />
              </ImageContainer>
            </Row>
          </Fade>
        </Container>
      </div>
    </>
  );
}

export default About;
