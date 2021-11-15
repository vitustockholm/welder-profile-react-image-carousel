import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  padding: ${({ medium, large }) =>
    medium ? '10px 20px' : large ? '14px 55px' : '5px 10px'};
  background-color: var(--primary-color);
  color: white;
  white-space: nowrap;
  font-size: 14px;
  font-family: var(--nav-font);
  :hover {
    background-color: var(--secondary-color);
  }
`;
