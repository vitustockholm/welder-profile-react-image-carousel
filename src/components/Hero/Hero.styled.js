import styled from 'styled-components';

export const StyledHero = styled.main`
  font-family: var(--hero-font);
  background-image: url(${`https://bootstrapmade.com/demo/templates/OnePage/assets/img/hero-bg.jpg`});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 78px);
  position: relative;
  z-index: 1;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 50px;
  h1 {
    color: var(--dark-color);
    text-align: center;
    font-size: 2.2em;
  }
  h3 {
    font-family: var(--services-font);
    text-align: center;
    font-size: 1em;
    font-weight: 600;
    color: var(--p-color);
    margin-top: 5px;
    margin-bottom: 25px;
  }
  button {
    font-family: var(--hero-font);
    font-size: 14px;
  }
  @media (min-width: 786px) {
    padding: 70px 124px;
    h1 {
      font-size: 3em;
    }
    h3 {
      font-size: 18px;
    }
  }
  @media (min-width: 1170px) {
    padding: 70px 290px;
    h1 {
      font-size: 3.4em;
    }
    h3 {
      font-size: 20px;
    }
  }
`;

export const Fade = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(255, 255, 255, 0.8);
  border-top: solid 1px rgba(230, 230, 230, 0.85);
`;

export const Services = styled.section`
  margin-top: 35px;
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 786px) {
    justify-content: center;
  }
  @media (min-width: 985px) {
    flex-wrap: nowrap;
  }
`;
