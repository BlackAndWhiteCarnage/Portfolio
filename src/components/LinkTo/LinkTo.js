import React from 'react';
import { Link } from 'react-scroll';

const LinkTo = ({ text, to }) => {
  return (
    <Link to={to} smooth={true} duration={800}>
      {text}
    </Link>
  );
};

export default LinkTo;
