import React from 'react';

import { css } from 'glamor';
import { useTranslation, Trans } from 'react-i18next';
import i18n from 'i18next';

import { mediaMinWidthMd } from '../constants';
import MovingText from './MovingText';

const Title = ({ lng }) => (
  <span
    style={{
      direction: i18n.dir(lng),
      width: '100%',
      display: 'inline-block',
    }}
  >
    <Trans i18nKey="hello" tOptions={{ lng }} />
  </span>
);

const h1Styles = css({
  fontWeight: 'var(--psTypeFontWeightBold)',
  marginTop: 'var(--psLayoutSpacingLarge)',
  color: 'var(--psColorsTextIconHighOnLight)',
  fontSize: 'var(--psTypeFontSizeXXLarge)',
  lineHeight: 1.4,
  display: 'flex',
  position: 'relative',
  height: '2.8em',
  [mediaMinWidthMd]: {
    fontSize: 'var(--psTypeFontSizeJumbo)',
    lineHeight: 1.2,
    height: 'auto',
  },
});

const h2Styles = css({
  fontWeight: 'var(--psTypeFontWeightBold)',
  marginBottom: 'var(--psLayoutSpacingMedium)',
  color: 'var(--psColorsTextIconHighOnLight)',
  fontSize: 'var(--psTypeFontSizeLarge)',
  lineHeight: 1.4,
  [mediaMinWidthMd]: {
    fontSize: 'var(--psTypeFontSizeJumbo)',
  },
});

const pStyles = css({
  marginBottom: 'var(--psLayoutSpacingLarge)',
  color: 'var(--psColorsTextIconHighOnLight)',
  fontSize: 'var(--psTypeFontSizeMedium)',
});

const linkStyles = css({
  color: 'inherit',
  ':visited': {
    color: 'inherit',
  },
  ':hover': {
    color: 'var(--psColorsTextIconHighOnLightContrast)',
  },
});

const MainText = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 {...h1Styles}>
        <MovingText
          styles={{ width: '100%' }}
          texts={{
            en: <Title key="en" lng="en" />,
            es: <Title key="es" lng="es" />,
            fr: <Title key="fr" lng="fr" />,
            ar: <Title key="ar" lng="ar" />,
          }}
        />
      </h1>
      <h2 {...h2Styles} style={{ direction: i18n.dir() }}>
        {t('subtitle')}
      </h2>
      <p {...pStyles} style={{ direction: i18n.dir() }}>
        {t('text')}
      </p>
      <p {...pStyles} style={{ direction: i18n.dir() }}>
        {t('contact')}{' '}
        <a
          {...linkStyles}
          href="https://twitter.com/namaeelmourabit"
          target="blank"
        >
          {t('contactLink')}
        </a>
      </p>
    </>
  );
};

export default MainText;
