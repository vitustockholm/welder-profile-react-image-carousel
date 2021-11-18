import {
  Dropdown,
  DropdownContent,
  Logo,
  Nav,
  StyledHeader,
  Toggle,
} from './Header.styled';
import { BsChevronDown } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Button from '../Button/Button';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <StyledHeader className='container'>
      <Nav open={open}>
        <Logo>MMA/MIG/TIG</Logo>
        <Toggle href='#!#'>
          <FaBars onClick={() => setOpen(!open)} />
        </Toggle>
        <ul>
          <li>
            <a href='#!#'>Home</a>
          </li>
          <li>
            <a href='#!#'>About</a>
          </li>
          <li>
            <a href='#!#'>Services</a>
          </li>
          <li>
            <a href='#!#'>Portfolio</a>
          </li>
          {/* <li>
            <a href='#!#'>Team</a>
          </li>
          <li>
            <a href='#!#'>Pricing</a>
          </li> */}
          {/* <li>
            <Dropdown>
              <a href='#!#'>
                <span onClick={() => setDropDownOpen((prev) => !prev)}>
                  Drop Down
                  <BsChevronDown />
                </span>
              </a>
              <DropdownContent open={dropDownOpen}>
                <ul>
                  <li>
                    <a href='#!#'>Some</a>
                  </li>
                  <li>
                    <a href='#!#'>Content</a>
                  </li>
                </ul>
              </DropdownContent>
            </Dropdown>
          </li> */}
          <li>
            <a href='#!#'>Contact</a>
          </li>
          {/* <li>
            <Button medium text='Get Started' />
          </li> */}
        </ul>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
