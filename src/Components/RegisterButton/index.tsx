
import styled from 'styled-components';

export const RegisterButtonStyled = styled.div`
    position: fixed;
    bottom: 4%;
    right: 4%;
    background-color: transparent;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, .5));
    
`
export function RegisterButton() {
    return (
        <RegisterButtonStyled>
            <button className='BtnRegister'>
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </i>
            </button>
        </RegisterButtonStyled>

    )
}