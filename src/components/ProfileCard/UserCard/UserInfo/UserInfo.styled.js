import styled from "styled-components";
import { theme } from 'themes/theme';

export const Avatar = styled.img`
    width: 120px;
    border-radius: ${theme.radii.round};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${theme.space[5]}px;
`
export const Name = styled.p`
    font-size: ${theme.fontSizes.b};
    font-weight: 700;
    color: ${theme.colors.mainTextColor};
    text-align: center;
`
export const Tag = styled(Name)`
    font-size: ${theme.fontSizes.s};
    color: ${theme.colors.textColor};
    margin-top: ${theme.space[3]}px;
`
export const Location = styled(Tag)``;
