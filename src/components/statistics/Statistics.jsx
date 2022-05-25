import PropTypes from 'prop-types';
import 'components/statistics/Statistics.css';

export default function Statistics({ label, percentage }) {

    return (
        <li className="stat__item" style={colorCell()}  >
            <span className="stat__label">{label}</span>
            <span className="stat__percentage">{percentage}%</span>
        </li>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

function colorCell() {
    const color = '#' + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
    return {background: color}
};