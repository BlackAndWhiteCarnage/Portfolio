import React from 'react';
import { Link } from 'react-scroll';

const LinkTo = ({ text, to, toggleModalHandler }) => {
  return (
    <Link to={to} smooth={true} duration={800} onClick={toggleModalHandler}>
      {text}
    </Link>
  );
};

export default LinkTo;
