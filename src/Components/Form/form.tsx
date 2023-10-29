import { useNavigate, useParams } from "react-router-dom";
import { PersonDb } from "../../Db/PersonDb";
import { Ability } from "../../Model/Ability";
import { Person } from "../../Model/Person";
import { Container, StyleForm } from "./Styles";

export const Form = () => {
    const navigate = useNavigate();

    const { personId } = useParams();
    const editingPerson = personId ? PersonDb.findById(personId) : undefined;

    function onSubmit(event: any) {
        event.preventDefault();

        const userName = (document.getElementById('name') as HTMLInputElement)?.value || "";
        const photo = (document.getElementById('photo') as HTMLInputElement)?.value || "";
        const linkedin = (document.getElementById('linkedin') as HTMLInputElement)?.value || "";
        const github = (document.getElementById('github') as HTMLInputElement)?.value || "";
        const skill1 = (document.getElementById('skill1') as HTMLInputElement)?.value || "";
        const skill2 = (document.getElementById('skill2') as HTMLInputElement)?.value || "";
        const skill3 = (document.getElementById('skill3') as HTMLInputElement)?.value || "";

        if (editingPerson)
        {
            editingPerson.name = userName;
            editingPerson.photo = photo;
            editingPerson.linkedin = linkedin;
            editingPerson.github = github;
            editingPerson.abilities[0].name = skill1;
            editingPerson.abilities[1].name = skill2;
            editingPerson.abilities[2].name = skill3;
            
            PersonDb.update(editingPerson);
        }
        else
        {
            const newPerson = new Person(userName, photo, linkedin, github);
            newPerson.abilities.push(new Ability(skill1, 10));
            newPerson.abilities.push(new Ability(skill2, 10));
            newPerson.abilities.push(new Ability(skill3, 10));
          
            PersonDb.add(newPerson);
        }

        navigate('/');         
    };

    return(
        <Container className="card-formulario">
            <StyleForm onSubmit={onSubmit}>
                <input id="name" type="text" placeholder="Digite seu nome" required defaultValue={editingPerson ? editingPerson.name : ""}/>
                <input id="photo" type="text" placeholder="Link para foto" required defaultValue={editingPerson ? editingPerson.photo : ""}/>
                <input id="linkedin" type="url" placeholder="Perfil no LinkedIn" required defaultValue={editingPerson ? editingPerson.linkedin : ""}/>
                <input id="github" type="url" placeholder="Perfil no GitHub" required defaultValue={editingPerson ? editingPerson.github : ""}/>
                <input id="skill1" type="text" placeholder="Digite sua habilidade 1" required defaultValue={editingPerson ? editingPerson.abilities[0].name : ""}/>
                <input id="skill2" type="text" placeholder="Digite sua habilidade 2" required defaultValue={editingPerson ? editingPerson.abilities[1].name : ""}/>
                <input id="skill3" type="text" placeholder="Digite sua habilidade 3" required defaultValue={editingPerson ? editingPerson.abilities[2].name : ""}/>
                <div>
                <button onClick={() => navigate('/')} id="cancelar">Cancelar</button>
                <button id="salvar">Salvar</button>
                </div>
            </StyleForm>
        </Container>
    )
}