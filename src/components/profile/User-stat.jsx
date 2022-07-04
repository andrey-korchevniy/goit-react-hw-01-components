import { Box } from 'utils/Box';
import { theme } from 'themes/theme';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.span` // создаем компоненту метки
    display: block;
    text-align: center;
    font-size: ${theme.fontSizes.s};
    font-weight: 700;
    color: ${theme.colors.textColor};
    ::first-letter {
        text-transform: uppercase
    };  
`

const Quantity = styled(Label)` // создаем компоненту количества 
    font-size: ${theme.fontSizes.b};
    color: ${theme.colors.mainTextColor};
`

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