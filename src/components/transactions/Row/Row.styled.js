import styled from "styled-components";
import { theme } from "themes/theme";

export const Row = styled.tr`
    :nth-child(2n) {
    background: ${theme.colors.accentFild};
}
`
export const Cell = styled.td`
    color: ${theme.colors.textColor};
    font-size: ${theme.fontSizes.s};
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 60px;
    text-transform: capitalize;
`
export const CellAmount = styled(Cell)`
    text-align: end;
    padding-right: 60px;
`
