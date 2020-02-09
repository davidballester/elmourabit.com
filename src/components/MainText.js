import React from 'react';

import { css } from 'glamor';

const h1Styles = css({
  fontSize: 'var(--psTypeFontSizeJumbo)',
  fontWeight: 'var(--psTypeFontWeightBold)',
  lineHeight: 1.2,
  marginTop: 'var(--psLayoutSpacingLarge)',
  marginBottom: 'var(--psLayoutSpacingMedium)',
  color: 'var(--psColorsTextIconHighOnLight)',
});

const pStyles = css({
  fontSize: 'var(--psTypeFontSizeMedium)',
  marginBottom: 'var(--psLayoutSpacingLarge)',
  color: 'var(--psColorsTextIconHighOnLight)',
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
    <h1 {...h1Styles}>
      Hola, soy Namae El Mourabit.
      <br />
      Soy especialista en Valores de Back Office
    </h1>
    <p {...pStyles}>
      Soy una economista con más de cinco años de experiencia en Back Office de
      un banco. Siempre busco retos y nuevas oportunidades para desarrollarme en
      este complejo mundo financiero.
    </p>
    <p {...pStyles}>
      If you want to reach out,{' '}
      <a
        {...linkStyles}
        href="https://twitter.com/namaeelmourabit"
        target="blank"
      >
        send me a tweet!
      </a>
    </p>
  </>
);

export default MainText;
