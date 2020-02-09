import React from 'react';
import { render } from 'react-dom';

import Theme from '@pluralsight/ps-design-system-theme';

import Layout from './components/Layout';
import Logo from './components/Logo';
import MainText from './components/MainText';

import './styles.css';

const App = () => (
  <Theme name={Theme.names.light}>
    <Layout>
      <Logo />
      <MainText />
    </Layout>
  </Theme>
);

render(<App />, document.getElementById('root'));
