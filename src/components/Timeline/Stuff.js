import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faNodeJs,
  faAngular,
  faHtml5,
  faReact,
  faCss3,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMobileAlt,
  faDatabase,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as PugIcon } from '../../assets/icon/pug.svg';
import { ReactComponent as GraphqlIcon } from '../../assets/icon/graphql.svg';
import { ReactComponent as ApiIcon } from '../../assets/icon/api.svg';

const Stuff = ({ data }) => (
  <div>
    {data.includes('2018 - 06') && '2018 - 06'}
    {data.includes('html') && (
      <FontAwesomeIcon icon={faHtml5} size='2x' style={{ marginLeft: '1vw' }} />
    )}
    {data.includes('css') && (
      <FontAwesomeIcon icon={faCss3} size='2x' style={{ marginLeft: '1vw' }} />
    )}
    {data.includes('js') && (
      <FontAwesomeIcon icon={faJs} size='2x' style={{ marginLeft: '1vw' }} />
    )}
    {data.includes('rwd') && (
      <FontAwesomeIcon
        icon={faMobileAlt}
        size='2x'
        style={{ marginLeft: '1vw' }}
      />
    )}
    {data.includes('node') && (
      <FontAwesomeIcon
        icon={faNodeJs}
        size='2x'
        style={{ marginLeft: '1vw' }}
      />
    )}
    {data.includes('react') && (
      <FontAwesomeIcon icon={faReact} size='2x' style={{ marginLeft: '1vw' }} />
    )}
    {data.includes('angular') && (
      <FontAwesomeIcon
        icon={faAngular}
        size='2x'
        style={{ marginLeft: '1vw' }}
      />
    )}
    {data.includes('db') && (
      <FontAwesomeIcon
        icon={faDatabase}
        size='2x'
        style={{ marginLeft: '1vw' }}
      />
    )}
    {data.includes('pug') && (
      <PugIcon
        style={{
          marginLeft: '1vw',
          height: '2.5em',
          width: '2.5em',
          fill: 'white',
          paddingTop: '0.8em',
        }}
      />
    )}
    {data.includes('graphql') && (
      <GraphqlIcon
        style={{
          marginLeft: '1vw',
          height: '2.5em',
          width: '2.5em',
          fill: 'white',
          paddingTop: '0.8em',
        }}
      />
    )}
    {data.includes('api') && (
      <ApiIcon
        style={{
          marginLeft: '1vw',
          height: '2.5em',
          width: '2.5em',
          fill: 'white',
          paddingTop: '0.8em',
        }}
      />
    )}
    {data.includes('map') && (
      <FontAwesomeIcon
        icon={faMapMarkedAlt}
        size='2x'
        style={{ marginLeft: '1vw' }}
      />
    )}
  </div>
);

export default Stuff;
