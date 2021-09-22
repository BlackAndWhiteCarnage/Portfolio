import React from 'react';
import PropTypes from 'prop-types';
// ICONS
import userIcon from 'assets/icons/user-icon.svg';
import hrefArrowIcon from 'assets/icons/hrefArrow-icon.svg';
import shoeIcon from 'assets/icons/shoeSize-icon.svg';
import rickAstleyQRCodeIcon from 'assets/icons/rickAstleyQRCode-icon.svg';
// STYLES
import { ButtonAndPersonalInfoWrapper, Header, InfoWrapper, Info, Icon, PortfolioQRCode, QRCode } from './PersonalInfo.styles';

const PersonalInfo = ({ isEnglish }) => {
  return (
    <ButtonAndPersonalInfoWrapper>
      <Header>{!isEnglish ? 'Personal Info' : 'Dane osobiste'}</Header>
      <InfoWrapper>
        <Info>
          <p>KRZYSZTOF REPSCH</p>
          <Icon src={userIcon} />
        </Info>
        <Info href='mailto:krzys.repsch@gmail.com' target='_blank' className='addHover' id='active'>
          <p id='active'>KRZYS.REPSCH@GMAIL.COM</p>
          <Icon src={hrefArrowIcon} id='active' />
        </Info>
        <Info href='tel:603-312-504' target='_blank' className='addHover' id='active'>
          <p id='active'>603 312 504</p>
          <Icon src={hrefArrowIcon} id='active' />
        </Info>
        <Info>
          <p>{!isEnglish ? 'Shoe size 45/46' : 'Rozmiar buta 45/46'}</p>
          <Icon src={shoeIcon} />
        </Info>
      </InfoWrapper>
      <PortfolioQRCode className={isEnglish && 'eng'}>
        <QRCode src={rickAstleyQRCodeIcon} />
      </PortfolioQRCode>
    </ButtonAndPersonalInfoWrapper>
  );
};

PersonalInfo.propTypes = {
  isEnglish: PropTypes.bool.isRequired,
};

export default PersonalInfo;
