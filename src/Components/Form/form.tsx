import { useNavigate } from "react-router-dom";
import { PersonDb } from "../../Db/PersonDb";
import { Ability } from "../../Model/Ability";
import { Person } from "../../Model/Person";
import { Container, StyleForm } from "./Styles";

export const Form = () => {
    const navigate = useNavigate();

    function onSubmit(event: any) {
        event.preventDefault();

        const userName = (document.getElementById('name') as HTMLInputElement)?.value || "";
        const picture = (document.getElementById('picture') as HTMLInputElement)?.value || "";
        const linkedin = (document.getElementById('linkedin') as HTMLInputElement)?.value || "";
        const github = (document.getElementById('github') as HTMLInputElement)?.value || "";
        const skill1 = (document.getElementById('skill1') as HTMLInputElement)?.value || "";
        const skill2 = (document.getElementById('skill2') as HTMLInputElement)?.value || "";
        const skill3 = (document.getElementById('skill3') as HTMLInputElement)?.value || "";

        const newPerson = new Person(userName, picture, linkedin, github);
        newPerson.abilities.push(new Ability(skill1, 10));
        newPerson.abilities.push(new Ability(skill2, 10));
        newPerson.abilities.push(new Ability(skill3, 10));
      
        PersonDb.add(newPerson);

        navigate('/');         
    };

    return(
        <Container className="card-formulario">
            <StyleForm onSubmit={onSubmit}>
                <input id="name" type="text" placeholder="Digite seu nome*" required/>
                <input id="picture" type="text" placeholder="Link para foto*" required/>
                <input id="linkedin" type="text" placeholder="Página LinkedIn*" required/>
                <input id="github" type="text" placeholder="Página GitHub*" required/>
                <input id="skill1" type="text" placeholder="Digite sua habilidade 1*" required/>
                <input id="skill2" type="text" placeholder="Digite sua habilidade 2*" required/>
                <input id="skill3" type="text" placeholder="Digite sua habilidade 3*" required/>
                <button onClick={() => navigate('/')}>Cancelar</button>
                <button>Salvar</button>
            </StyleForm>
        </Container>
    )
}