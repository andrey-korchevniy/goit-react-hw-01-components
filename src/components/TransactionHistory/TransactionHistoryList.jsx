import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import "components/TransactionHistory/TransactionHistory.css";

function TransactionHistoryList({ transactions }) {
    return (
        <section className="trans__section">
            <h2 className="trans__title">4 - История транзакций</h2>
            <table className="transtion-history">
                  <thead className="trans__head">
                    <tr>
                        <th className="trans__head-item">Type</th>
                        <th className="trans__head-item">Amount</th>
                        <th className="trans__head-item">Currency</th>
                    </tr>
                </thead>
                <tbody >
                {transactions.map(transaction => (
                        <TransactionHistory key={transaction.id}
                            type={transaction.type}
                            amount={transaction.amount}
                            currency={transaction.currency}                        
                        />
                ))}
                </tbody>
            </table>
        </section>
    )
}

export default TransactionHistoryList;