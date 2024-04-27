import React, { useState, useEffect, useContext } from "react";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal";
import Social from "./Social";
import styled, { ThemeContext } from "styled-components";

const MainContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.h1`
  font-size: 5em;
  font-weight: bold;
  color: ${(props) => props.theme.mainColorTheme};
`;

const IamText = styled.h2`
  display: inline-block;
`;

function Home() {
  const theme = useContext(ThemeContext);

  return (
    <Fade>
      <MainContainer>
        <UserName theme={theme}>Bharat Dave</UserName>
        <div style={{ flexDirection: "row" }}>
          <IamText>I&apos;m&nbsp;</IamText>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: [
                "a Web Developer",
                "a Programmer",
                "a Software Developer",
                "a MERN Stack Developer",
              ],
            }}
          />
        </div>
        <Social />
      </MainContainer>
    </Fade>
  );
}

export default Home;
