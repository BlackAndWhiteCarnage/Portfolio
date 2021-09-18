import React, { useRef, useEffect } from 'react';
// STYLES
import { ReadMoreWrapper, ReadMore, Header, Answer, HeroImage } from './MoreAboutMe.styles';
// IMAGES
import hero from 'assets/images/heroImageProject.svg';
import heroHorizontal from 'assets/images/heroImageProjectHorizontal.svg';
import heroMedium from 'assets/images/heroImageProjectMedium.svg';
// HELPERS
import { matchMedia, matchMediaMedium, matchMediaHorizontal } from 'helpers/matchMedia';

const MoreAboutMe = ({ toggleReadMore, toggleReadMoreHandler }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [toggleReadMoreHandler]);

  return (
    <>
      <HeroImage
        src={matchMediaHorizontal ? heroHorizontal : matchMediaMedium ? heroMedium : matchMedia && hero}
        className={toggleReadMore && 'show'}
      />
      <ReadMoreWrapper className={toggleReadMore && 'show'} ref={ref}>
        <ReadMore>
          <Header>Who am I exacly?</Header>
          <Answer>
            For be honest I hate questions like - 'Tell us something about yourself', Cmone! What the fuck I suppose to tell about myself? Have you so
            interesting life that you could answer that question anyhing more than couple boring words? "Im X years old, my interested in this and
            that ", you expect me to tell story of my life? I'dont know you! If you really wanna know who am I we shoud hang out for a beer! All of
            necessary informations are in my resume.
          </Answer>
          <Header>How I learned those things?</Header>
          <Answer>
            Thats a better question! Mostly I've learned things from tutorials and courses, documentation is also a good lecture. I will not lie to
            you! I'm not 24/7 learner and I've got lazy days but when I have a problem, I will sit on my ass until I will solve it! Determination is
            my second name.
            <br />
            <br />
            Just joking...
            <br />
            <br />
            it's Paweł
          </Answer>
          <Header>Am I ambitios?</Header>
          <Answer>
            Youp! Pretty mutch I am!
            <br />
            <br />
            I've always wanna be someone, but for a long time I didnt knew what i wanna do for the rest of my life. One day, two years ago I was
            watching youtube and I found a guy who was recording vlogs about programming. Then something touched me that I can be programmer, it's
            hard they said... But you dont need math they said.
            <br />
            <br />
            So!
            <br />
            <br />
            I'm in!
          </Answer>
          <Header>Why shoud you hire me?</Header>
          <Answer>
            That's your decision but I can guarantee you that I wanna change my life and nothing cant stop me. If you'll not hire me thats not a big
            deal cause I will search for a job as long as I will get one. I'm really enjoing programming and I'm hungry for a learning new things. I
            wanna sink in that programming swamp!
          </Answer>
        </ReadMore>
      </ReadMoreWrapper>
    </>
  );
};

export default MoreAboutMe;
