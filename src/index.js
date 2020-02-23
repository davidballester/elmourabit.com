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
          language: 'English',
          hello: "Hello, I'm Namae El Mourabit",
          subtitle: "I'm a settlement securities Back Office specialist",
          text:
            "I'm an economist with more than five years of experience in a bank's Back Office. I'm always looking for challenges and new oportunities to further develop my career in this complex financial world.",
        },
      },
      es: {
        translation: {
          language: 'Español',
          hello: 'Hola, soy Namae El Mourabit',
          subtitle: 'Soy especialista de Back Office en Valores.',
          text:
            'Soy una economista con más de cinco años de experiencia en Back Office de un banco. Siempre busco retos y nuevas oportunidades para desarrollarme en este complejo mundo financiero.',
        },
      },
      fr: {
        translation: {
          language: 'Français',
          hello: 'Bonjour, je suis Namae El Mourabit',
          subtitle: 'Lorem ipsum dolor sit amet',
          text: 'Lorem ipsum dolor sit amet',
        },
      },
      ar: {
        translation: {
          language: 'العربية',
          hello: 'مرحباً ، أنا نماء المرابط',
          subtitle: 'Lorem ipsum dolor sit amet',
          text: 'Lorem ipsum dolor sit amet',
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
