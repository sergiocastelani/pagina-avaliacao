import CreateCards from './Components/card'
import { BoardStyle } from './Style'
import { Card } from './Style'
import './App.css'
import RegisterButton from './Components/RegisterButton'

function App() {


  return (
    <>
      <BoardStyle>
        <Card>
          <CreateCards name='Samu' photo='https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/cldepgc7t0009ju08myoyr3pu_3/public'></CreateCards>
        </Card>
        <RegisterButton></RegisterButton>
      </BoardStyle>
    </>

  )
}

export default App
