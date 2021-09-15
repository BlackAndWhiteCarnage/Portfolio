import React, { useRef, useEffect, useState } from 'react';
// STYLES
import { CursorWrapper, Ouch, Bang, CursorImage } from './Cursor.styles';
// ICONS
import cursorIcon from 'assets/icons/cursor-icon.svg';
import cursorIconClick from 'assets/icons/cursorClick-icon.svg';
import cursorOk from 'assets/icons/emailSendCursor-icon.svg';
import ouchIcon from 'assets/icons/ouch-icon.svg';
import bangIcon from 'assets/icons/bang-icon.svg';
import waveIcon from 'assets/icons/waveCursor-icon.svg';

const Cursor = ({ emailSend }) => {
  const ref = useRef(null);
  const [wave, setWave] = useState(true);
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
    setTimeout(() => {
      setWave(false);
    }, 2000);
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
          <CursorImage src={cursorIconClick} className={!emailSend && !wave && cursor && 'show'} />{' '}
          <CursorImage src={cursorIcon} className={!emailSend && !wave && !cursor && 'show'} />
          <CursorImage src={waveIcon} className={wave && 'wave'} />
          <CursorImage src={cursorOk} className={emailSend && 'emailSend'} />
        </>
      )}
    </CursorWrapper>
  );
};

export default Cursor;
