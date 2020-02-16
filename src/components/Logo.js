import React from 'react';

import { css } from 'glamor';

import logoSvg from '../assets/logo.svg';
import smallLogoSvg from '../assets/logo_small.svg';

import { mediaMinWidthMd } from '../constants';

const bigLogo = css({
  display: 'none',
  [mediaMinWidthMd]: {
    display: 'block',
  },
});

const smallLogo = css({
  display: 'block',
  [mediaMinWidthMd]: {
    display: 'none',
  },
});

const imgStyles = css({
  margin: 'auto',
  width: '100%',
  maxWidth: 600,
});

const Img = ({ logo, ...props }) => (
  <img {...imgStyles} {...props} src={logo} alt="Namae El Mourabit Belhadi" />
);

const Logo = () => (
  <>
    <Img {...bigLogo} logo={logoSvg} />
    <Img {...smallLogo} logo={smallLogoSvg} />
  </>
);

export default Logo;
