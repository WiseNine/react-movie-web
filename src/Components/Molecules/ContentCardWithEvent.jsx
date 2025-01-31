import styled from 'styled-components'
import CardImageWithEvent from '../Atoms/Card/CardImageWithEvent'
import CardTextTitle from '../Atoms/Card/CardTextTitle'
import CardTextDesc from '../Atoms/Card/CardTextDesc'
import CardTextScore from '../Atoms/Card/CardTextScore'
import CardIndex from '../Atoms/Card/CardIndex'

const ContentCardDiv = styled.div`
    position: relative;
    height: 340rem;
    background-color: var(--w-background);
    cursor: pointer;
`

const Wrapper1 = styled.div`
    height: 70rem;
`

function ContentCardWithEvent({
    id,
    title,
    desc,
    score,
    posterUrl,
    backdropUrl,
    slideIndex,
    index,
    rightOnce,
    makeWideForLastIndex,
    makeNormalForLastIndex,
    datasLength,
    overview,
    type,
    isImageLoaded,
    showModal,
}) {
    return (
        <ContentCardDiv
            className='fc no-drag'
            onClick={() => {
                showModal(id, type)
            }}>
            <CardIndex index={index} />
            <CardImageWithEvent
                posterUrl={posterUrl}
                backdropUrl={backdropUrl}
                slideIndex={slideIndex}
                index={index}
                rightOnce={rightOnce}
                makeWideForLastIndex={makeWideForLastIndex}
                makeNormalForLastIndex={makeNormalForLastIndex}
                datasLength={datasLength}
                overview={overview}
                className='no-drag'
                isImageLoaded={isImageLoaded}
            />
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

export default ContentCardWithEvent
