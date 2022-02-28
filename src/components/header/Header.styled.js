import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0px 24px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 100;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1128px;
  min-height: 100%;
`;

export const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

export const Search = styled.div`
  position: relative;
  flex-grow: 1;
  opacity: 1;

  & > div {
    max-width: 280px;

    input {
      width: 300px;
      height: 34px;
      font-size: 14px;
      line-height: 1.75;
      border: none;
      border-color: #0984e3;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      padding: 0 8px 0 40px;
      font-weight: 400;
      vertical-align: text-top;

      &:focus {
        outline: 2px solid #0984e3;
      } 
    }
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  margin: 0;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  pointer-events: none;
  z-index: 1;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

export const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  /* list-style-type: none; */

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

export const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: transparent;
    text-decoration: none;
    font-weight: 400;
    font-size: 12px;
    min-width: 80px;
    min-height: 52px;
    line-height: 1.5;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export const SignOut = styled.div`
  display: none;
  text-align: center;
  position: absolute;
  top: 52px;
  width: 80px;
  height: 30px;
  font-size: 16px;
  border-radius: 3px;
  background: #636e72;
  transition-duration: 167ms;

  a {
    color: #fff;
    font-weight: 600;
  }
`;

export const User = styled(NavList)`
  /* a > svg {
    width: 24px;
    border-radius: 50%;
  } */

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;