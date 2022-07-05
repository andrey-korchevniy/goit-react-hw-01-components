import { StatElement } from './StatElement/StatElement';
import css from "./StatList.module.css";
import PropTypes from 'prop-types'; 

export const StatList = ({ data }) => {
    return (
        <ul className={css.list}>
            {data.map(element => { return (
                <StatElement key={element.id } stat={element} />)
            })}
        </ul>
    )
}

StatList.propTypes = {
    data: PropTypes.array.isRequired,
}