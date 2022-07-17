import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import { 
    ContainerSignInSocialButton,
    ImageContainer,
    Title,
 } from "./styles";

interface PropsSocialButton extends RectButtonProps {
    title: string;
    svg: React.FC<SvgProps>
} 

export function SignInSocialButton({
    title,
    svg: Svg,
    ...rest
}: PropsSocialButton){
    return(
        <ContainerSignInSocialButton {...rest}>
            <ImageContainer>
                <Svg/>
            </ImageContainer>

            <Title>
                {title}
            </Title>
        </ContainerSignInSocialButton>
    );
}