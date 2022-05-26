import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 87vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;
  position: absolute;
  bottom: 0;
  right: 0;
`;


const About = () => {
  return (
    <Container>
      <h1>About</h1>
    </Container>
    
  );
};

export default About;