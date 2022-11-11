import styled from 'styled-components'

const ModalScrollDownButtonButton = styled.button`
    width: 40rem;
    height: 40rem;
    padding: 0px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    filter: drop-shadow(0px 0px 4px #000000);
`

function ModalScrollDownButton({ scrollDownModal }) {
    return (
        <ModalScrollDownButtonButton onClick={scrollDownModal}>
            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M10 15L20 25L30 15' stroke='#ffffff' />
            </svg>
        </ModalScrollDownButtonButton>
    )
}

export default ModalScrollDownButton
