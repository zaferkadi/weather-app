import React from "react";
import styled, { keyframes, css } from "styled-components/macro";

const PingPong = styled.div(
  ({ duration, color, bgBar }) => css`
    position: relative;
    /* margin: 100px auto; */
    width: 200px;
    height: 20px;
    width: 100%;
    background-color: ${bgBar};
    &::after {
      content: "";
      width: 50px;
      height: 20px;
      position: absolute;
      top: calc(50% - 10px);
      left: calc(50% - 100px);
      background-color: ${color};
      animation: ${bar} ${duration} linear infinite alternate;
    }
  `
);

const BarLoader = ({
  bgBar = "#efefef",
  color = "#a5bee4",
  duration = "1.5s",
}) => {
  return <PingPong bgBar={bgBar} color={color} duration={duration} />;
};

const bar = keyframes`
  0% {
    left: 0 ;
  }
  100% {
    left: calc(100% - 50px);
  }
`;
export default BarLoader;
