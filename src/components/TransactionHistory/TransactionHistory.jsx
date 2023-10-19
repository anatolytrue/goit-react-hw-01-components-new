import { Table, TableHeadItem, TableDescr, TableRaw} from "./TransactionHistory.styled"
import PropTypes from 'prop-types'

export function TransactionHistory({ items }) {
    return (<Table>
        <thead>
            <tr>
                <TableHeadItem>Type</TableHeadItem>
                <TableHeadItem>Amount</TableHeadItem>
                <TableHeadItem>Currency</TableHeadItem>
            </tr>
        </thead>

        <tbody>
            {items.map(item => (
                <TableRaw key = { item.id } >
                    <TableDescr>{item.type}</TableDescr>
                    <TableDescr>{item.amount}</TableDescr>
                    <TableDescr>{item.currency}</TableDescr>
                </TableRaw>
                )
            )
            }
        </tbody>
    </Table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    )
}