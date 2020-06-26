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
  },
  {
    index: 2,
    video: VideoFirstProjectReact,
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
    aside: ['html', 'css', 'js', 'react', 'api'],
  },
  {
    index: 3,
    img: ImgNode,
    icon: <FontAwesomeIcon icon={faNodeJs} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd', 'node', 'db', 'pug'],
  },
  {
    index: 4,
    video: VideoProjectFirst,
    icon: <FontAwesomeIcon icon={faAngular} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd', 'angular', 'db', 'map'],
  },
  {
    index: 5,
    img: ImgCode,
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd', 'react', 'graphql', 'db', 'api'],
  },
  {
    index: 6,
    img: ImgMe,
    icon: <FontAwesomeIcon icon={faFingerprint} size='2x' />,
    aside: ['html', 'css', 'js', 'rwd', 'react'],
  },
];

export default elements;
