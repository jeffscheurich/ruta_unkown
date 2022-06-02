/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

export const NewCommentWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 33vw;
    height: 30rem;
    background: #000;
    top: calc(50vh - 15rem);
    left: calc(50vw - 16.5vw);
    z-index: 99999;
    border: 1px solid #82ff82;
    border-radius: 4px;
    & h1{
        color: white;
        position: absolute;
        top: 20px;
        left: 20px;
    }
    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 100vh;
        border: none;
        top: 0;
        left: 0;
    }
`;
export const CommetnTextArea = styled.textarea`
    width: 80%;
    height: 50%;
    /* border: 1px solid red; */
    border: none;
    resize: none;
    background-color: #000;
    color: #fff;
    font-size: 1rem;
    ::placeholder,
    ::-webkit-input-placeholder {
        /* color: #82ff82; */
        color: #fff;
    }
    :-ms-input-placeholder {
        /* color: #82ff82; */
        color: #fff;
    }
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
export const NewCommentButton = styled.button`
    font-size: 1rem;
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
    font-size: 1rem;
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

const NewCommentDisplay = (props) => {
  const updateNewComment = () => {
    const pinCopy = props.currentPin;
    const pinCopyComments = pinCopy.Comments;
    const newCommentAdded = pinCopyComments.concat(props.newComment);
    pinCopy.Comments = newCommentAdded;
    props.putNewComment(pinCopy);
  };
  return (
    <NewCommentWrapper>
      <h1>New Comment</h1>
      <CommetnTextArea 
        placeholder="Type your comment..."
        onChange={(e) => {props.setNewComment(e.target.value);}}
      />
      <ButtonContainer>
        <CancelButton 
          onClick={() => {props.setNewCommentOpen(false);}}
        >
            Cancel
        </CancelButton>
        <NewCommentButton 
          onClick={
            () => {
              updateNewComment();
              props.setNewCommentOpen(false);
            }
          }
        >
            Submit
        </NewCommentButton>
      </ButtonContainer>
    </NewCommentWrapper>
  );
};

export default NewCommentDisplay;