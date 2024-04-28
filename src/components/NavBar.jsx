import { Navbar, Nav, Container } from "react-bootstrap";
import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import ThemeToggler from "./ThemeToggler";

const InternalNavLink = styled(NavLink)`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
  &.navbar__link--active {
    color: ${(props) => props.theme.navbarTheme.linkActiveColor};
  }
`;

const BrandSpan = styled.span`
  color: ${(props) => props.theme.mainColorTheme};
`;

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);

  let NavBarDataSection = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Skills",
      href: "/skills",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Resume",
      href: "/resume",
    },
  ];

  return (
    <Navbar
      fixed="top"
      expand="md"
      bg="dark"
      variant="dark"
      className="navbar-custom"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="/">
          <BrandSpan theme={theme}>{"<Bharat Dave />"}</BrandSpan>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {NavBarDataSection?.map((section, index) => (
              <InternalNavLink
                key={section.title}
                onClick={() => setExpanded(false)}
                exact={index === 0}
                activeClassName="navbar__link--active"
                className="navbar__link"
                to={section.href}
                theme={theme}
              >
                {section.title}
              </InternalNavLink>
            ))}
          </Nav>
          <ThemeToggler onClick={() => setExpanded(false)} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavBarWithRouter = withRouter(NavBar);
export default NavBarWithRouter;
