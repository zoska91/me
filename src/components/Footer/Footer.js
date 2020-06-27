import React from 'react';

import Form from './Form';
import AboutMe from './AboutMe';

import { Footer as FooterStyled, Wrapper } from './Footer.css';

const Footer = () => (
  <FooterStyled>
    <Wrapper>
      <Form />
      <AboutMe />
    </Wrapper>
  </FooterStyled>
);

export default Footer;
