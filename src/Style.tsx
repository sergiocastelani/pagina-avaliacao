import styled from 'styled-components';

export const Card = styled.div`
    width: 14em;
    display: flex;
    gap: .4em;
    flex-direction: column;
    justify-content: center;
    padding: 1em 2em;
    border-radius: 1em;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.4px);
    -webkit-backdrop-filter: blur(6.4px);
    color: #333; 
`;


export const RegisterButtonStyled = styled.div`
    position: fixed;
    bottom: 4%;
    right: 4%;
    background-color: transparent;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, .5));
    
`