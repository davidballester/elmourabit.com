import React from 'react';

import { useTranslation } from 'react-i18next';
import { css } from 'glamor';
import Button from '@pluralsight/ps-design-system-button';

const Language = ({ language, name }) => {
  const { i18n } = useTranslation();
  return (
    <Button
      appearance={Button.appearances.flat}
      onClick={() => i18n.changeLanguage(language)}
    >
      {name}
    </Button>
  );
};

const languagesListStyles = css({
  display: 'flex',
  padding: 0,
  margin: 0,
});

const languagesItemStyles = css({
  listStyle: 'none',
  margintRight: 'var(--psLayoutSpacingSmall)',
  ':last-child': {
    marginRight: 0,
  },
});

const Languages = () => {
  const { t } = useTranslation();
  const languages = ['en', 'es', 'fr', 'ar'];
  return (
    <ul {...languagesListStyles}>
      {languages.map(language => (
        <li key={language} {...languagesItemStyles}>
          <Language
            language={language}
            name={t('language', { lng: language })}
          />
        </li>
      ))}
    </ul>
  );
};

export default Languages;
