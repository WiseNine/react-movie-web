import styled from 'styled-components'
import MainHeader from '../Organisms/MainHeader'
import ContentGrid from '../Organisms/ContentGrid'
import ContentSlideSectionTitle from '../Atoms/ContentSlideSectionTitle'
import ScrollTopButton from '../Atoms/ScrollTopButton'
import ModalDetailContent from '../Organisms/ModalDetailContent'
import DraggableSlider from '../Molecules/DraggableSlider'
import SortList from '../Molecules/SortList'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const TVPageTemplateWrapper = styled.div`
    width: 100vw;
`

let itemArray = [
    ['# 현재상영작', 1],
    ['# 개봉예정작', 2],
    ['# 최고평점작', 3],
    ['⚔️ 액션 & 어드벤처', 10759],
    ['🌏 다큐멘터리', 99],
    ['🤣 코미디', 35],
    ['💰 범죄', 80],
    ['👪 가족', 10751],
    ['👽 SF & 판타지', 10765],
    ['🪖 전쟁 & 정치', 10768],
    ['📽️ 드라마', 18],
    ['🕵️ 미스터리', 9648],
    ['👶 어린이', 10762],
    ['📰 뉴스', 10763],
    ['🏠 리얼리티', 10764],
    ['📼 연속극', 10766],
    ['🎤 토크쇼', 10767],
    ['✏️ 애니메이션', 16],
    ['🐎 서부', 37],
] // 모든영화 = 0

function getGenreByNum(num) {
    return itemArray.filter((element) => element[1] == num)
}

function TVPageTemplate({ data, changeGenre, sortType, changeSort }) {
    const [modal, setModal] = useState(false)
    const [noScroll, setScroll] = useState(false)
    const [id, setId] = useState(null)
    //const [sortType, setSortType] = useState(1) // 1 = 평점순, 2 = 인기순, 3 = 최신순
    const [genreText, setGenreText] = useState('📺 모든 영화')
    const [genreType, setGenreType] = useState(0)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname.replaceAll('/tv', '') == '') {
            setGenreText('📺 모든 TV 프로그램')
            setGenreType(0)
            changeGenre(0)
        } else {
            let genreId = location.pathname.replaceAll('/tv/genre-', '')
            setGenreText(getGenreByNum(genreId)[0][0])
            setGenreType(genreId)
            changeGenre(genreId)
        }
    }, [location.pathname])

    const showModal = async (id) => {
        setModal(true)
        setScroll(true)
        setId(id)
        document.body.style.overflow = 'none'
    }

    const hideModal = (async) => {
        setModal(false)
        setScroll(false)
    }

    async function changeGenreType(num) {
        navigate(`/tv/genre-${num}`)
    }

    useEffect(() => {
        document.querySelector('html').style.overflowY = noScroll ? 'hidden' : 'auto'
    })

    return (
        <>
            <MainHeader />
            <TVPageTemplateWrapper className='fc fleft'>
                <div style={{ width: '1280rem' }} className='hcenter'>
                    <ContentSlideSectionTitle text={genreText} margin={0} />
                    <div className='fr fsbetween' style={{ marginTop: '-10rem', marginBottom: '8rem' }}>
                        <DraggableSlider itemArray={itemArray} changeGenreType={changeGenreType} />
                        {genreType > 3 ? <SortList sortType={sortType} changeSortType={changeSort} /> : null}
                    </div>
                    <ContentGrid data={data} type={'tv'} showModal={showModal} noScroll={noScroll} />
                </div>
            </TVPageTemplateWrapper>
            <ScrollTopButton />
            {modal ? <ModalDetailContent id={id} hideModal={hideModal} type={'tv'} /> : null}
        </>
    )
}

export default TVPageTemplate
