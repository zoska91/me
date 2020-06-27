import React, { useState } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { useTranslation } from 'react-i18next';
import 'react-vertical-timeline-component/style.min.css';

import { Wrapper, Text, Buttons, Button, PickStory } from './Timeline.css';
import SingleTimeline from './SingleTimeline';

import elements from './data';

const Timeline = () => {
  const { t } = useTranslation();
  const [activePart, setActivePart] = useState('short');

  let timelineElements = activePart === 'short' ? elements.slice(-2) : elements;

  timelineElements = timelineElements.map(el => (
    <SingleTimeline
      key={el.index}
      img={el.img}
      text={t(`Timeline.${el.index}.text`)}
      title={t(`Timeline.${el.index}.title`)}
      icon={el.icon}
      video={el.video}
      aside={el.aside}
      index={el.index}
      length={timelineElements.length}
      github={el.github}
      url={el.url}
    />
  ));

  return (
    <Wrapper>
      <PickStory>
        <p>{t('Pick')}</p>
        <Buttons>
          <Button
            active={activePart === 'short'}
            onClick={() => setActivePart('short')}
          >
            {t('Buttons.short')}
          </Button>
          <Button
            active={activePart === 'long'}
            onClick={() => setActivePart('long')}
          >
            {t('Buttons.long')}
          </Button>
        </Buttons>
      </PickStory>

      <Text>{t('Story')}</Text>
      <VerticalTimeline>{timelineElements}</VerticalTimeline>
      <Text>{t('Summary')}</Text>
    </Wrapper>
  );
};

export default Timeline;
