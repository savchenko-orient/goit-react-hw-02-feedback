import PropTypes from 'prop-types'
import { Title, Section, List, ListItem, Span } from './Statistics.styled'

const Statistics = ({ title, data }) => {
    return (
        <Section >
            {title && <Title >{title}</Title>}
            <List >
                {data.map((item) => {
                    return <ListItem key={item.id}>
                        <Span>{item.label}</Span>
                        <Span>{item.percentage}</Span>
                    </ListItem>
                })}
            </List>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Statistics
