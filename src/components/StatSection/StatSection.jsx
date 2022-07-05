import { StatList } from './StatList/StatList';
import css from './StatSection.module.css';
import PropTypes from 'prop-types'; 

export const StatSection = ({ data, title }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <StatList data={data} />
        </section>
    )
}

StatSection.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string
}