import Title from 'components/Title/Title'
import { Container } from './Section.styled'

function Section({ title, children }) {
    return (
        <Container>
            <Title title={title} />
            {children}
        </Container>
    )
}

export default Section