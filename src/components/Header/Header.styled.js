import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 35px;
`;

export const Logo = styled.div`
  color: var(--secondary-color);
  font-family: var(--hero-font);
  font-weight: 300;
  font-size: 28px;
`;

export const Toggle = styled.a`
  font-size: 28px;
  color: var(--secondary-color);
  position: absolute;
  top: 18px;
  right: 20px;
  :hover svg {
    color: var(--primary-color);
  }
`;

export const Nav = styled.nav`
  font-family: var(--nav-font);
  width: 100%;
  ul {
    width: 100%;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    list-style: none;
    flex-direction: column;
    margin: 0;
    padding: 0;
    li {
      padding: 5px;
      display: block;
      width: 100%;
      text-align: center;
      a {
        text-decoration: none;
        color: var(--secondary-color);
        font-size: 14px;
        span {
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
        }
      }
      :hover a {
        color: var(--primary-color);
      }
    }
  }
  @media (min-width: 985px) {
    ${Toggle} {
      display: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      li {
        padding: 10px 15px;
        width: initial;
        button {
          margin-left: 10px;
        }
      }
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 985px) {
    flex-direction: row;
    a {
      text-decoration: none;
      color: var(--secondary-color);
      font-size: 14px;
      span {
        display: flex;
        align-items: center;
        gap: 5px;
        white-space: nowrap;
      }
    }
  }
`;

export const DropdownContent = styled.div`
  display: none;
  ${({ open }) =>
    open &&
    `
  display: block;
  
  `}
  @media (min-width: 985px) {
    position: absolute;
    display: block;
    opacity: 0;
    left: 0;
    top: calc(100% + 0.25rem);
    background: #fff;
    white-space: nowrap;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.4);
    padding: 10px;
    transform: translateY(-10px);
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
    pointer-events: none;
    z-index: 2;
    ul {
      display: flex;
      flex-direction: column;
      li {
        padding: 5px 0;
      }
    }
    ${({ open }) =>
      open &&
      `
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  
  
  `}
  }
`;
