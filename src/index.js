import React from 'react';
import { render } from 'react-dom';

import Theme from '@pluralsight/ps-design-system-theme';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Helmet } from 'react-helmet';

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
            "I'm an economist with more than five years of experience in a bank's Back Office. I'm always looking for challenges and new opportunities to further develop my career in this complex financial world.",
          contact: 'If you want to reach out,',
          contactLink: 'send me a tweet!',
        },
      },
      es: {
        translation: {
          language: 'Español',
          hello: 'Hola, soy Namae El Mourabit',
          subtitle: 'Soy especialista de Back Office en Valores.',
          text:
            'Soy una economista con más de cinco años de experiencia en Back Office de un banco. Siempre busco retos y nuevas oportunidades para desarrollarme en este complejo mundo financiero.',
          contact: 'Si quieres contactar conmigo,',
          contactLink: '¡mándame un tweet!',
        },
      },
      fr: {
        translation: {
          language: 'Français',
          hello: 'Bonjour, je suis Namae El Mourabit',
          subtitle: 'Specialist en Back-Office financial',
          text:
            "Je suis une economist avec plus de cinq ans d'experience en Back-Office dans un banc. Je cherche toujour des opportunités pour mon développement dans ce complex monde finacier.",
          contact: 'Si vous souhaite contacter avec moi',
          contactLink: 'Envoi mon un tweet!',
        },
      },
      ar: {
        translation: {
          language: 'العربية',
          hello: 'مرحباً ، أنا نماء المرابط',
          subtitle: ' متخصصة في العالم المالي',
          text:
            'أنا خبيرة اقتصادي ولدي أكثر من خمس سنوات من الخبرة في  لبنك. أبحث دائمًا عن التحديات والفرص الجديدة للتطور في هذا العالم المالي',
          contact: 'إذا كنت تريد الاتصال بي',
          contactLink: 'أرسل لي تويتر',
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
    <Helmet>
      <title>Namae El Mourabit</title>
      <meta
        name="description"
        content="Hello, I'm Namae El Mourabit, an economist with more than five years of experience in a bank's Back Office."
      />
      <meta property="og:title" content="Name El Mourabit" />
      <meta
        property="og:description"
        content="Hello, I'm Namae El Mourabit, an economist with more than five years of experience in a bank's Back Office."
      />
      <meta
        property="og:image"
        content="https://elmourabit.com/site-thumbnail.png"
      />
      <meta property="og:url" content="https://elmourabit.com" />
      <meta
        name="twitter:card"
        content="https://elmourabit.com/site-large-image.png"
      />
      <meta property="og:site_name" content="Namae El Mourabit" />
      <meta name="twitter:image:alt" content="Hello, I'm Namae El Mourabit" />
    </Helmet>
    <Layout>
      <Logo />
      <MainText />
    </Layout>
  </Theme>
);

render(<App />, document.getElementById('root'));
