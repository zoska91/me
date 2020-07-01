import React from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import HoverVideoPlayer from 'react-hover-video-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Stuff from './Stuff';

import {
  iconStyle,
  contentStyle,
  Img,
  Text,
  Title,
  Links,
  Link,
  InfoHover,
  Headline,
} from './SingleTimeline.css';

const SingleTimeline = ({
  title,
  text,
  icon,
  img,
  video,
  aside,
  index,
  github,
  url,
  headline,
}) => {
  const { t } = useTranslation();
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={contentStyle}
      contentArrowStyle={{ borderRight: '7px solid  #2B3A40' }}
      date={<Stuff data={aside} />}
      iconStyle={iconStyle}
      icon={icon}
    >
      <Links index={index}>
        {github && (
          <Link href={github} target='_blank'>
            <FontAwesomeIcon icon={faCode} size='2x' />
          </Link>
        )}
        {url && (
          <Link href={url} target='_blank'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </Link>
        )}
        <Headline>{headline}</Headline>
      </Links>
      <Title className='vertical-timeline-element-title'>{title}</Title>
      <Text>{text}</Text>
      {img && <Img src={img} alt='' />}
      {video && (
        <>
          <InfoHover>{t('Hover')}</InfoHover>
          <HoverVideoPlayer
            videoSrc={video}
            loadingOverlay={<div className='loading-overlay'>Loading...</div>}
            muted
          />
        </>
      )}
    </VerticalTimelineElement>
  );
};

export default SingleTimeline;
