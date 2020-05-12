import styled from "styled-components/macro";

export const SwitchWrapper = styled.div`
  position: relative;
  width: 90px;
  user-select: none;
`;

export const SwitchLabel = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
`;

export const SwitchLabelInner = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  &::before,
  &::after {
    display: block;
    float: left;
    width: 50%;
    height: 30px;
    padding: 0;
    line-height: 30px;
    font-size: 14px;
    color: white;
    font-family: Trebuchet, Arial, sans-serif;
    font-weight: bold;
    box-sizing: border-box;
  }

  &:before {
    content: "${(props) => props.labelOn}";
    padding-left: 10px;
    background-color: rgba(32, 137, 202, 1);
    color: #ffffff;
  }
  &:after {
    content: "${(props) => props.labelOff}";
    padding-right: 10px;
    color: #bbbbbb;
    text-align: right;
    border: 1px solid;
  }
`;

export const SwitchLabelSwitch = styled.span`
  display: block;
  width: 18px;
  margin: 6px;
  background: #dddddd;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 56px;
  border-radius: 0px;
  transition: all 0.3s ease-in 0s;
`;

export const SwitchInput = styled.input`
  display: none;
  &:checked + ${SwitchLabel} ${SwitchLabelInner} {
    margin-left: 0;
  }

  &:checked + ${SwitchLabel} ${SwitchLabelSwitch} {
    right: 0;
  }
`;
