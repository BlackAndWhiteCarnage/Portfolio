import React from 'react';
// IMAGES
import hero from 'assets/images/heroImage.svg';
import heroMedium from 'assets/images/heroImageMedium.svg';
import heroHorizontal from 'assets/images/heroImageHorizontal.svg';
// HELPERS
import { matchMedia, matchMediaMedium, matchMediaHorizontal } from 'helpers/matchMedia';
// STYLES
import { Image, ComicLayer } from './HeroImage.styles';

const HeroImage = () => (
  <>
    <Image src={matchMediaHorizontal ? heroHorizontal : matchMediaMedium ? heroMedium : matchMedia && hero} />
    <ComicLayer />
  </>
);

export default HeroImage;
