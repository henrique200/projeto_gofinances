import styled from "styled-components/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";

export const ContainerResume = styled(GestureHandlerRootView)`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    background-color: ${({theme}) => theme.colors.primary};

    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        flex: 1,
        padding: 24,
    }
})``;