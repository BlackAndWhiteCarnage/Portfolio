import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// STYLES
import { CursorWrapper, Ouch, Bang, CursorImage } from './Cursor.styles';
// ICONS
import cursorIcon from 'assets/icons/cursor-icon.svg';
import cursorClickIcon from 'assets/icons/cursorClick-icon.svg';
import cursorOkIcon from 'assets/icons/emailSendCursor-icon.svg';
import ouchIcon from 'assets/icons/ouch-icon.svg';
import bangIcon from 'assets/icons/bang-icon.svg';
import waveIcon from 'assets/icons/waveCursor-icon.svg';

const Cursor = ({ emailSend }) => {
  const ref = useRef(null);

  const [wavingHand, setWavingHand] = useState(true);
  const [ouch, setOuch] = useState(false);
  const [bang, setBang] = useState(false);
  const [cursorPointer, setCursorPointer] = useState(false);
  const [isTouchscreen, setIsTouchscreen] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchscreen(true);
    } else {
      setIsTouchscreen(false);
    }
    setTimeout(() => {
      setWavingHand(false);
    }, 2000);
  }, []);

  const mouseMoveHandler = (e) => {
    ref.current.style.top = e.clientY + 'px';
    ref.current.style.left = e.clientX + 'px';

    return;
  };

  const checkCursorActionHandler = (e, key) => {
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
      if (key !== 'mouseover') {
        setBang(true);
      } else {
        setCursorPointer(true);
      }
    } else {
      if (key !== 'mouseover') {
        setOuch(true);
      } else {
        setCursorPointer(false);
      }
    }

    if (key !== 'mouseover') {
      setTimeout(() => {
        setBang(false);
        setOuch(false);
      }, 300);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseover', (e) => checkCursorActionHandler(e, 'mouseover'));
    window.addEventListener('click', checkCursorActionHandler);

    return;
  }, []);

  return (
    <CursorWrapper ref={ref}>
      {!wavingHand && (
        <>
          <Ouch src={ouchIcon} className={ouch && 'ouch'} />
          <Bang src={bangIcon} className={bang && 'bang'} />
        </>
      )}
      {!isTouchscreen && (
        <>
          <CursorImage src={cursorClickIcon} className={!emailSend && !wavingHand && cursorPointer && 'show'} />{' '}
          <CursorImage src={cursorIcon} className={!emailSend && !wavingHand && !cursorPointer && 'show'} />
          <CursorImage src={waveIcon} className={wavingHand && 'wave'} />
          <CursorImage src={cursorOkIcon} className={emailSend && 'emailSend'} />
        </>
      )}
    </CursorWrapper>
  );
};

Cursor.propTypes = {
  emailSend: PropTypes.bool,
};

export default Cursor;
