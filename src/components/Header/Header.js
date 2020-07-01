import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Header as HeaderStyled,
  Name,
  Text,
  Description,
  Language,
} from './Header.css';
import Button from '../Shared/Button';

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <HeaderStyled
      initial={{ height: '100vh' }}
      animate={{ height: '70vh' }}
      transition={{ ease: 'easeOut', duration: 0.6, delay: 1.2 }}
    >
      <Language>
        <Button
          small
          active={i18n.language === 'pl' && true}
          onClick={() => i18n.changeLanguage('pl')}
        >
          PL
        </Button>
        <Button
          small
          active={i18n.language === 'en' && true}
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </Button>
      </Language>
      <Text>
        <Name
          initial={{ opacity: 0, y: '-50px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.6 }}
        >
          Zofia Janas
        </Name>
        <Description
          initial={{ opacity: 0, y: '-50px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.6, delay: 0.6 }}
        >
          {t('Header.introduce')} <span> {t('Header.myself')} </span>
        </Description>
      </Text>
    </HeaderStyled>
  );
};

export default Header;
