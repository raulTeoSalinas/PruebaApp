import styled from "styled-components/native"
import { theme } from "../../theme/theme";
import Text from "../atoms/Text";
import { Airport } from "../../models/Airport";
import BottomSheet, { TouchableOpacity } from '@gorhom/bottom-sheet';
import useInputLocation from "../../viewModels/inputLocation";

// Type definition
type InputLocationProps = {
    airport: Airport | null;
    setAirport: (airport: Airport | null) => void;
    description: string;
    airports: Airport[]
}

// Component definition
const InputLocation: React.FC<InputLocationProps> = ({ airport, setAirport, description, airports }) => {

    // Hook for using Present Modal
    const { presentRef, snapPoints, handlePressAirport, handleOpenModal } = useInputLocation(airport, setAirport)

    // Subcomponent Modal
    const Modal = () => (
        <BottomSheet
            index={-1}
            ref={presentRef}
            snapPoints={snapPoints}
            handleIndicatorStyle={{ backgroundColor: theme.colors.knobUnactive }}
            enablePanDownToClose
            backgroundStyle={{ backgroundColor: theme.colors.background, borderWidth: 1, borderColor: theme.colors.border }}
        >
            <Text bold textAlign="center" style={{ marginBottom: "2%" }}>Please, Select {description} Airport.</Text>
            {
                airports.map((airport, i) => (
                    <AirportSelect onPress={() => handlePressAirport(airport)} key={i}>
                        <LocationRow>
                            <Text bold>{airport.city}</Text>
                            <Text color="textLight" bold>{airport.code}</Text>
                        </LocationRow>
                    </AirportSelect>
                ))
            }
        </BottomSheet>
    )

    // Location input
    return (
        <>
            <Container onPress={handleOpenModal}>
                <Text size="tiny">{description}</Text>
                {airport ? (
                    <LocationRow>
                        <Text bold>{airport.city}</Text>
                        <Text color="textLight" bold>{airport.code}</Text>
                    </LocationRow>
                ) : (
                    <Text>Choose...</Text>
                )}
            </Container>
            <Modal />
        </>
    )
}


// Styled Components
const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    width: 172.5px;
    padding: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 64px;
    border-radius: 12px;
    border: 2px solid ${(props) => props.theme.colors.primary};
  `;


const LocationRow = styled.View`
    flex-direction: row;
    gap: 6px;
`

const AirportSelect = styled(TouchableOpacity)`
    padding: 8px 10px;
    border-bottom-width: 1px;
    border-color: ${(props) => props.theme.colors.border};
`

export default InputLocation;