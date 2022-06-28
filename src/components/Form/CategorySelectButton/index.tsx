import React from "react";

import {
    ContainerSelect,
    TitleSelect,
    Icon
} from "./styles";

interface Props {
    title: string;
    onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: Props) {
    return (
        <ContainerSelect onPress={onPress}>
            <TitleSelect>{title}</TitleSelect>
            <Icon name="chevron-down" />
        </ContainerSelect>
    );
}