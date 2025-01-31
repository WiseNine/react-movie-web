import styled from 'styled-components'
import CardImage from '../Atoms/Card/CardImage'
import CardTextTitle from '../Atoms/Card/CardTextTitle'
import CardTextDesc from '../Atoms/Card/CardTextDesc'
import CardTextScore from '../Atoms/Card/CardTextScore'
import CardIndex from '../Atoms/Card/CardIndex'

const ContentCardDiv = styled.div`
    position: relative;
    width: 180rem;
    height: 340rem;
    background-color: var(--w-background);
    cursor: pointer;
`

const Wrapper1 = styled.div`
    height: 70rem;
`

function ContentCard({ id, title, desc, score, posterUrl, index, type, showModal }) {
    return (
        <ContentCardDiv
            className='fc no-drag'
            onClick={() => {
                showModal(id)
            }}>
            <CardIndex index={index + 1} />
            <CardImage posterUrl={posterUrl} />
            <Wrapper1 className='fc fsevenly'>
                <CardTextTitle text={title} />
                <div className='fr fsbetween'>
                    <CardTextDesc text={desc} />
                    <CardTextScore text={score} />
                </div>
            </Wrapper1>
        </ContentCardDiv>
    )
}

export default ContentCard
