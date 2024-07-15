import { View } from 'react-native'
import React from 'react'
import { FlightStatus } from "../../models/FlightStatus"
import styled from "styled-components/native"
import Text from "../atoms/Text"
import Icon from "../atoms/Icon"
import { theme } from "../../theme/theme"
import TextButton from "../atoms/TextButton"
import Itinerary from "../molecules/Itinerary"
import Knob from "../atoms/Knob"


type CardFlightStatusProps = {
    flightStatus: FlightStatus;
}

const CardFlightStatus: React.FC<CardFlightStatusProps> = ({ flightStatus }) => {

    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };



    return (
        <Container>
            <Row>
                <FlagStatus status={flightStatus.status}>
                    <Text bold size="extraSmall" color="background">{capitalizeFirstLetter(flightStatus.status)}</Text>
                </FlagStatus>
                <ContainerKnob>
                    <Text bold size="extraSmall">Favorite</Text>
                    <Knob isActive={false} />
                </ContainerKnob>
            </Row>

            <ContainerItinerary>
                <Itinerary flightStatus={flightStatus} />
            </ContainerItinerary>

        </Container>
    )
}

export default CardFlightStatus;

const Container = styled.View`
    width: 87.80%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 12px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    margin-bottom: 20px;
`
const FlagStatus = styled(View) <{ status: string }>`
  background-color: ${(props) =>
        props.status === 'ARRIVED'
            ? props.theme.colors.primary
            : props.status === "ON_TIME"
                ? props.theme.colors.statusOnTime
                : props.status === 'DELAYED'
                    ? props.theme.colors.statusDelayed
                    : props.status === 'IN-THE-AIR'
                        ? props.theme.colors.statusInTheAir
                        : 'transparent'};
    border-top-left-radius: 10px;
    border-bottom-right-radius: 20px;
    padding: 6px 18px;
`
const ContainerItinerary = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`

const Row = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const ContainerKnob = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-right: 5%;
`
