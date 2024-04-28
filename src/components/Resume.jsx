import React, { useState, useEffect, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../assets/Bharat_Dave_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import styled, { ThemeContext } from "styled-components";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const ResumeContainer = styled(Container)`
  position: relative !important;
  padding-top: 30px !important;
  padding-bottom: 30px !important;
  background-image: var(--section-background-color) !important;
  color: white !important;
`;

const ResumeRow = styled(Row)`
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: center;
`;

const ButtonRow = styled(Row)`
  justify-content: center;
  position: relative;
`;

const StyledPage = styled(Page)`
  border: 5px solid ${(props) => props.theme.mainColorTheme};
`;

const DownloadButton = styled(Button)`
  background: ${(props) => props.theme.mainColorTheme};
  max-width:250px;
  border:none;
`;

function Resume() {
  const [width, setWidth] = useState(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    console.log(window.innerWidth);
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <ResumeContainer fluid>
        <ButtonRow>
          <DownloadButton
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload /> Download CV
          </DownloadButton>
        </ButtonRow>

        <ResumeRow>
          <Document file={pdf} className="d-flex justify-content-center">
            <StyledPage
              theme={theme}
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
            />
          </Document>
        </ResumeRow>

        <ButtonRow>
          <DownloadButton
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload /> Download CV
          </DownloadButton>
        </ButtonRow>
      </ResumeContainer>
    </div>
  );
}

export default Resume;
