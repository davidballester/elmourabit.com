import React from 'react';

import { css } from 'glamor';
import {
  SocialTwitterIcon,
  SocialLinkedinIcon,
} from '@pluralsight/ps-design-system-icon';
import * as foo from '@pluralsight/ps-design-system-core';

console.log(foo);

const footerStyles = css({
  borderTop: '1px solid var(--psColorsBorderLowOnLight)',
  paddingTop: 'var(--psLayoutSpacingLarge)',
  display: 'flex',
  flexDirection: 'row-reverse',
});

const iconLinkStyles = css({
  color: 'var(--psColorsTextIconHighOnLight)',
  ':visited': {
    color: 'var(--psColorsTextIconHighOnLight)',
  },
  ':hover': {
    color: 'var(--psColorsPurpleCustom)',
  },
});

const listStyles = css({
  margin: 0,
  padding: 0,
  display: 'flex',
});

const listItemStyles = css({
  listStyle: 'none',
  marginLeft: 'var(--psLayoutSpacingLarge)',
  ':first-child': {
    marginLeft: 0,
  },
});

const Footer = () => (
  <footer {...footerStyles}>
    <ul {...listStyles}>
      <li {...listItemStyles}>
        <a
          {...iconLinkStyles}
          href="https://twitter.com/namaeelmourabit"
          target="blank"
        >
          <SocialTwitterIcon size={SocialTwitterIcon.sizes.large} />
        </a>
      </li>
      <li {...listItemStyles}>
        <a
          {...iconLinkStyles}
          href="https://www.linkedin.com/in/namae-el-mourabit-belhadi-8426a130"
          target="blank"
        >
          <SocialLinkedinIcon size={SocialLinkedinIcon.sizes.large} />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
