import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import {
  faReact,
  faNodeJs,
  faAngular,
} from '@fortawesome/free-brands-svg-icons';

import { faFingerprint } from '@fortawesome/free-solid-svg-icons';

import ImgCode from '../../assets/code.jpeg';
import ImgNode from '../../assets/Node.png';
import ImgMe from '../../assets/me.png';
import VideoProjectFirst from '../../assets/firstProject.mp4';
import VideoFirstProjectReact from '../../assets/firstProjectReact.mp4';

const elements = [
  {
    index: 0,
    img: ImgCode,
    icon: <MenuBookTwoToneIcon />,
    aside: ['2018 - 06'],
  },
  {
    index: 1,
    video: VideoProjectFirst,
    icon: <ChildFriendlyIcon />,
    aside: ['html', 'css', 'js', 'rwd'],
    github: 'https://github.com/zoska91/elka',
    url: 'https://zoska91.github.io/elka/',
  },
  {
    index: 2,
    video: VideoFirstProjectReact,
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
    aside: ['html', 'css', 'js', 'react', 'api'],
    github: 'https://github.com/zoska91/API-harryPotter-Quiz',
    url: 'https://zoska91.github.io/API-harryPotter-Quiz/',
  },
  {
    index: 3,
    img: ImgNode,
    icon: <FontAwesomeIcon icon={faNodeJs} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd', 'node', 'db', 'pug'],
    github: 'https://github.com/zoska91/dictionary',
    url: 'https://english-zoo.herokuapp.com',
  },
  {
    index: 4,
    video: VideoProjectFirst,
    icon: <FontAwesomeIcon icon={faAngular} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd', 'angular', 'db', 'map'],
    github: 'https://github.com/zoska91/pleaces',
  },
  {
    index: 5,
    img: ImgCode,
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd', 'react', 'graphql', 'db', 'api'],
    github: 'https://github.com/zoska91/favouritesInOnePlace',
  },
  {
    index: 6,
    img: ImgMe,
    icon: <FontAwesomeIcon icon={faFingerprint} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd', 'react'],
    github: 'https://github.com/zoska91/me',
    url: 'http://zofiajanas.pl/',
  },
];

export default elements;
