import styled from 'styled-components'
import MainNavLogo from '../Atoms/MainNavLogo'
import MainHeaderNav from '../Molecules/MainHeaderNav'
import MainNavUser from '../Atoms/MainNavUser'
import ModalSignIn from '../Organisms/ModalSignIn'
import ModalSignUp from '../Organisms/ModalSignUp'
import ModalConfirm from './ModalConfirm'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MainHeaderWrapper = styled.div`
    position: sticky;
    top: -1px;
    width: 100vw;
    height: 65rem;
    z-index: 1000;
    background-color: ${(props) => {
        if (props.$backgroundColor == 'auto') return 'var(--w-background)'
        else if (props.$backgroundColor == 'transparent') return 'transparent'
    }};
`

const MainNavWrapper = styled.div`
    width: 400rem;
    height: 100%;
    padding-right: 100rem;
`

const MainHeaderContentWrapper = styled.div`
    position: relative;
    height: 64rem;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 575px) {
        & {
            width: calc(100% - 100rem);
        }
    }
    @media (min-width: 576px) and (max-width: 767px) {
        & {
            width: calc(100% - 100rem);
        }
    }
    @media (min-width: 768px) and (max-width: 991px) {
        & {
            width: calc(100% - 100rem);
        }
    }
    @media (min-width: 992px) and (max-width: 1279px) {
        & {
            width: calc(100% - 100rem);
        }
    }
    @media (min-width: 1280px) and (max-width: 1439px) {
        & {
            width: calc(100% - 100rem);
        }
    }
    @media (min-width: 1380px) {
        & {
            width: 1280rem;
        }
    }
`

const MainHeaderHr = styled.div`
    width: 1440rem;
    height: 1rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => {
        if (props.$backgroundColor == 'auto') return 'var(--w-graywhite)'
        else if (props.$backgroundColor == 'transparent') return 'var(--w-white)'
    }};
`

const SignButton = styled.button`
    position: relative;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    width: 80rem;
    height: 100%;
    border: 0;
    background-color: transparent;
    font-size: 16rem;
    color: var(--w-red);
    &:hover {
        cursor: pointer;
        filter: brightness(0.8);
    }
`

function MainHeader({ backgroundColor = 'auto' }) {
    const navigate = useNavigate()

    const [signinModal, setSigninModal] = useState(false)
    const [signupModal, setSignupModal] = useState(false)
    const [signoutModal, setSignoutModal] = useState(false)
    const [noScroll, setScroll] = useState(false)
    const [isSignIn, setIsSignIn] = useState(false)

    const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key))

    const showSigninModal = (async) => {
        setSigninModal(true)
        setScroll(true)
        document.body.style.overflow = 'none'
    }
    const hideSigninModal = (async) => {
        setSigninModal(false)
        setScroll(false)
    }
    const showSignupModal = (async) => {
        setSignupModal(true)
        setScroll(true)
        document.body.style.overflow = 'none'
    }
    const hideSignupModal = (async) => {
        setSignupModal(false)
        setScroll(false)
    }
    const switchModal = (async) => {
        setSigninModal(false)
        setSignupModal(true)
    }
    const checkSignOut = () => {
        setSignoutModal(true)
        setScroll(true)
    }
    const cancelSignOut = () => {
        setSignoutModal(false)
        setScroll(false)
    }
    const signOut = () => {
        navigate('/')
        localStorage.removeItem('user_id')
        localStorage.removeItem('user_email')
        localStorage.removeItem('user_nickname')
        localStorage.removeItem('favorite_list')
        localStorage.removeItem('rating_list')
        setIsSignIn(false)
        setSignoutModal(false)
        setScroll(false)
    }

    useEffect(() => {
        document.querySelector('html').style.overflowY = noScroll ? 'hidden' : 'auto'
    })

    useEffect(() => {
        const id = loadJSON('user_id')
        if (!id) {
            setIsSignIn(false)
        } else {
            setIsSignIn(true)
        }
    })

    return (
        <>
            <MainHeaderWrapper className='fc fsbetween' $backgroundColor={backgroundColor}>
                <MainHeaderContentWrapper className='fr fsbetween'>
                    <MainNavWrapper className='fr fsbetween'>
                        <div className='fc fcenter'>
                            <MainNavLogo />
                        </div>
                        <div className='fc fcenter'>
                            <MainHeaderNav backgroundColor={backgroundColor} />
                        </div>
                    </MainNavWrapper>
                    <div className='fr fsbetween'>
                        <Link to={`/search`}>
                            <svg
                                className='vcenter'
                                style={{ marginRight: '10rem' }}
                                width='30'
                                height='30'
                                viewBox='0 0 30 30'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <circle cx='13.9012' cy='13.9013' r='6' stroke='#252525' />
                                <rect x='17.4012' y='19.044' width='1' height='7' transform='rotate(-40 17.4012 19.044)' fill='#252525' />
                            </svg>
                        </Link>
                        {!isSignIn ? <SignButton onClick={() => showSigninModal()}>로그인</SignButton> : null}
                        {!isSignIn ? <SignButton onClick={() => showSignupModal()}>회원가입</SignButton> : null}
                        {isSignIn ? <SignButton onClick={() => checkSignOut()}>로그아웃</SignButton> : null}
                        {isSignIn ? <MainNavUser /> : null}
                    </div>
                </MainHeaderContentWrapper>
                <MainHeaderHr $backgroundColor={backgroundColor} />
            </MainHeaderWrapper>
            {signinModal ? <ModalSignIn hideSigninModal={hideSigninModal} switchModal={switchModal} /> : null}
            {signupModal ? <ModalSignUp hideSignupModal={hideSignupModal} /> : null}
            {signoutModal ? <ModalConfirm msg={'로그아웃 할까요?'} cancel={cancelSignOut} confirm={signOut} /> : null}
        </>
    )
}

export default MainHeader
