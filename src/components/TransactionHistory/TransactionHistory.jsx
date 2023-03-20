import PropTypes from 'prop-types'
import { Table, Tr, Td, Th } from './TransactionHistory.styled'

function TransactionHistory({ items }) {
    return (
        <Table >
            <thead>
                <Tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </Tr>
            </thead>

            <tbody>
                {items.map((item) => {
                    return <Tr key={item.id}>
                        <Td>{item.type}</Td>
                        <Td>{item.amount}</Td>
                        <Td>{item.currency}</Td>
                    </Tr>
                })}
            </tbody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TransactionHistory
