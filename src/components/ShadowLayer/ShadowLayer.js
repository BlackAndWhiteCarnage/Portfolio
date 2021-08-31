import React from 'react';
// STYLES
import { ShadowWrapper } from './ShadowLayer.styles';

const ShadowLayer = ({ className, viewProject }) => {
  return <ShadowWrapper className={`${className} ${viewProject && 'hide'}`} />;
};

export default ShadowLayer;
