import PropTypes from 'prop-types';
import 'components/TransactionHistory/TransactionHistory.css';

function TransactionHistory ({ id, type, amount, currency }) {
    return (
        <tr className="trans_line" key={id}>
            <td className="trans__item">{type}</td>
            <td className="trans__item second">{amount}</td>
            <td className="trans__item">{currency}</td>
        </tr>
    )
}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionHistory;
