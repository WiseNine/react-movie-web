import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainNavUserWrapper = styled.span`
    position: relative;
    width: 16rem;
    height: 16rem;
    top: 5rem;
`

function MainNavUser() {
    return (
        <Link to={'/user'} className='no-underline'>
            <MainNavUserWrapper>
                <svg width='20' height='20' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M13 0C5.824 0 0 5.824 0 13C0 20.176 5.824 26 13 26C20.176 26 26 20.176 26 13C26 5.824 20.176 0 13 0ZM13 3.9C15.158 3.9 16.9 5.642 16.9 7.8C16.9 9.958 15.158 11.7 13 11.7C10.842 11.7 9.1 9.958 9.1 7.8C9.1 5.642 10.842 3.9 13 3.9ZM13 22.36C9.75 22.36 6.877 20.696 5.2 18.174C5.239 15.587 10.4 14.17 13 14.17C15.587 14.17 20.761 15.587 20.8 18.174C19.123 20.696 16.25 22.36 13 22.36Z'
                        fill='#696969'
                    />
                </svg>
            </MainNavUserWrapper>
        </Link>
    )
}

export default MainNavUser
