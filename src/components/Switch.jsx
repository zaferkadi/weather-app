import React from "react";
import {
  SwitchWrapper,
  SwitchInput,
  SwitchLabel,
  SwitchLabelInner,
  SwitchLabelSwitch,
} from "./Swtich.styled";

const Switch = ({ checked, onToggle, labelOn, labelOff }) => {
  const [isChecked, setChecked] = React.useState(checked);
  const onChange = (e) => {
    const newState = !isChecked;
    setChecked(newState);
    onToggle(newState ? labelOn : labelOff);
  };
  return (
    <SwitchWrapper>
      <SwitchInput
        onChange={onChange}
        type="checkbox"
        name="onoffswitch"
        id="myonoffswitch"
        checked={isChecked}
      />
      <SwitchLabel htmlFor="myonoffswitch">
        <SwitchLabelInner
          labelOn={labelOn}
          labelOff={labelOff}
        ></SwitchLabelInner>
        <SwitchLabelSwitch></SwitchLabelSwitch>
      </SwitchLabel>
    </SwitchWrapper>
  );
};

Switch.defaultProps = {
  checked: false,
  onToggle: () => ({}),
  labelOn: "On",
  labelOff: "Off",
};
export default Switch;
