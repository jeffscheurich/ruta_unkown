/* eslint-disable react/prop-types */
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
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    z-index: 10000;
    @media screen and (max-width: 768px) {
        width: 100vw;
        border: none;
    }
`;
export const TitleInput = styled.textarea`
    /* border: 1px solid red; */
    resize: none;
    margin-top: 2rem;
    border: none;
    background-color: black;
    height: 7vh;
    height: 3rem;
    /* font-size: 2vw; */
    font-size: 2rem;
    width: 80%;
    color: #fff;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #fff;
    }
    :-ms-input-placeholder {
        color: #fff;
    }
`;
export const DescInput = styled.textarea`
    /* border: 1px solid red; */
    resize: none;
    margin-top: 2rem;
    border: none;
    background-color: black;
    height: 40vh;
    width: 80%;
    color: #fff;
    font-size: 1rem;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #fff;
    }
    :-ms-input-placeholder {
        color: #fff;
    }
`;
export const NewPinWrapperMob = styled.div`
    position: absolute;
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 50%;
    position: absolute;
    bottom: 3rem;
    @media screen and (max-width: 768px) {
        width: 70%;
        justify-content: space-around;
    }
`;
export const SubmitButton = styled.button`
    font-size: 1.5vw;
    padding: 10px 22px;
    border: none;
    background-color: #82ff82;
    color: #000;
    border-radius: 4px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;
export const CancelButton = styled.button`
    font-size: 1.5vw;
    padding: 10px 22px;
    border: 1px solid #82ff82;
    border-radius: 4px;
    background-color: #000;
    color: #82ff82;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

const NewPinDisplay = (props) => {
  const updateNewPinTitle = (newVal) => {
    const pinCopy = props.newPin;
    pinCopy.Title = newVal.target.value;
    props.setNewPin(pinCopy);
  };
  const updateNewPinDesc = (newVal) => {
    const pinCopy = props.newPin;
    pinCopy.Description = newVal.target.value;
    props.setNewPin(pinCopy);
  };
  return (
    <>
      <NewPinWrapper>
        <TitleInput 
          placeholder={props.newPin.Title}
          onChange={(e) => {updateNewPinTitle(e);}}
        />
        <DescInput
          placeholder={props.newPin.Description}
          onChange={(e) => {updateNewPinDesc(e);}}
        />
        <ButtonContainer>
          <CancelButton
            onClick={() => {props.setNewPinOpen(false);}}
          >
                Back
          </CancelButton>
          <SubmitButton
            onClick={() => {
              props.postNewPin(props.newPin, props.pins);
              props.setNewPinOpen(false);
              props.setDraggable(false);
              props.setNewPin({
                Id: "",
                Comments: [],
                Description: "Enter Description",
                Location: {
                  Latitude: 0,
                  Longitude: 0
                },
                Title: "Enter Title",
              });
            }}
          >
                Submit
          </SubmitButton>
          
        </ButtonContainer>
      </NewPinWrapper>
    </>
  );
};

export default NewPinDisplay;