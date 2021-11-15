import '../../App.css';

import { Fade, Heading, StyledHero } from './Hero.styled';

//
import ImageSlider from '../slider/ImageSlider';
import { SliderData } from '../slider/SliderData';

const Hero = () => {
  return (
    <StyledHero>
      <Fade />
      <Heading className='container'>
        <ImageSlider slides={SliderData} />
      </Heading>
    </StyledHero>
  );
};

export default Hero;
