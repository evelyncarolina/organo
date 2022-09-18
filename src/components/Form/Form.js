import FieldText from '../FieldText';
import './Form.css'

const Form = () => {
    return(
        <section className='form'>
            <form>
               <h2>Preencha os dados para criar o card do seu Personagem!</h2>
                <FieldText label="Nome" placeholder="Seu nome"/>
                <FieldText label="Cargo" placeholder="Personagem favorito"/>
                <FieldText label="Imagem" placeholder="URL da imagem"/>
            </form>
        </section>
    )
}

export default Form;