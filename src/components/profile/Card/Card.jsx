import { UserInfo } from "../Info/Info";
import { UserStats } from "../Stat/Stat";
import { Box } from 'utils/Box';
import { theme } from 'themes/theme';
import PropTypes from 'prop-types';

export const UserCard = ({ user: { stats, ...otherUserInfo} }) => {

    return (
        <Box
            borderRadius={theme.radii.normal}
            width='270px'
            mx='auto'
            boxShadow='0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
            0px 2px 1px rgba(0, 0, 0, 0.2)'
            overflow="hidden"
        >
            <UserInfo user={otherUserInfo} />
            <UserStats stats={stats} />
        </Box >
    )
}

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
}