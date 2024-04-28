import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import Header from "./Header";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import styled from "styled-components";
import WebDevIcon from "../assets/WebDev.png";
import ChatbotIcon from "../assets/Chatbot.png";
import InternshipIcon from "../assets/InternshipLogo.png";

import "react-vertical-timeline-component/style.min.css";
import "../css/experience.css";

const TimelineImage = styled.img`
  max-height: 60px;
  max-width: 60px;
`;

const WebDevImage = styled.img`
  max-height: 40px;
  max-width: 40px;
`;

function Experience(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;

  const iconStyle = {
    boxShadow: `0 0 0 4px ${theme.timeLineColor} ,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`,
    background: "#14d9c7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const timeline = [
    {
      icon: {
        icon: <WebDevImage src={WebDevIcon} />,
        iconStyle: iconStyle,
      },
      date: "Dec 2022 - Present",
      title: "ReactJs Developer",
      subtitle: "Tata Consultancy Services (TCS)",
      desc: "Working on an agent portal frontend with microservices backend integration for the client. Used ReactJs for its creation and follows the flux modellling system.",
    },
    {
      icon: {
        icon: <TimelineImage src={ChatbotIcon} />,
        iconStyle: iconStyle,
      },
      date: "Sep 2021 - Dec 2022",
      title: "Chatbot Developer",
      subtitle: "Tata Consultancy Services (TCS)",
      desc: "Worked on a chatbot application for the client website using JS and NodeJs, while integrating backend API's as well as developing and implementing BPM (Business Process Model) Flows.",
    },
    {
      icon: {
        icon: <TimelineImage src={InternshipIcon} />,
        iconStyle: iconStyle,
      },
      date: "Jan 2020 - Aug 2020",
      title: "Machine Learning Intern",
      subtitle: "Indian Servers",
      desc: "Worked an at internship during college where we gained knowledge on Machine learning and AI concepts and then created projects for the same. My project was the Music Genre Classification.",
    },
  ];

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          <VerticalTimeline lineColor={theme.timeLineColor}>
            {timeline.map((t, i) => {
              const contentStyle = { background: "#14d9c7", color: "#fff" };
              const arrowStyle = { borderRight: "7px solid #14d9c7" };
              return (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={contentStyle}
                  contentArrowStyle={arrowStyle}
                  date={t.date}
                  {...t.icon}
                >
                  <React.Fragment>
                    <h3 className="vertical-timeline-element-title">
                      {t.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                    <p>{t.desc}</p>
                  </React.Fragment>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </Container>
      </div>
    </>
  );
}

Experience.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Experience;
