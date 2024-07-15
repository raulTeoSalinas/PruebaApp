
import React from 'react'
import { TouchableOpacity } from "react-native"

import styled from "styled-components/native"

type KnobProps = {
  isActive: boolean,
  setIsActive?: () => void
}

const Knob: React.FC<KnobProps> = ({ isActive, setIsActive }) => {
  return (
    <Container isActive={isActive}>
      <Circle />
    </Container>
  )
}

export default Knob;

const Container = styled(TouchableOpacity) <{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.primary
      : props.theme.colors.knobUnactive};
  justify-content: center;
  align-items: ${(props) =>
    props.isActive
      ? "flex-end"
      : "flex-start"};
  height: 20px;
  width: 34px;
  border-radius: 10px;
  padding: 1px;
`;
const Circle = styled.View`
 background-color: ${(props) => props.theme.colors.background};
  height: 18px;
  width: 18px;
  border-radius: 9px;
`
