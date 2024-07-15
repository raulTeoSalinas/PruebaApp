
import React from 'react'
import styled from "styled-components/native"
import InputFlightNumber from "../molecules/InputFlightNumber"
import InputDate from "../molecules/InputDate"
import PillButton from "../atoms/PillButton"
import Text from "../atoms/Text"
import TextButton from "../atoms/TextButton"
import { Airport } from "../../models/Airport"
import InputLocation from "../molecules/InputLocation"

interface FormDestinationProps {
    originAirport: Airport | null;
    setOriginAirport: (airport: Airport | null) => void;
    destinationAirport: Airport | null;
    setDestinationAirport: (airport: Airport | null) => void;
    departureDate: string | null;
    setDepartureDate: (departureDate: string | null) => void;
    setIsByFlightNumber: (isByFlightNumber: boolean) => void;
    airports: Airport[]
}

const FormDestination: React.FC<FormDestinationProps> = ({
    originAirport,
    setOriginAirport,
    destinationAirport,
    setDestinationAirport,
    departureDate,
    setDepartureDate,
    setIsByFlightNumber,
    airports
}) => {

    return (
        <>
            <RowInputs>
                <InputLocation description="Origin" airports={airports} airport={originAirport} setAirport={setOriginAirport} />
                <InputLocation description="Destination" airports={airports} airport={destinationAirport} setAirport={setDestinationAirport} />
            </RowInputs>
            <ContainerInputDate>
                <InputDate description="departure" size="large" date={departureDate} setDate={setDepartureDate} />

            </ContainerInputDate>

            <ButtonContainer>
                <PillButton size="large">Search Flight</PillButton>
            </ButtonContainer>
            <LegendContainer>
                <Text color="textLight2" size="extraSmall">Looking for a specific flight?</Text>
                <LegendRow>
                    <Text color="textLight2" size="extraSmall">Try searching by</Text>
                    <TextButton onPress={() => setIsByFlightNumber(true)} textColor="textLight2" textSize="extraSmall">flight number</TextButton>
                </LegendRow>
            </LegendContainer>
        </>
    )
}

const RowInputs = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 87.80%;
    margin-top: 35px;
`
const ButtonContainer = styled.View`
    width: 87.80%;
    margin-top: 20px;
`
const LegendContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

const LegendRow = styled.View`
    flex-direction: row;
    margin-top: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
`

const ContainerInputDate = styled.View`
    margin-top: 16px;
    width: 87.80%;
`

export default FormDestination