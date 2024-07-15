import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import Text from "./Text";
import { theme, ThemeType } from "../../theme/theme";



interface TextButtonProps extends TouchableOpacityProps {
    textColor?: keyof ThemeType["colors"];
    textSize?: keyof ThemeType["fontSizes"];
}

const TextButton: React.FC<TextButtonProps> = ({
    children,
    textColor = "primary", // Default value
    textSize = "medium", // Default value
    ...restProps
}) => {
    return (
        <TouchableOpacity
            {...restProps}
            activeOpacity={0.8}
        >
            <Text style={{ textDecorationLine: "underline" }} bold color={textColor} size={textSize}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};


export default TextButton;
