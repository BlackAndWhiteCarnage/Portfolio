import React, { useRef, useEffect, useState } from 'react';
// STYLES
import { CursorWrapper, Ouch, Bang } from './Cursor.styles';
// ICONS
import cursorIcon from 'assets/icons/cursor-icon.svg';
import ouchIcon from 'assets/icons/ouch-icon.svg';

const Cursor = () => {
  const ref = useRef(null);
  const [ouch, setOuch] = useState(false);

  const mouseMoveHandler = (e) => {
    ref.current.style.top = e.clientY + 'px';
    ref.current.style.left = e.clientX + 'px';

    return;
  };

  const cursorFeedback = (e) => {
    const item = e.target;
    if (
      item.id === 'active' ||
      item.tagName === 'INPUT' ||
      item.tagName === 'TEXTAREA' ||
      item.tagName === 'LABEL' ||
      item.tagName === 'BUTTON' ||
      item.tagName === 'svg' ||
      item.tagName === 'path' ||
      item.tagName === 'A'
    ) {
    } else {
      setOuch(true);
    }

    setTimeout(() => {
      setOuch(false);
    }, 300);
  };

  const activeCursorHandler = (e) => {
    const item = e.target;
    if (
      item.id === 'active' ||
      item.tagName === 'INPUT' ||
      item.tagName === 'TEXTAREA' ||
      item.tagName === 'LABEL' ||
      item.tagName === 'BUTTON' ||
      item.tagName === 'svg' ||
      item.tagName === 'path' ||
      item.tagName === 'A'
    ) {
      ref.current.classList.add('active');
    } else {
      ref.current.classList.remove('active');
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseover', activeCursorHandler);
    window.addEventListener('click', cursorFeedback);

    return;
  }, []);

  return (
    <CursorWrapper ref={ref}>
      <img src={cursorIcon} />
      <Ouch src={ouchIcon} className={ouch && 'ouch'} />
      <Bang src={ouchIcon} className={ouch && 'bang'} />
    </CursorWrapper>
  );
};

export default Cursor;
