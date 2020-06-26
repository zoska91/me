import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header as HeaderStyled, Name, Text, Description } from './Header.css';

const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderStyled>
      <Text>
        <Name>Zofia Janas</Name>
        <Description>
          {t('Header.introduce')} <span> {t('Header.myself')} </span>
        </Description>
      </Text>
    </HeaderStyled>
  );
};

export default Header;
