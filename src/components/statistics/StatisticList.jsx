import Statistics from "components/statistics/Statistics";
import 'components/statistics/Statistics.css';

function StatisticList({ items, title }) {
    return (
        <section className="stat__statistics">

                {title && <h2 className="stat__title">{title}</h2>}

                <ul className="stat__stat-list">
                    {items.map(item => (
                            <Statistics key={item.id}
                                label={item.label}
                                percentage={item.percentage}
                            />
                    ))}
                </ul>

        </section>
    )
}

export default StatisticList;


