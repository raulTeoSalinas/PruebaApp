import React, { useEffect } from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../App"
import styled from "styled-components/native"
import { Icon, Text, TextButton } from "../components"
import { TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "../redux/store"
import { fetchFlightStatusByAirportsAndDate, fetchFlightStatusByFlightCode } from "../redux/flightsSlice"

type FlightsListingScreenProps = NativeStackScreenProps<RootStackParamList, "FlightsListingScreen">

const FlightsListingScreen: React.FC<FlightsListingScreenProps> = (props) => {

    const { departureDate, flightNumber, destinationAirport, originAirport } = props.route.params;
    const { navigation } = props;

    const dispatch = useDispatch<AppDispatch>();
    const { flightStatusCollection, loading, error } = useSelector((state: RootState) => state.flights);

    const handleFetchByFlightCode = () => {
        dispatch(fetchFlightStatusByFlightCode({
            flightCode: "500",
            date: "2023-11-21"
        }));
    };

    const handleFetchByAirportsAndDate = () => {
        dispatch(fetchFlightStatusByAirportsAndDate({
            departureAirport: "MEX",
            arrivalAirport: "CUN",
            date: "2023-11-21"
        }));
    };

    useEffect(() => {
        handleFetchByFlightCode();
    }, []);

    return (
        <Container>
            <Header>
                <RowHeader>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrowLeft" width={30} height={30} />
                    </TouchableOpacity>

                    <ColumnHeader>
                        <Text bold size="huge" >AM {flightNumber}</Text>
                        <RowDate>
                            <Text>{departureDate}</Text>
                            <Separator />
                            <Icon name="calendar" width={14} height={14} />
                            <TextButton onPress={() => navigation.goBack()} style={{ marginLeft: 6 }}>Change</TextButton>
                        </RowDate>
                    </ColumnHeader>

                </RowHeader>
                <RowHeader style={{ marginTop: 32, marginBottom: 8 }}>
                    <Text size="small" bold>Mexico to Cancún</Text>
                    <Text size="small" color="textLight2">{flightStatusCollection.length} {flightStatusCollection.length == 1 ? "result" : "results"}</Text>
                </RowHeader>
            </Header>
            {flightStatusCollection.map((flight, index) => (
                <View key={index}>
                    <Text>Flight Status: {flight.status}</Text>
                    <Text>Departure: {flight.segment.departureAirport}</Text>
                    <Text>Arrival: {flight.segment.arrivalAirport}</Text>
                    {/* Otros detalles del vuelo */}
                </View>
            ))}
        </Container>
    )
}

export default FlightsListingScreen;


const Container = styled.View`
    flex: 1;
    justify-content: start;
    align-items: center;
    background-color: ${props => props.theme.colors.background};

`;


const Header = styled.View`
    justify-content: flex-end;
    align-items: center;
    height: 200px;
    width: 87.80%;
`;

const RowHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* height: 100%; */

`;

const ColumnHeader = styled.View`
    justify-content: center;
    align-items: flex-end;
    background-color: ${props => props.theme.colors.background};
`;

const RowDate = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 4px;
`
const Separator = styled.View`
    height: 20px;
    background-color: ${props => props.theme.colors.border};
    width: 2px;
    margin-left: 8px;
    margin-right: 8px;
`