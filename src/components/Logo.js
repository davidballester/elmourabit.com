import React from 'react';

import { css } from 'glamor';

import logo from '../assets/logo.svg';

const imgStyles = css({
  display: 'block',
  margin: 'auto',
  maxWidth: 600,
});

const Logo = () => <img {...imgStyles} src={logo} />;

export default Logo;
