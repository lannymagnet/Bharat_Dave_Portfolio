import React, { useContext } from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal";
import styled, { ThemeContext } from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
} from "react-icons/io";
import { BiLogoVisualStudio } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";
import {
  SiBootstrap,
  SiMongoose,
  SiPostman,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { DiMongodb, DiGit } from "react-icons/di";
import { FaJira } from "react-icons/fa";

const HeaderDiv = styled.span`
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 25px;
  margin-top: 25px;
`;

const ColorHeader = styled.span`
  color: ${(props) => props.theme.mainColorTheme};
`;

const SkillsCol = styled(Col)`
  font-size: 4.5em !important;
  margin: 15px !important;
  padding: 10px !important;
  border: 1.7px solid ${(props) => props.theme.mainColorTheme} !important;
  vertical-align: middle !important;
  text-align: center !important;
  border-radius: 5px !important;
  display: table !important;
  box-shadow: 4px 5px 4px 3px rgba(89, 4, 168, 0.137) !important;
  overflow: hidden !important;
  transition: all 0.4s ease 0s !important;

  @media (max-width: 767px) {
    margin: 10px !important;
  }
`;

const SkillsRow = styled(Row)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 50px;
`;

function Skills() {
  const theme = useContext(ThemeContext);

  const skillsData = [
    {
      mainTitle: (
        <span>
          {"Professional"}&nbsp;
          <ColorHeader theme={theme}>{"Skillset"}</ColorHeader>
        </span>
      ),
      icons: [
        { icon: <IoLogoHtml5 />, title: "HTML" },
        { icon: <IoLogoCss3 />, title: "Css" },
        { icon: <IoLogoJavascript />, title: "Javascript" },
        { icon: <IoLogoReact />, title: "React" },
        { icon: <IoLogoNodejs />, title: "NodeJs" },
        { icon: <DiMongodb />, title: "MongoDb" },
        { icon: <SiMongoose />, title: "Mongoose" },
        { icon: <DiGit />, title: "Git" },
        { icon: <SiBootstrap />, title: "Bootstrap" },
        { icon: <IoLogoPython />, title: "Python" },
      ],
    },
    {
      mainTitle: (
        <span>
          <ColorHeader theme={theme}>{"Tools"}</ColorHeader>&nbsp;{"I Use"}
        </span>
      ),
      icons: [
        { icon: <BiLogoVisualStudio />, title: "VsCode" },
        { icon: <SiPostman />, title: "Postman" },
        { icon: <FaJira />, title: "Jira" },
      ],
    },
    {
      mainTitle: (
        <span>
          {"Currently"}&nbsp;
          <ColorHeader theme={theme}>{"Exploring"}</ColorHeader>
        </span>
      ),
      icons: [
        { icon: <TbBrandNextjs />, title: "NextJs" },
        { icon: <SiRedux />, title: "Redux" },
        { icon: <SiTailwindcss />, title: "Tailwind" },
      ],
    },
  ];

  return (
    <>
      <div className="section-content-container">
        <Container>
          <Fade>
            {skillsData.map((skills) => {
              return (
                <>
                  <HeaderDiv>{skills.mainTitle}</HeaderDiv>
                  <SkillsRow>
                    {skills.icons.map((items) => {
                      return (
                        <SkillsCol xs={2} md={2} theme={theme}>
                          {items.icon}
                        </SkillsCol>
                      );
                    })}
                  </SkillsRow>
                </>
              );
            })}
          </Fade>
        </Container>
      </div>
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;
