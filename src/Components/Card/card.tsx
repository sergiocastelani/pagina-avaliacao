// import {Person} from '../Model/Person' 
import Button from '../Button/button'
interface Personprops {
    name:string
    photo:string
}

export default function CreateCards(props:Personprops){
    return (
        <>
            <h2> {props.name}</h2>
            <img src={props.photo} alt="" className='profile' />
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
            </ul>
            <Button text='Edit'></Button>
        </>
    )
}