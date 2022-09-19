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

    return(
        <section className='form'>
            <form>
               <h2>Preencha os dados para criar o card do seu Personagem!</h2>
                <FieldText label="Nome do personagem" placeholder="Digite o nome do personagem..."/>
                <FieldText label="Game" placeholder="Digite o nome do game..."/>
                <FieldText label="Imagem do personagem" placeholder="URL da imagem"/>
                <Dropdown label="Gênero" itens={genero}/>
            </form>
        </section>
    )
}

export default Form;