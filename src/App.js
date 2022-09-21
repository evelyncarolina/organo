import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';

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
    </div>
  );
}

export default App;
