import PropTypes from 'prop-types';
import { Body, Head, StyledCard } from './Card.styled';

const Card = ({ icon, title, body }) => {
  return (
    <StyledCard>
      {icon && <Head>{icon}</Head>}
      <Body>
        <h3>{title}</h3>
        <p>{body}</p>
      </Body>
    </StyledCard>
  );
};

Card.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Card;
