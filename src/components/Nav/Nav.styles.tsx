import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

export const NavItem = styled.a`
  font-family: Raleway;
  width: 100%;
  text-align: center;
  color: black;
  padding-top: 5px;
  z-index: 100;
  font-size: 1rem;

  &:hover {
    color: #999;
    transition: 0.3s;
    cursor: pointer !important;
    text-decoration: none;
  }

  @media screen and (max-width: 1000px){
    font-size: 3rem;
  }
`;

export const MobileItem = styled.a`
  font-family: Raleway;
  width: 100%;
  text-align: right;
  color: black;
  padding-top: 5px;
  z-index: 100;

  &:hover {
    color: #999;
    transition: 0.3s;
    cursor: pointer !important;
    text-decoration: none;
  }
`;

export const Name = styled.a`
  font-family: Raleway;
  width: 100%;
  text-align: center;
  color: black;
  padding-top: 10px;
  z-index: 100;
  font-size: 20px;

  &:hover {
    color: #999;
    transition: 0.3s;
    cursor: pointer !important;
    text-decoration: none;
  }

  @media screen and (max-width: 1000px){
    margin: 0 auto;
  }
`;

interface DrawerProps {
  visible: boolean;
}

export const Drawer = styled.div<DrawerProps>`
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: -100;
  position: inherit;
  transition: transform 0.3s;
  ${(props) => props.visible ? "transform: translateY(0)" : "transform: translateY(-280px)"};
  margin: 0 auto;
  top: 0;
`;

export const Portfolio = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 5px;

  &:hover {
    color: #999;
    transition: 0.3s;
  }
`; 

export const Column = styled(Col)`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  background-color: white;
  height: 5vh;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Spacer = styled(Col)`
  @media screen and (max-width: 1000px){
    display: none;
  }
`;

export const MobileSpacer = styled(Col)`
    display: block;
`;

export const Wrapper = styled(Row)`
  display: flex;
  height: 5vh;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99999;
  background-color: white;
`;  

export const Hamburger = styled.span`
  font-size: 20px;

  @media screen and (max-width: 1000px){
    position: fixed;
  }
`;

export const IconWrapper = styled.div`
  display: none;
  top: 5px;
  right: 40px;

  @media screen and (max-width: 1000px){
    display: inline;
    position: fixed;
  }
`;

interface MobileProps {
  visible: boolean;
}

export const SideDrawer = styled.div<MobileProps>`
  width: 40vw;
  height: 95vh;
  top: 5vh;
  background-color: white;
  right: 0px;
  position: fixed;
  transition: transform 0.3s;

  ${(props) => props.visible ? "transform: translateX(0)" : "transform: translateX(40vw)"};
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10vh 20px;
`;