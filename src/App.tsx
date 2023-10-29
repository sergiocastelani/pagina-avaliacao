import { Board } from './Components/Board';
import { Card } from './Components/Card';
import './App.css';
import { RegisterButton } from './Components/RegisterButton';
import { PersonDb } from './Db/PersonDb';
import { Person } from './Model/Person';
import { Ability } from './Model/Ability';
import Imgsamuel from './assets/people/samuel.jpeg'
import Imgsergio from './assets/people/sergio.jpeg'
import Imgkelly from './assets/people/kelly.jpeg'
import Imgrenato from './assets/people/renato.jpeg'

function init() {
  const pessoas = PersonDb.getAll();

  if(pessoas.length === 0)
  {
    const samuel = new Person(
      'Samuel',Imgsamuel, 'https://www.linkedin.com/in/samuel-ramos-dev/', 'https://github.com/ProgSamuel/'
    );
    samuel.abilities.push(new Ability('Criatividade', 10));
    samuel.abilities.push(new Ability('Entusiasmo', 10));
    samuel.abilities.push(new Ability('Trabalho em equipe', 10));

    const sergio = new Person(
      'Sérgio',Imgsergio, 'https://www.linkedin.com/in/sergiocastelani/', 'https://github.com/sergiocastelani'
    )
    sergio.abilities.push(new Ability('Liderança', 10));
    sergio.abilities.push(new Ability('Pensamento critíco', 10));
    sergio.abilities.push(new Ability('Gosto pelo aprendizado', 10));

    const renato = new Person(
      'Renato', Imgrenato, 'https://www.linkedin.com/in/renatodossantos-s-/', 'https://github.com/Renass21'
    );
    renato.abilities.push(new Ability('Criatividade', 10));
    renato.abilities.push(new Ability('Gosto pelo aprendizado', 10));
    renato.abilities.push(new Ability('Trabalho em equipe', 10));

    const kelly = new Person(
      'Kelly', Imgkelly, 'https://www.linkedin.com/in/kelly-ferreira-00b656200/', 'https://github.com/kellycristine'
    );
    kelly.abilities.push(new Ability('Perseverança', 10));
    kelly.abilities.push(new Ability('Comunicativa', 10));
    kelly.abilities.push(new Ability('Trabalho em equipe', 10));

    PersonDb.add(kelly)
    PersonDb.add(renato)
    PersonDb.add(samuel)
    PersonDb.add(sergio)
  }
}
init();


function App() {
  const people = PersonDb.getAll();

  function renderCards() 
  {
    return people.map((person) => {
      const abilitiesArray: string[] = person.abilities.map(
        (ability) => ability.name
      );

      return (
        <Card
          key={ person.id } 
          name={person.name}
          photo={person.photo}
          linkedin={person.linkedin}
          github={person.github}
          skills={abilitiesArray}
        />
      );
    });
  };

  return (
    <Board >
      {renderCards()}
      <RegisterButton></RegisterButton>
    </Board>
  );
}


export default App;
