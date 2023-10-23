import { Board } from './Components/Board'
import { Card } from './Components/Card'
import './App.css'
import {RegisterButton} from './Components/RegisterButton'
import { PersonDb } from './Db/PersonDb'
import { Person } from './Model/Person'
import { Ability } from './Model/Ability'

function init() {
  const pessoas = PersonDb.getAll();

  if(pessoas.length === 0)
  {
    const p1 = new Person('Samu', 'https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/cldepgc7t0009ju08myoyr3pu_3/public');
    p1.abilities.push(new Ability('Coding', 10));
    p1.abilities.push(new Ability('Sleeping', 1000));
    PersonDb.add(p1);
  }

  console.log(PersonDb.getAll());
}
init();

function App() {

  return (
    <Board>
      <Card name='Samu' photo='https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/cldepgc7t0009ju08myoyr3pu_3/public'></Card>

      <Card name='Samu' photo='https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/cldepgc7t0009ju08myoyr3pu_3/public'></Card>

      <Card name='Samu' photo='https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/cldepgc7t0009ju08myoyr3pu_3/public'></Card>

      <Card name='Samu' photo='https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/cldepgc7t0009ju08myoyr3pu_3/public'></Card>


      <RegisterButton></RegisterButton>
    </Board>
  )
}

export default App
