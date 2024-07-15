
import Text from "../atoms/Text"
import Icon from "../atoms/Icon"
import React from 'react'
import styled from "styled-components/native"
import { FlightStatus } from "../../models/FlightStatus"
import TextButton from "../atoms/TextButton"
import { theme } from "../../theme/theme"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../App"

type FlightDetailScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "FlightDetailScreen"
>;

type ItineraryProps = {
    flightStatus: FlightStatus;
}

const Itinerary: React.FC<ItineraryProps> = ({ flightStatus }) => {

    const formatMinutes = (min: number) => {
        const hours = Math.floor(min / 60);
        const minutes = min % 60;
        return `${hours}h ${minutes}m`
    }
    const navigation = useNavigation<FlightDetailScreenNavigationProp>();

    const navigateFDScreen = () => {
        navigation.navigate("FlightDetailScreen", {
            flightStatus: flightStatus
        })
    }

    return (
        <Container>
            <RowItinerary style={{ marginTop: 6 }}>
                <Text size="extraLarge" bold>{flightStatus.estimatedDepartureTime.slice(11, 16)}</Text>
                <ContainerFlightCourse>
                    <Circles />
                    <SolidLine />
                    <Icon style={{ marginLeft: -5, marginRight: -3, marginBottom: 2 }} width={34} height={14} name="planeStatus" />
                    <DashedLine status={flightStatus.status} />
                    <Circles />
                </ContainerFlightCourse>
                <Text size="extraLarge" bold>{flightStatus.estimatedArrivalTime.slice(11, 16)}</Text>
            </RowItinerary>
            <RowItinerary>
                <Text color="primary">{flightStatus.segment.departureAirport}</Text>
                <Text bold color="textLight" size="tiny">{formatMinutes(flightStatus.totalFlightTimeInMinutes)}</Text>
                <Text color="primary">{flightStatus.segment.arrivalAirport}</Text>
            </RowItinerary>

        </Container>
    )
}

export default Itinerary;

const Container = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
`
const RowItinerary = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
`

const ContainerFlightCourse = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items:  center;
    width: 50%;
`

const Circles = styled.View`
    width: 9px;
    height: 9px;
    border-radius: 4.5px;
    background-color: ${(props) => props.theme.colors.primary};
`
const SolidLine = styled.View`
    border: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.primary};
    height: 1px;
    flex: 1;
`
const DashedLine = styled(View) <{ status: string }>`
    border: 1px;
    border-style: dashed;
    border-color: ${(props) => props.theme.colors.primary};
    height: 1px;
    flex: ${(props) =>
        props.status === 'ARRIVED'
            ? 0
            : props.status === 'ON-TIME'
                ? 0.8
                : props.status === 'DELAYED'
                    ? 0.8
                    : props.status === 'IN-THE-AIR'
                        ? 0.3
                        : 0};
`

