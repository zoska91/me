import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faReact,
  faNodeJs,
  faAngular,
} from '@fortawesome/free-brands-svg-icons';

import {
  faFingerprint,
  faUserGraduate,
  faBabyCarriage,
} from '@fortawesome/free-solid-svg-icons';

import ImgCode from '../../assets/code.jpeg';
import ImgNode from '../../assets/Node.png';
import ImgMe from '../../assets/me.png';
import ImgNewProject from '../../assets/newestProject.png';
import VideoProjectFirst from '../../assets/firstProject.mp4';
import VideoFirstProjectReact from '../../assets/firstProjectReact.mp4';
import VideoAngular from '../../assets/angular.mp4';

const elements = [
  {
    index: 0,
    title: 'long time ago...',
    img: ImgCode,
    icon: <FontAwesomeIcon icon={faUserGraduate} size='2x' />,
    aside: ['2018 - 06'],
  },
  {
    index: 1,
    title: 'driving instructor',
    video: VideoProjectFirst,
    icon: <FontAwesomeIcon icon={faBabyCarriage} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd'],
    github: 'https://github.com/zoska91/elka',
    url: 'https://zoska91.github.io/elka/',
  },
  {
    index: 2,
    title: 'Harry Potter',
    video: VideoFirstProjectReact,
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
    aside: ['html', 'css', 'js', 'react', 'api'],
    github: 'https://github.com/zoska91/API-harryPotter-Quiz',
    url: 'https://zoska91.github.io/API-harryPotter-Quiz/',
  },
  {
    index: 3,
    title: 'dictionary',
    img: ImgNode,
    icon: <FontAwesomeIcon icon={faNodeJs} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd', 'node', 'db', 'pug'],
    github: 'https://github.com/zoska91/dictionary',
    url: 'https://english-zoo.herokuapp.com',
  },
  {
    index: 4,
    title: 'pleaces',
    video: VideoAngular,
    icon: <FontAwesomeIcon icon={faAngular} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd', 'angular', 'db', 'map'],
    github: 'https://github.com/zoska91/pleaces',
  },
  {
    index: 5,
    title: 'keep all here',
    img: ImgNewProject,
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd', 'react', 'graphql', 'db', 'api'],
    github: 'https://github.com/zoska91/favouritesInOnePlace',
  },
  {
    index: 6,
    title: 'me',
    img: ImgMe,
    icon: <FontAwesomeIcon icon={faFingerprint} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd', 'react'],
    github: 'https://github.com/zoska91/me',
    url: 'http://zofiajanas.pl/',
  },
];

export default elements;
