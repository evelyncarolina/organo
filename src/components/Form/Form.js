import { useState } from 'react';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import FieldText from '../FieldText';
import './Form.css'

const Form = () => {

    const genero = [
        'Aventura e Sobrevivência',
        'Ação',
        'RPG',
        'Battle Royale',
        'Horror e Terror',
        'Estratégia',
        'Puzzle',
        'Esporte',
        'Corrida'
    ]
 
    const [name, setName] = useState('')
    const [game, setGame] = useState('')
    const [image, setImage] = useState('')
    const [generos, setGeneros] = useState('')

    const save = (evento) => {
        evento.preventDefault()
        console.log("Form salvo", name, game, image)
    }

    return(
        <section className='form'>
            <form onSubmit={save}>
               <h2>Preencha os dados para criar o card do seu Personagem!</h2>
                <FieldText 
                    obligatory={true} 
                    label="Nome do personagem" 
                    placeholder="Digite o nome do personagem..."
                    valor={name}
                    toChange={valor => setName(valor)}/>

                <FieldText 
                    obligatory={true} 
                    label="Game" 
                    placeholder="Digite o nome do game..."
                    valor={game}
                    toChange={valor => setGame(valor)} />

                <FieldText 
                    obligatory={true}
                    label="Imagem do personagem" 
                    placeholder="URL da imagem"
                    valor={image}
                    toChange={valor => setImage(valor)} />

                <Dropdown 
                    obligatory={true} 
                    label="Gênero" 
                    itens={genero}
                    valor={generos}
                    toChange={valor => setGeneros(valor)} />
                    
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;