import Card from '../Card/Card'
import './Gender.css'

const Gender = (props) =>{
    return(
        <section className='gender' style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}} >{props.name}</h3>
            
            <div className='card'>
            {props.personagens.map(personagem =><Card 
            name={personagem.name} 
            game={personagem.game}
            image={personagem.image}
            />)}  
            </div>
        </section>
    )
}

export default Gender