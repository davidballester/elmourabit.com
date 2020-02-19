import React from 'react';
import { render } from 'react-dom';

import Theme from '@pluralsight/ps-design-system-theme';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Layout from './components/Layout';
import Logo from './components/Logo';
import MainText from './components/MainText';

import './styles.css';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          hello: "Hello, I'm Namae El Mourabit",
        },
      },
      es: {
        translation: {
          hello: 'Hola, soy Namae El Mourabit',
        },
      },
      fr: {
        translation: {
          hello: 'Bonjour, je suis Namae El Mourabit',
        },
      },
      ar: {
        translation: {
          hello: 'مرحباً ، أنا نماء المرابط',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

const App = () => (
  <Theme name={Theme.names.light}>
    <Layout>
      <Logo />
      <MainText />
    </Layout>
  </Theme>
);

render(<App />, document.getElementById('root'));
