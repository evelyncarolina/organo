import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Gender from './components/Gender/Gender';

function App() {

  const generos = [
    {
      name: 'Aventura e Sobrevivência',
      primaryColor: '#5271FF',
      secondaryColor: '#A5B5FF' 
    }, 
    {
      name: 'Ação',
      primaryColor: '#8F52FF',
      secondaryColor: '#CCB1FF' 
    }, 
    {
      name: 'RPG',
      primaryColor: '#FF5757',
      secondaryColor: '#FFB5B5' 
    }, 
    {
      name: 'Battle Royale',
      primaryColor: '#FFD83D',
      secondaryColor: '#F1DF95' 
    }, 
    {
      name: 'Horror e Terror',
      primaryColor: '#375739',
      secondaryColor: '#90AD92' 
    }, 
    {
      name: 'Estratégia',
      primaryColor: '#00AEC6',
      secondaryColor: '#7ECFDB' 
    }, 
    {
      name: 'Puzzle',
      primaryColor: '#F48D2D',
      secondaryColor: '#FFCA98' 
    }, 
    {
      name: 'Esporte',
      primaryColor: '#D34AFA',
      secondaryColor: '#F0BCFF' 
    }, 
    {
      name: 'Corrida',
      primaryColor: '#1DD8B1',
      secondaryColor: '#A5E6D8' 
    }
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => {
    console.log(personagem)
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner/>
      <Form nameGeneros={generos.map(generos => generos.name)} aoPersonagemSalvo={personagem => aoNovoPersonagemAdicionado(personagem)}/>
      
      {generos.map(genero =><Gender key={genero.name} name={genero.name} primaryColor={genero.primaryColor} secondaryColor={genero.secondaryColor}/>)}
    </div>
  );
}

export default App;
