import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { ButtonTitle, ContainerButton } from "./styles";

interface Props extends RectButtonProps{
    title: string;
    onPress: () => void;
}

export function Button({
    title, 
    onPress, 
    ...rest
}: Props) {
    return(
        <ContainerButton onPress={onPress} {...rest}>
            <ButtonTitle>{title}</ButtonTitle>
        </ContainerButton>
    );
}