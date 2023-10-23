// import {Person} from '../Model/Person' 
import {Button} from '../Button'
import styled from 'styled-components';

interface Personprops {
    name:string
    photo:string
}

const CardContainer = styled.div`
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

export function Card(props:Personprops){
    return (
        <CardContainer>
            <h2> {props.name}</h2>
            <img src={props.photo} alt="" className='profile' />
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
            </ul>
            <Button text='Edit'></Button>
        </CardContainer>
    )
}