import React, { useEffect, useState, useContext } from "react";
import { SocialIcon } from "react-social-icons";
import { ThemeContext } from "styled-components";

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

let socialData = [
  {
    network: "linkedin",
    href: "https://www.linkedin.com/in/b-dave/",
  },
  {
    network: "github",
    href: "https://github.com/lannymagnet",
  },
  {
    network: "email",
    href: "mailto:bharatdave00@gmail.com",
  },
];

function Social() {
  const theme = useContext(ThemeContext);

  return (
    <div className="social">
      {socialData.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          bgColor={theme.socialIconBgColor}
          target="_blank"
          rel="noopener"
        />
      ))}
    </div>
  );
}

export default Social;
