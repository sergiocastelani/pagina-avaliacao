import { Board } from './Components/Board'
import { Card } from './Components/Card'
import './App.css'
import {RegisterButton} from './Components/RegisterButton'

function App() {


  return (
    <>
      <Board>
        <Card name='Samu' photo='https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/cldepgc7t0009ju08myoyr3pu_3/public'></Card>

        <Card name='Samu' photo='https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/cldepgc7t0009ju08myoyr3pu_3/public'></Card>

        <Card name='Samu' photo='https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/cldepgc7t0009ju08myoyr3pu_3/public'></Card>

        <Card name='Samu' photo='https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/cldepgc7t0009ju08myoyr3pu_3/public'></Card>


        <RegisterButton></RegisterButton>
      </Board>
    </>

  )
}

export default App
