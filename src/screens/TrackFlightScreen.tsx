import { View, Button } from 'react-native'
import React, { useState, useRef, useMemo } from 'react'
import { PillButton, Text, InputLocation, InputDate, TextButton } from "../components"
import { Airport } from "../models/Airport"
import { BottomSheetModalProvider, BottomSheetModal } from "@gorhom/bottom-sheet"


const TrackFlightScreen = () => {

    const [originAirport, setOriginAirport] = useState<Airport | null>(null);
    const [departureDate, setDepartureDate] = useState<string | null>(null);
    const airports: Airport[] = [{ city: "Mexico City", code: "MEX" }, { city: "Cancún", code: "CUN" }]


    return (
        <BottomSheetModalProvider>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text bold size="huge">TrackFlightScreen</Text>
                <PillButton textSize="small" size="regular">Hola</PillButton>
                <PillButton textSize="small" size="large">Hola</PillButton>
                <InputLocation airports={airports} description="Origin" airport={originAirport} setAirport={setOriginAirport} />
                <TextButton>Hola</TextButton>
                <InputDate date={departureDate} setDate={setDepartureDate} description="departure" />
                <InputDate size="large" date={departureDate} setDate={setDepartureDate} description="departure" />

            </View>
        </BottomSheetModalProvider>

    )
}

export default TrackFlightScreen;

