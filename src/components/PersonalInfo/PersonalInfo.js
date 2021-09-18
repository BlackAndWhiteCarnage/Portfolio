import React from 'react';
// ICONS
import user from 'assets/icons/user-icon.svg';
import hrefArrow from 'assets/icons/hrefArrow-icon.svg';
import shoe from 'assets/icons/shoeSize-icon.svg';
// STYLES
import { ButtonAndPersonalInfoWrapper, Header, InfoWrapper, Info, Icon } from './PersonalInfo.styles';

const PersonalInfo = () => {
  return (
    <ButtonAndPersonalInfoWrapper>
      <Header>PERSONAL INFO</Header>
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
          <p>Shoe Size 45/46</p>
          <Icon src={shoe} />
        </Info>
      </InfoWrapper>
    </ButtonAndPersonalInfoWrapper>
  );
};

export default PersonalInfo;
