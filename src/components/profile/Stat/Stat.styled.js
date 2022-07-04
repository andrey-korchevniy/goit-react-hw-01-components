import styled from "styled-components";
import { theme } from 'themes/theme';

export const Label = styled.span` // создаем компоненту метки
    display: block;
    text-align: center;
    font-size: ${theme.fontSizes.s};
    font-weight: 700;
    color: ${theme.colors.textColor};
    ::first-letter {
        text-transform: uppercase
    };  
`

export const Quantity = styled(Label)` // создаем компоненту количества 
    font-size: ${theme.fontSizes.b};
    color: ${theme.colors.mainTextColor};
`
