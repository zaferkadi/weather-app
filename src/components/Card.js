import styled, { css } from "styled-components/macro";

const getPadding = ({ p }) => {
  if (typeof p === "string") {
    return css`
      padding: ${p};
    `;
  } else if (Array.isArray(p)) {
    return css`
      padding-top: ${p[0]};
      padding-right: ${p[1]};
      padding-bottom: ${p[2]};
      padding-left: ${p[3]};
    `;
  }
};

export const Placer = styled.div`
  ${getPadding};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
`;

const Card = styled(Placer)`
  position: relative;
  max-width: 400px;
  min-height: 400px;
  background-image: linear-gradient(to bottom, #2e38ad, #2589c8);
`;

export default Card;
export const Spacer = styled.div`
  padding: 0.5em;
`;

export const Region = styled.div`
  font-size: 2em;
`;

export const CurrentDate = styled.div`
  color: #eee;
`;

export const TemperatureInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    flex: 1;
  }
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

export const Temperature = styled.div`
  font-size: 5em;
  color: #eee;
`;

export const Description = styled.div``;

export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  padding: 0.5em 0;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  flex: 33%;
  text-align: center;
  padding: 0.5em;
  font-size: 1.2em;
`;

export const StatTitle = styled.div`
  color: #a5bee4;
`;

export const StatValue = styled.div`
  font-weight: 700;
`;

export const SunHoursWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SunHours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Time = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.6em;
`;

export const LocationInput = styled.input`
  border: none;
  width: 100%;
  padding: 1em;
`;
