import React from "react";
import styled from "styled-components/macro";
import { generateRandomLonLat } from "../utils";

const StyledCity = styled.button`
  width: 100%;
  border: none;
  background-color: black;
  color: white;
  padding: 1em;
  font-size: 1em;
  cursor: pointer;
`;

const RandomLocation = ({ onClick }) => {
  const onRandomClick = () => {
    onClick(generateRandomLonLat());
  };
  return <StyledCity onClick={onRandomClick}>Random Location</StyledCity>;
};

export default RandomLocation;
