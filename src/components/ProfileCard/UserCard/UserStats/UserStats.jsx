import { Box } from 'utils/Box';
import { theme } from 'themes/theme';
import PropTypes from 'prop-types';
import { Label, Quantity } from './UserStats.styled';

export const UserStats = ({ stats }) => {
    return (
        <Box as='ul'
            display='flex'
            background={theme.colors.accentFild}
        >
            
            {Object.keys(stats).map(item =>     // создаем пары метка-количество
                <Box as='li'
                    key={stats.id + item}
                    width='calc(100%/3)'
                    border='1px solid #cacaca'
                    py={theme.space[4]}>
                    
                    <Label>{item}</Label>
                    <Quantity>{stats[item].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Quantity>
                </Box>
            )}
        </Box>
    )
}

UserStats.propTypes = {
  stats: PropTypes.object.isRequired,
}