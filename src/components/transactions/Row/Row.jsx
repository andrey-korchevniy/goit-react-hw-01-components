import { Row, Cell, CellAmount } from './Row.styled';
import PropTypes from 'prop-types';

export const TransactionRow = ({ transaction: { type, amount, currency } }) => {
    return (
        <Row>
            <Cell>{type}</Cell>
            <CellAmount>{amount}</CellAmount>
            <Cell>{currency}</Cell>
        </Row>
    )
}

TransactionRow.propTypes = {
    transaction: PropTypes.object.isRequired
}