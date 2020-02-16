import React, { useState, useEffect, useRef } from 'react';

import { useTransition, animated } from 'react-spring';
import useComponentSize from '@rehooks/component-size';

const MovingText = ({ texts, styles }) => {
  const [textIndex, setTextIndex] = useState(0);
  const ref = useRef(null);
  const { height } = useComponentSize(ref);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTextIndex = (textIndex + 1) % texts.length;
      setTextIndex(newTextIndex);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [texts, textIndex]);

  const transitions = useTransition(texts[textIndex], text => text, {
    from: { position: 'absolute', width: '100%', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <span style={{ ...styles, height, display: 'inline-block' }}>
      {transitions.map(({ item, props, key }) => (
        <animated.span key={key} style={props} ref={ref}>
          {item}
        </animated.span>
      ))}
    </span>
  );
};

export default MovingText;
