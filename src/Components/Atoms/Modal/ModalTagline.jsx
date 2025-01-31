import styled from 'styled-components'

const ModalTaglineSpan = styled.span`
    font-weight: 700;
    font-size: 20rem;
    color: var(--w-orange);
    margin-top: 8rem;
`

function ModalTagline({ tagline }) {
    return <ModalTaglineSpan>{tagline}</ModalTaglineSpan>
}

export default ModalTagline
