import { UserCard } from "../Card/Card";
import { Box } from 'utils/Box';
import { theme } from "themes/theme";
import PropTypes from 'prop-types';

export const ProfileCard = ( {users} ) => {
    return (
        <Box
            background={theme.colors.accentFild}
            py={theme.space[5]} px
        >
            {users.map(user =>
                <UserCard user={user} key={user.id} />
            )}
        </Box>
    )
}

ProfileCard.propTypes = {
  users: PropTypes.array.isRequired,
}