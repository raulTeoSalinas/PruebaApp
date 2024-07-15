import styled from "styled-components/native"
import { theme } from "../../theme/theme";
import Text from "../atoms/Text";
import { useRef } from "react";
import { Airport } from "../../models/Airport";
import { TouchableOpacity, BottomSheetModal } from '@gorhom/bottom-sheet';
import { TextInput } from "react-native";

// Type definition
type InputFlightNumberProps = {
    flightNumber: string;
    setFlightNumber: (flightNumber: string) => void;

}

// Component definition
const InputFlightNumber: React.FC<InputFlightNumberProps> = ({ flightNumber, setFlightNumber }) => {



    const numericInputRef = useRef<TextInput>(null);

    const handleTextChange = (text: string) => {
        const numericText = text.replace(/[^0-9]/g, '');
        setFlightNumber(numericText);
    };

    // Location input
    return (
        <>
            <Container onPress={() => numericInputRef.current?.focus()}>
                <Text size="tiny">Flight Number</Text>
                <Row>
                    <Text color="textLight" bold>AM</Text>
                    <NumericInput
                        ref={numericInputRef}
                        value={flightNumber}
                        onChangeText={handleTextChange}
                    />
                </Row>
            </Container>

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


const Row = styled.View`
    flex-direction: row;
    gap: 6px;
`

const NumericInput = styled.TextInput.attrs({
    keyboardType: 'numeric',
    placeholderTextColor: theme.colors.textLight,
    maxLength: 3,
    textAlignVertical: "top"
})`
    font-family: ${theme.fonts.semiBold};
    font-size: ${theme.fontSizes.medium}px;
    color: ${theme.colors.primary};

`;

export default InputFlightNumber;