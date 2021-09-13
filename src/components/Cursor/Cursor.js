import React, { useRef, useEffect, useState } from 'react';
// STYLES
import { CursorWrapper, Ouch, Bang, CursorImage } from './Cursor.styles';
// ICONS
import cursorIcon from 'assets/icons/cursor-icon.svg';
import cursorIconClick from 'assets/icons/cursorClick-icon.svg';
import ouchIcon from 'assets/icons/ouch-icon.svg';
import bangIcon from 'assets/icons/bang-icon.svg';

const Cursor = () => {
  const ref = useRef(null);
  const [ouch, setOuch] = useState(false);
  const [bang, setBang] = useState(false);
  const [cursor, setCursor] = useState(false);
  const [isTouchscreen, setIsTouchscreen] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchscreen(true);
    } else {
      setIsTouchscreen(false);
    }
  }, []);

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
      setBang(true);
    } else {
      setOuch(true);
    }

    setTimeout(() => {
      setBang(false);
      setOuch(false);
    }, 400);
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
      setCursor(true);
    } else {
      setCursor(false);
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
      <Ouch src={ouchIcon} className={ouch && 'ouch'} />
      <Bang src={bangIcon} className={bang && 'bang'} />
      {!isTouchscreen && (
        <>
          <CursorImage src={cursorIconClick} className={cursor && 'show'} /> <CursorImage src={cursorIcon} className={!cursor && 'show'} />
        </>
      )}
    </CursorWrapper>
  );
};

export default Cursor;
