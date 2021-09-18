import React from 'react';
import PropTypes from 'prop-types';
// ICONS
import linkIcon from 'assets/icons/link-icon.svg';
import githubIcon from 'assets/icons/github-icon.svg';
// STYLES
import { Wrapper, Link } from './ProjectLinks.styled';

const ProjectLinks = ({ index, current, project }) => {
  return (
    <Wrapper className={index === current && 'show'}>
      <Link id='active' target='_blank' href={project.live}>
        <img src={linkIcon} id='active' alt='Project live link icon' />
      </Link>
      <Link id='active' target='_blank' href={project.repo}>
        <img src={githubIcon} id='active' alt='Project github link icon' />
      </Link>
    </Wrapper>
  );
};

ProjectLinks.propTypes = {
  index: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  project: PropTypes.object.isRequired,
};

export default ProjectLinks;
