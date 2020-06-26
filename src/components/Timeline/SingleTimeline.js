import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import HoverVideoPlayer from 'react-hover-video-player';
import Stuff from './Stuff';

import {
  iconStyle,
  contentStyle,
  Img,
  Text,
  Title,
} from './SingleTimeline.css';

const SingleTimeline = ({ title, text, icon, img, video, aside }) => (
  <VerticalTimelineElement
    className='vertical-timeline-element--work'
    contentStyle={contentStyle}
    contentArrowStyle={{ borderRight: '7px solid  #2B3A40' }}
    date={<Stuff data={aside} />}
    iconStyle={iconStyle}
    icon={icon}
  >
    <Title className='vertical-timeline-element-title'>{title}</Title>
    <Text>{text}</Text>
    {img && <Img src={img} alt='' />}
    {video && (
      <HoverVideoPlayer
        videoSrc={video}
        loadingOverlay={<div className='loading-overlay'>Loading...</div>}
        muted
      />
    )}
  </VerticalTimelineElement>
);

export default SingleTimeline;
