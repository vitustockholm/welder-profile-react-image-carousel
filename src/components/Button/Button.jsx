import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ text, action, large, medium }) => {
  return (
    <StyledButton large={large} medium={medium} onClick={action}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  large: PropTypes.bool,
  medium: PropTypes.bool,
};

export default Button;
