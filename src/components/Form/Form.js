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

    const save = (evento) => {
        evento.preventDefault()
        console.log("Form salvo")
    }

    return(
        <section className='form'>
            <form onSubmit={save}>
               <h2>Preencha os dados para criar o card do seu Personagem!</h2>
                <FieldText obligatory={true} label="Nome do personagem" placeholder="Digite o nome do personagem..."/>
                <FieldText obligatory={true} label="Game" placeholder="Digite o nome do game..."/>
                <FieldText obligatory={true} label="Imagem do personagem" placeholder="URL da imagem"/>
                <Dropdown obligatory={true} label="Gênero" itens={genero}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;