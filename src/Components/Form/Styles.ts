import styled from "styled-components";

export const StyleForm = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    padding: 2em 4em;
    gap: 1rem;
    margin: 1rem;
    background-color: #ffffff; 
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.0);
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    input{
        background-color: #333333;
        width: 100%;
        border: none;
        border-radius: 7px;
        padding: 1em 2em;
        box-sizing: none;
        font-size: 1rem;
    }

    ::placeholder{
        color: white;
    }

    div{
        width: 100%;
        display: flex;
        padding-top: 1.5em;
        justify-content: space-between;
    }
    div:first-child button {
    background-color: #CD5C5C !important;
}

`

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 90vw;
    height: 90vh;
    background-color:transparent;

`