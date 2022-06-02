/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaTimes, FaPlusSquare, FaRegCommentDots, FaArrowRight } from "react-icons/fa";
import React from "react";


export const DetailContainer = styled.div`
    border-right: 1px solid #82ff82;
    width: 45vw;
    height: 87vh;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #000;
    display: ${({ props }) => props.open ? "flex" : "none"};
    flex-direction: column;
    z-index: 10000;
    @media screen and (max-width: 768px) {
        width: 100vw;
        border: none;
    }
`;
export const TitleContainer = styled.div`
    border-bottom: 1px solid #82ff82;
    padding: 10px;
    width: 100%;
    min-height: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: #fff;
    & h1, p{
        padding: 10px;
    }
    @media screen and (max-width: 768px) {
        border: none;
        padding: 20px;
    }
`;
export const CommentsContainer = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    margin-top: 10px;
    padding: 20px;
    color: #fff;
    & ul{
        margin: 20px;
        list-style-type: none;
    }
    & li{
        padding: 10px;
    }
    @media screen and (max-width: 768px) {
        padding: 10px;
        & h2{
            padding 20px
        }
    }
`;

export const Exit = styled(FaTimes)`
    color: #fff;
    font-size: 1.3rem;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 2rem;
        cursor: pointer;
    }
`;
export const NewButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
export const NewButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    cursor: pointer;
    & p{
        color: #82ff82;
        font-size: .7rem;
    }
`;
export const NewPost = styled(FaPlusSquare)`
    font-size: 2.5rem;
    color: #82ff82;
    margin: 5px;
`;
export const NewComment = styled(FaRegCommentDots)`
    font-size: 2.5rem;
    color: #82ff82;
    margin: 5px;
`;
export const NextPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
    & p{
        color: #82ff82;
        font-size: .7rem;
    }
`;
export const NextPost = styled(FaArrowRight)`
    font-size: 2rem;
    color: #82ff82;
    margin: 5px;
`;

const DetailDisplay = (props) => {
  return (
    <DetailContainer props={props} >
      <Exit 
        props={props}
        onClick ={() => {props.setDetailOpen(false);}}
      />
      <TitleContainer props={props}>
        <h1>{props.currentPin.Title}</h1>
        <p>{props.currentPin.Description}</p>
      </TitleContainer>
      <CommentsContainer>
        <h2>Comments:</h2>
        <ul>
          {props.currentPin.Comments?.map((comment, i) => (
            <li key={i}>{comment}</li>
          ))}  
        </ul>
      </CommentsContainer>
      <NewButtonWrapper>
        <NewButtonContainer onClick={() => {props.setNewCommentOpen(true);}}>
          <NewComment />
          <p>New Comment</p>
        </NewButtonContainer>
        {/* <NewButtonContainer>
          <NewPost />
          <p>New Post</p>
        </NewButtonContainer> */}
      </NewButtonWrapper>
      {/* <NextPostContainer>
        <NextPost />
        <p>Next Post</p>
      </NextPostContainer> */}
    </DetailContainer>
  );
};

export default DetailDisplay;