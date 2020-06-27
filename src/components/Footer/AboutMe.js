import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { AboutMe as AboutMeStyled, Links, Li } from './Footer.css';

const data = {
  in: 'https://www.linkedin.com/in/zofia-janas-51a71380/',
  git: 'https://github.com/zoska91',
  mail: 'mailto:zofiajanas@int.pl',
};

const AboutMe = () => (
  <AboutMeStyled>
    <Links>
      <Li>
        <a href={data.in} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
        </a>
      </Li>
      <Li>
        <a href={data.git} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
      </Li>
      <Li>
        <a href={data.mail} rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faEnvelope} size='2x' />
        </a>
      </Li>
    </Links>
    <p>Zofia Janas</p>
  </AboutMeStyled>
);

export default AboutMe;
