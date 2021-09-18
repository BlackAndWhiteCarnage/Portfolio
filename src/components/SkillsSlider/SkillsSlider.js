import React, { useState, useEffect } from 'react';
// COMPONENTS
import Button from 'components/Button/Button';
// DATA
import { skills } from 'data/skillsData';
// STYLES
import { Wrapper, MySkillsWrapper, MySkillsBoringListWrapper, Skill, Header } from './SkillsSlider.styles';

const SkillsSlider = () => {
  const [slide, setSlide] = useState(0);
  let [current, setCurrent] = useState(slide);
  let [next, setNext] = useState(skills.length - 1);
  let [prev, setPrev] = useState(current + 1);
  const [fullList, setFullList] = useState(false);

  let toggleInterval = false;

  const fireSlider = () => {
    toggleInterval = setInterval(() => {
      setSlide(slide + 1);
    }, 1500);
    skillsSliderHandler();
  };

  useEffect(() => {
    fireSlider();
    return () => clearTimeout(toggleInterval);
  }, [slide]);

  const skillsSliderHandler = () => {
    setCurrent(current === 0 ? (current = skills.length - 1) : current - 1);
    setNext(next === 0 ? (next = skills.length - 1) : next - 1);
    setPrev(prev === 0 ? (prev = skills.length - 1) : prev - 1);
  };

  const toggleBoringListHandler = () => {
    setFullList(!fullList);
  };

  return (
    <Wrapper>
      <Header>My skills</Header>
      <MySkillsWrapper className={!fullList && 'show'}>
        {skills.map((skill, index) => (
          <Skill key={index} className={`${current === index && 'show'} ${next === index && 'next'} ${prev === index && 'prev'}`}>
            <img src={skill.image} key={index} alt={`${skill.text} Icon`} />
          </Skill>
        ))}
      </MySkillsWrapper>
      <MySkillsBoringListWrapper className={fullList && 'show'}>
        {skills.map((skill, index) => (
          <p key={index}>{skill.text}</p>
        ))}
      </MySkillsBoringListWrapper>
      <Button text={fullList ? 'Show Slider List' : 'Show Full List'} className='right' onClick={toggleBoringListHandler} />
    </Wrapper>
  );
};

export default SkillsSlider;
