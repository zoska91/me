import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import {
  faReact,
  faNodeJs,
  faAngular,
} from '@fortawesome/free-brands-svg-icons';
import SingleTimeline from './SingleTimeline';
import { Wrapper, Title, Summary } from './Timeline.css';

import ImgCode from '../../assets/code.jpeg';
import ImgNode from '../../assets/Node.png';
import VideoProjectFirst from '../../assets/firstProject.mp4';
import VideoFirstProjectReact from '../../assets/firstProjectReact.mp4';

const elements = [
  { index: 0, img: ImgCode, icon: <MenuBookTwoToneIcon /> },
  { index: 1, video: VideoProjectFirst, icon: <ChildFriendlyIcon /> },
  {
    index: 2,
    video: VideoFirstProjectReact,
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
  },
  {
    index: 3,
    img: ImgNode,
    icon: <FontAwesomeIcon icon={faNodeJs} size='2x' />,
  },
  {
    index: 4,
    video: VideoProjectFirst,
    icon: <FontAwesomeIcon icon={faAngular} size='2x' />,
  },
  {
    index: 5,
    img: ImgCode,
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
  },
];

const Timeline = () => {
  const { t } = useTranslation();

  const timelineElements = elements.map(el => (
    <SingleTimeline
      img={el.img}
      text={t(`Timeline.${el.index}.text`)}
      title={t(`Timeline.${el.index}.title`)}
      icon={el.icon}
      video={el.video}
    />
  ));

  return (
    <Wrapper>
      <Title>{t('Story')}</Title>
      <VerticalTimeline>{timelineElements}</VerticalTimeline>
      <Summary>{t('Summary')}</Summary>
    </Wrapper>
  );
};

export default Timeline;
