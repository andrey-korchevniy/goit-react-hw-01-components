import { StatElement } from 'components/statsection/Element/Element';
import css from "components/statsection/List/List.module.css";
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