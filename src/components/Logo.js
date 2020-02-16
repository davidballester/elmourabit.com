import React from 'react';

import { css } from 'glamor';

import logo from '../assets/logo.svg';

const imgStyles = css({
  display: 'block',
  margin: 'auto',
  width: '100%',
  maxWidth: 600,
});

const Logo = () => (
  <img {...imgStyles} src={logo} alt="Namae El Mourabit Belhadi" />
);

export default Logo;
