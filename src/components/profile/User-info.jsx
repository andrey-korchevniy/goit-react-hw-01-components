import { Box } from 'utils/Box';
import { theme } from 'themes/theme';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Avatar = styled.img`
    width: 120px;
    border-radius: ${theme.radii.round};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${theme.space[5]}px;
    
`
const Name = styled.p`
    font-size: ${theme.fontSizes.b};
    font-weight: 700;
    color: ${theme.colors.mainTextColor};
    text-align: center;
`
const Tag = styled(Name)`
    font-size: ${theme.fontSizes.s};
    color: ${theme.colors.textColor};
    margin-top: ${theme.space[3]}px;
`
const Location = styled(Tag)``;

export const UserInfo = ({ user: { username, tag, location, avatar } }) => {
    return (
        <Box
            background={theme.colors.backgroundColor}
            py={theme.space[5]} px
        >
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Box>
    )
} 

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
}