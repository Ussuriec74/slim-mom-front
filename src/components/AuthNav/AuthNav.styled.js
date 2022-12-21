import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0;

  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9b9faa;

  position: absolute;
  top: 20px;
  right: 20px;

  @media (min-width: 768px) {
    position: static;
  }

  @media (min-width: 1280px) {
    margin-left: 20px;
    border-left: 2px solid #e0e0e0;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #9b9faa;

  &.active {
    color: #212121;
  }

  :hover:not(.active),
  &:focus-visible:not(.active) {
    color: #212121;
  }
`;

export const SignInText = styled.div`
  margin-right: 16px;
  margin-left: 0;

  @media (min-width: 768px) {
    margin-left: 20px;
  }

  @media (min-width: 1280px) {
    margin-left: 20px;
  }
`;

export const RegistrationText = styled.div`
  margin-right: 0px;

  @media (min-width: 768px) {
    margin: 0;
  }
`;
