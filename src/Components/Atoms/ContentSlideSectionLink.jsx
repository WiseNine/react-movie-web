import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContentSlideSectionLinkSpan = styled.div`
    position: relative;
    font-weight: 400;
    font-size: 14rem;
    margin-right: 50rem;
    margin-top: 30rem;
    color: var(--w-blue);
`

function ContentSlideSectionLink({ page }) {
    return (
        <Link to={`./${page}`} className='no-underline'>
            <ContentSlideSectionLinkSpan>
                더보기
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ marginBottom: '-5rem' }}>
                    <path d='M8 6L12 10L8 14' stroke='#0094FF' />
                </svg>
            </ContentSlideSectionLinkSpan>
        </Link>
    )
}

export default ContentSlideSectionLink
