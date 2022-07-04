import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from 'themes/theme';

const Row = styled.tr`
    :nth-child(2n) {
    background: ${theme.colors.accentFild};
}
`
const Cell = styled.td`
    color: ${theme.colors.textColor};
    font-size: ${theme.fontSizes.s};
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 60px;
    text-transform: capitalize;
`
const CellAmount = styled(Cell)`
    text-align: end;
    padding-right: 60px;
`

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