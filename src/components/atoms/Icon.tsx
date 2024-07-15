import Calendar from "../../assets/icons/calendar.svg";
import ArrowLeft from "../../assets/icons/arrowLeft.svg";
import ArrowRight from "../../assets/icons/arrowRight.svg";
import PlaneArrival from "../../assets/icons/planeArrival.svg";
import PlaneDeparture from "../../assets/icons/planeDeparture.svg";
import PlaneStatus from "../../assets/icons/planeStatus.svg";
import { ThemeType, theme } from "../../theme/theme";
import React from "react";
import { View, Text, } from 'react-native'

type IconProps = {
    name: string;
    color?: keyof ThemeType['colors'];
    width: number;
    height: number
}

const Icon: React.FC<IconProps> = ({ name, color = "primary", width = 15, height = 15 }) => {

    switch (name) {
        case "calendar":
            return <Calendar color={theme.colors[color]} width={width} height={height} />;
        case "arrowLeft":
            return <ArrowLeft color={theme.colors[color]} width={width} height={height} />;
        case "arrowRight":
            return <ArrowRight color={theme.colors[color]} width={width} height={height} />;
        case "planeArrival":
            return <PlaneArrival color={theme.colors[color]} width={width} height={height} />;
        case "planeDeparture":
            return <PlaneDeparture color={theme.colors[color]} width={width} height={height} />;
        case "planeStatus":
            return <PlaneStatus color={theme.colors[color]} width={width} height={height} />;
        default:
            return null;
    }
}

export default Icon;