import { useRef, useMemo } from "react";
import styled from "styled-components/native"
import { theme } from "../../theme/theme";
import Text from "../atoms/Text";
import { Airport } from "../../models/Airport";
import { TouchableOpacity, BottomSheetModal } from '@gorhom/bottom-sheet';
import useInputDate from "../../viewModels/inputDate";
import { Calendar } from "react-native-calendars";

import Icon from "../atoms/Icon";
// Type definition
type InputDateProps = {
    date: string | null;
    setDate: (date: string | null) => void;
    description: string;
    size?: "large" | "regular"
}

// Component definition
const InputDate: React.FC<InputDateProps> = ({ date, setDate, description, size = "regular" }) => {

    // Hook for using Input Location
    const { presentRef, snapPoints, handleOpenModal, handleSelectDate } = useInputDate(setDate)

    // Subcomponent Modal
    const Modal = () => (
        <BottomSheetModal
            index={0}
            ref={presentRef}
            snapPoints={snapPoints}
            handleIndicatorStyle={{ backgroundColor: theme.colors.knobUnactive }}
            backgroundStyle={{ backgroundColor: theme.colors.background, borderWidth: 1, borderColor: theme.colors.border }}
        >
            <Text bold textAlign="center" style={{ marginBottom: "2%" }}>Please, select {description} date.</Text>
            <Calendar
                enableSwipeMonths
                theme={{
                    arrowColor: theme.colors.primary,
                    todayTextColor: theme.colors.statusInTheAir,
                }}
                onDayPress={date => {
                    handleSelectDate(date.dateString)
                }}
            />
        </BottomSheetModal>
    )

    // Location input
    return (
        <>
            <Container size={size} onPress={handleOpenModal}>
                <Column>
                    <Text size="tiny">{`Date of ${description}`}</Text>
                    {date ? (

                        <Text bold>{date}</Text>

                    ) : (
                        <Text color="textLight">Choose...</Text>
                    )}
                </Column>
                <Column>
                    <Icon name="calendar" width={20} height={20} />
                </Column>
            </Container>
            <Modal />
        </>
    )
}


// Styled Components
const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
}) <{ size: "large" | "regular" }>`
    width: ${({ size }) => (size === "large" ? '100%' : '63%')};
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 64px;
    border-radius: 12px;
    border: 2px solid ${(props) => props.theme.colors.primary};
  `;

const Column = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: start;
    height: 100%;
`


const LocationRow = styled.View`
    flex-direction: row;
    gap: 6px;
`

const AirportSelect = styled(TouchableOpacity)`
    padding: 8px 10px;
    border-bottom-width: 1px;
    border-color: ${(props) => props.theme.colors.border};
`

export default InputDate;

