import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import Text from "./Text";
import { theme, ThemeType } from "../../theme/theme";



interface TextButtonProps extends TouchableOpacityProps {
    textColor?: keyof ThemeType["colors"];
    textSize?: keyof ThemeType["fontSizes"];
    bold?: boolean,
}

const TextButton: React.FC<TextButtonProps> = ({
    children,
    textColor = "primary", // Default value
    textSize = "medium", // Default value
    bold,
    ...restProps
}) => {
    return (
        <TouchableOpacity
            {...restProps}
            activeOpacity={0.8}
        >
            <Text bold={bold} style={{ textDecorationLine: "underline" }} color={textColor} size={textSize}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};


export default TextButton;
