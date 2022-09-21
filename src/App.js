import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Gender from './components/Gender/Gender';

function App() {

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => {
    console.log(personagem)
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner/>
      <Form aoPersonagemSalvo={personagem => aoNovoPersonagemAdicionado(personagem)}/>
      <Gender name="Aventura e Sobrevivência"/>
      <Gender name="Ação"/>
      <Gender name="RPG"/>
      <Gender name="Battle Royale"/>
    </div>
  );
}

export default App;
