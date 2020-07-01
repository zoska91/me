import React, { useState } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { useTranslation } from 'react-i18next';
import 'react-vertical-timeline-component/style.min.css';
import { animateScroll as scroll } from 'react-scroll';

import { Wrapper, Text, Buttons, PickStory, Header } from './Timeline.css';
import SingleTimeline from './SingleTimeline';
import Button from '../Shared/Button';

import elements from './data';

const Timeline = () => {
  const { t } = useTranslation();
  const [activePart, setActivePart] = useState('short');

  const pichStory = type => {
    setActivePart(type);
    scroll.scrollTo(window.innerHeight);
  };

  let timelineElements = activePart === 'short' ? elements.slice(-2) : elements;

  timelineElements = timelineElements.map((el, i) => (
    <SingleTimeline
      key={el.index}
      index={i}
      headline={el.title}
      img={el.img}
      text={t(`Timeline.${el.index}.text`)}
      title={t(`Timeline.${el.index}.title`)}
      icon={el.icon}
      video={el.video}
      aside={el.aside}
      length={timelineElements.length}
      github={el.github}
      url={el.url}
    />
  ));

  return (
    <Wrapper>
      <Header>
        <PickStory>
          <p>{t('Pick')}</p>
          <Buttons>
            <Button
              active={activePart === 'short'}
              onClick={() => pichStory('short')}
            >
              {t('Buttons.short')}
            </Button>
            <Button
              active={activePart === 'long'}
              onClick={() => pichStory('long')}
            >
              {t('Buttons.long')}
            </Button>
          </Buttons>
        </PickStory>
      </Header>
      <Text>{t('Story')}</Text>
      <VerticalTimeline>{timelineElements}</VerticalTimeline>
      <Text>{t('Summary')}</Text>
    </Wrapper>
  );
};

export default Timeline;
