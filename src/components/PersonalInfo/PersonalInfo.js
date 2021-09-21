import React from 'react';
// ICONS
import user from 'assets/icons/user-icon.svg';
import hrefArrow from 'assets/icons/hrefArrow-icon.svg';
import shoe from 'assets/icons/shoeSize-icon.svg';
import portfolioQRCodeIcon from 'assets/icons/portfolioQRCode-icon.svg';
// STYLES
import { ButtonAndPersonalInfoWrapper, Header, InfoWrapper, Info, Icon, PortfolioQRCode, QRCode } from './PersonalInfo.styles';

const PersonalInfo = ({ isEnglish }) => {
  return (
    <ButtonAndPersonalInfoWrapper>
      <Header>{!isEnglish ? 'Personal Info' : 'Dane osobiste'}</Header>
      <InfoWrapper>
        <Info>
          <p>KRZYSZTOF REPSCH</p>
          <Icon src={user} />
        </Info>
        <Info href='mailto:krzys.repsch@gmail.com' target='_blank' className='addHover' id='active'>
          <p id='active'>KRZYS.REPSCH@GMAIL.COM</p>
          <Icon src={hrefArrow} id='active' />
        </Info>
        <Info href='tel:603-312-504' target='_blank' className='addHover' id='active'>
          <p id='active'>603 312 504</p>
          <Icon src={hrefArrow} id='active' />
        </Info>
        <Info>
          <p>{!isEnglish ? 'Shoe size 45/46' : 'Rozmiar buta 45/46'}</p>
          <Icon src={shoe} />
        </Info>
      </InfoWrapper>
      <PortfolioQRCode>
        <QRCode src={portfolioQRCodeIcon} />
      </PortfolioQRCode>
    </ButtonAndPersonalInfoWrapper>
  );
};

export default PersonalInfo;
