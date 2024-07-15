import { useMemo, useRef, useCallback } from "react";
import { BottomSheetModal } from '@gorhom/bottom-sheet';


// Custom hook to manage Date selection and Present modal interactions.

const useInputDate = (setDate: (date: string | null) => void) => {

    // Ref for Modal
    const presentRef = useRef<BottomSheetModal>(null);

    // Memoized snap points for Present modal
    const snapPoints = useMemo(() => ["50%", '80%'], []);

    // Function to close the Present modal.
    const closeModal = () => presentRef.current?.close();

    // Function to open the Present modal.
    const handleOpenModal = useCallback(() => {
        presentRef.current?.present();
    }, []);

    /**
     * Handler function when an date is selected.
     * Updates the selected date state and closes the modal.
     * @param selectedDate The date string selected by the user.
     */
    const handleSelectDate = (selectedDate: string) => {
        // Create a Date object with the local time zone to avoid mismatches       
        const [year, month, day] = selectedDate.split('-').map(Number);
        const date = new Date(year, month - 1, day);

        // Convert the date to the time zone and format it
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'America/Mexico_City',
            weekday: 'long',
            month: 'short',
            day: 'numeric'
        };
        const formattedDate = date.toLocaleDateString('en-US', options);

        setDate(formattedDate);
        closeModal();
    };



    // Return state and functions to be used by the component
    return {
        snapPoints,
        presentRef,
        handleOpenModal,
        handleSelectDate,
    };
};

export default useInputDate;