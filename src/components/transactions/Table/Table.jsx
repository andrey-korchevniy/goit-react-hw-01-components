import { TransactionRow } from 'components/transactions/Row/Row';
import PropTypes from 'prop-types';
import { Table, HeadRow, HeadCell } from './Table.styles';

export const Transactions = ({ transactions }) => {
    return (
        <Table>
            <HeadRow>
                <tr>
                    <HeadCell>Type</HeadCell>
                    <HeadCell>Amount</HeadCell>
                    <HeadCell>Currency</HeadCell>
                </tr>
            </HeadRow>
            <tbody>
                {transactions.map(transaction => (
                    <TransactionRow
                        key={transaction.id}
                        transaction={transaction} />
                ))}
            </tbody>
        </Table>
    )
}

Transactions.propTypes = {
    transactions: PropTypes.array.isRequired
}