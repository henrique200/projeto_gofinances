import React from "react";

import { 
    ContainerHistoryCard, 
    Title,
    Amount 
} from "./styles";

interface Props {
    title: string;
    color: string;
    amount: string;
}

export function HistoryCard({
    title,
    color,
    amount
}: Props) {
    return(
        <ContainerHistoryCard color={color}>
            <Title>{title}</Title>
            <Amount>{amount}</Amount>
        </ContainerHistoryCard>
    );
}