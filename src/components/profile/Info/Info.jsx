import { Box } from 'utils/Box';
import { theme } from 'themes/theme';
import PropTypes from 'prop-types';
import { Avatar, Name, Tag, Location } from './User-info.styled';

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