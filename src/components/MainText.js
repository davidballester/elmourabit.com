import React from 'react';

import { css } from 'glamor';

import { mediaMinWidthMd } from '../constants';

const h1Styles = css({
  fontWeight: 'var(--psTypeFontWeightBold)',
  marginTop: 'var(--psLayoutSpacingLarge)',
  color: 'var(--psColorsTextIconHighOnLight)',
  fontSize: 'var(--psTypeFontSizeXXLarge)',
  lineHeight: 1.4,
  [mediaMinWidthMd]: {
    fontSize: 'var(--psTypeFontSizeJumbo)',
    lineHeight: 1.2,
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

const MainText = () => (
  <>
    <h1 {...h1Styles}>Hola, soy Namae El Mourabit.</h1>
    <h2 {...h2Styles}>Soy especialista de Back Office en Valores.</h2>
    <p {...pStyles}>
      Soy una economista con más de cinco años de experiencia en Back Office de
      un banco. Siempre busco retos y nuevas oportunidades para desarrollarme en
      este complejo mundo financiero.
    </p>
    <p {...pStyles}>
      Si quieres contactar conmigo,{' '}
      <a
        {...linkStyles}
        href="https://twitter.com/namaeelmourabit"
        target="blank"
      >
        ¡mándame un tweet!
      </a>
    </p>
  </>
);

export default MainText;
