import React from "react";
import styled from "styled-components";

export const NewPinWrapper = styled.div`
    border-right: 1px solid #82ff82;
    width: 45vw;
    height: 87vh;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #000;
    flex-direction: column;
    z-index: 10000;
    @media screen and (max-width: 768px) {
        width: 100vw;
        border: none;
    }
`;
export const NewPinWrapperMob = styled.div`
    position: absolute;
`;

const NewPinDisplay = () => {
  return (
    <>
      <NewPinWrapper>
      
      </NewPinWrapper>
    </>
  );
};

export default NewPinDisplay;