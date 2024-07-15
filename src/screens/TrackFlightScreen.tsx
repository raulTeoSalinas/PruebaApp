import { View, Button } from 'react-native'
import React, { useState, useRef, useMemo } from 'react'
import {
    PillButton,
    Text,
    InputLocation,
    ToggleBook,
    InputDate,
    TextButton,
    InputFlightNumber,
    FormFlightNumber,
    FormDestination
} from "../components"
import { Airport } from "../models/Airport"
import { BottomSheetModalProvider, BottomSheetModal } from "@gorhom/bottom-sheet"
import styled from "styled-components/native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../App"
import useTrackFlightScreen from "../viewModels/trackFlightScreen"

type TrackFlightScreenProps = NativeStackScreenProps<RootStackParamList, "TrackFlightScreen">

const TrackFlightScreen: React.FC<TrackFlightScreenProps> = (props) => {

    const {
        isByFlightNumber,
        isValidated,
        setIsByFlightNumber,
        departureDate,
        setDepartureDate,
        flightNumber,
        setFlightNumber,
        navigateFLScreenByDestination,
        navigateFLScreenByNumber,
        originAirport,
        setOriginAirport,
        destinationAirport,
        setDestinationAirport,
        airports
    } = useTrackFlightScreen({ prop: props })


    return (
        <BottomSheetModalProvider>

            <Container>
                <Header>
                    <Text style={{ marginTop: 40 }} bold size="huge">Track your flight</Text>
                    <Text>Keep you informed in real time!</Text>
                </Header>
                <ToggleContainer>
                    <ToggleBook isByFlightNumber={isByFlightNumber} setIsByFlightNumber={setIsByFlightNumber} />
                </ToggleContainer>
                {
                    isByFlightNumber ? (
                        <FormFlightNumber
                            departureDate={departureDate}
                            setDepartureDate={setDepartureDate}
                            flightNumber={flightNumber}
                            setFlightNumber={setFlightNumber}
                            setIsByFlightNumber={setIsByFlightNumber}
                            navigateFLScreen={navigateFLScreenByNumber}
                        />
                    ) : (
                        <FormDestination
                            originAirport={originAirport}
                            setOriginAirport={setOriginAirport}
                            destinationAirport={destinationAirport}
                            setDestinationAirport={setDestinationAirport}
                            departureDate={departureDate}
                            setDepartureDate={setDepartureDate}
                            setIsByFlightNumber={setIsByFlightNumber}
                            airports={airports}
                            navigateFLScreen={navigateFLScreenByDestination}
                        />
                    )
                }
                {
                    !isValidated && <Text color="error" style={{ marginTop: "2%" }}>Please fill in all the required fields.</Text>
                }


            </Container>
        </BottomSheetModalProvider>

    )
}

const Container = styled.View`
    flex: 1;
    justify-content: start;
    align-items: center;
    background-color: ${props => props.theme.colors.background};
`;

const Header = styled.View`
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.backgroundContrast};
`;

const ToggleContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: -22px;
`



export default TrackFlightScreen;

