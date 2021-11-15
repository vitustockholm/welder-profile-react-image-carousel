import styled from 'styled-components';

export const StyledCard = styled.div`
  max-width: 500px;
  padding: 100px 20px;
  font-family: var(--services-font);
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 29px 0 rgb(18, 66, 101, 8%);
  @media (min-width: 786px) {
    max-width: 310px;
    padding: 60px 20px;
  }
`;

export const Head = styled.div`
  color: var(--primary-color);
  margin-bottom: 10px;
  svg {
    font-size: 35px;
  }
  img {
    width: 100%;
  }
`;

export const Body = styled.div`
  h3 {
    color: var(--dark-color);
    margin-bottom: 14px;
  }
  p {
    color: #000;
    line-height: 1.6;
    font-size: 15px;
  }
`;
