import React from 'react';

import { css } from 'glamor';

import Footer from './Footer';
import Languages from './Languages';

const layoutStyles = css({
  maxWidth: 960,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  paddingTop: 'var(--psLayoutSpacingLarge)',
  paddingBottom: 'var(--psLayoutSpacingLarge)',
  paddingLeft: 'var(--psLayoutSpacingMedium)',
  paddingRight: 'var(--psLayoutSpacingMedium)',
});

const mainStyles = css({
  flexGrow: 1,
});

const Layout = ({ children }) => (
  <div {...layoutStyles}>
    <Languages />
    <main {...mainStyles}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
