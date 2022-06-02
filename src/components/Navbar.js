/* eslint-disable react/prop-types */
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";


export const Nav = styled.nav`
  background: #000;
  height: 13vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  border-bottom: 1px solid #82ff82;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #82ff82;
  }
  @media screen and (max-width: 768px) {
    color: #000;
    height: 2%;
    // font-size: 2rem;
    // margin-top: 50px;
    color: #fff;
    &:nth-child(2){
      margin-top: 100px;
      font-size: 1.5rem
    }
    &:nth-child(3){
      margin-top: 100px;
      font-size: 1.5rem
    }
    &:nth-child(4){
      margin-top: 100px;
      font-size: 1.5rem
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: ${({ open }) => open ? "flex" : "none"};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const NavBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
   z-index: 99999;
   justify-content: center;
   align-itesm: center;
   width: 100%;
   position: absolute;
   top: 80%;
   left: 0; 
   display: ${({ open }) => open ? "flex" : "none"};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    margin: 10px;
    z-index: 99999;
  }
`;

export const NavBtnLink = styled.p`
  border-radius: 4px;
  background: ${({ props }) => props.draggable ? "#000" : "#82ff82"};
  padding: 10px 22px;
  color: ${({ props }) => props.draggable ? "#82ff82" : "#000"};
  outline: none;
  border: ${({ props }) => props.draggable ? "1px solid #82ff82" : "none"};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
export const NavBtnLinkNewPin = styled.p`
  border-radius: 4px;
  background: #82ff82;
  padding: 10px 22px;
  color: #000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 0 0 15px #82ff82;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  
  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 20px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;


export const Exit = styled(FaTimes)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 40px;
    top: 40px;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Ruta Unknown</h1>
        </NavLink>
        <Bars 
          open={open} 
          onClick={() => setOpen(!open)} 
        />
        <NavMenu open={open}>
          <Exit 
            open={open}
            onClick={() => setOpen(!open)}
          />
          <NavLink 
            to="/about" 
            open={open} 
            onClick={() => setOpen(!open)}
          >
          About
          </NavLink>
          <NavLink 
            open={open} 
            onClick={() => setOpen(!open)}
            to="//github.com"
            target="_blank"
          >
          Contribute
          </NavLink>
          <NavLink 
            open={open} 
            onClick={() => setOpen(!open)}
            to= "//www.reddit.com/r/solotravel/wiki/index"
            target="_blank"  
          >
          Travel
          </NavLink>
        </NavMenu>
        <NavBtnContainer
          open={open}
        >
          <NavBtn
            open={open}
            props={props}
            onClick={() => {
              setOpen(!open);
              props.setDraggable(!props.draggable);
              props.setNewPinOpen(false);
              props.setCenterPos();
            }}
          >
            <NavBtnLink props={props}
            >
              { props.draggable
                ?
                "Cancel"
                :
                "New Pin"
              }
            </NavBtnLink>
          </NavBtn>
          { props.draggable
            ?
            <NavBtn
              props={props}
              onClick={() => {
                props.setNewPinOpen(true);
                setOpen(!open);
              }}
            >
              <NavBtnLinkNewPin>
              Add Details
              </NavBtnLinkNewPin>
            </NavBtn>
            :
            null
          }
        </NavBtnContainer>
      </Nav>
    </>
    
  );
};

export default Navbar;