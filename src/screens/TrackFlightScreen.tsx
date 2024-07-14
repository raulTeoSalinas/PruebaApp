import { View } from 'react-native'
import React, { useState } from 'react'
import { PillButton, Text, InputLocation } from "../components"
import { Airport } from "../models/Airport"

const TrackFlightScreen = () => {

    const [originAirport, setOriginAirport] = useState<Airport | null>({ city: "Mexico City", code: "MEX" });

    const airports: Airport[] = [{ city: "Mexico City", code: "MEX" }, { city: "Cancún", code: "CUN" }]

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text bold size="huge">TrackFlightScreen</Text>
            <PillButton textSize="small" size="regular">Hola</PillButton>
            <InputLocation airports={airports} description="Origin" airport={originAirport} setAirport={setOriginAirport} />
        </View>
    )
}

export default TrackFlightScreen