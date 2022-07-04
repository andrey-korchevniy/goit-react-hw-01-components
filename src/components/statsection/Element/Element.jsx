import css from 'components/statsection/Element/Element.module.css';
import PropTypes from 'prop-types'; 
import { colorCell } from 'utils/random-color';

export const StatElement = ({ stat: { label, percentage } }) => {
    return (
        <li className={css.item}  style={colorCell()}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    )
}

StatElement.propTypes = {
    stat: PropTypes.object.isRequired,
}