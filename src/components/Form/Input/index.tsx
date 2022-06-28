import React from "react";
import {TextInputProps} from 'react-native';

import { ContainerInput } from "./styles";

type Props = TextInputProps;

export function Input({...rest}: Props){
    return(
        <ContainerInput {...rest}/>
    );
}