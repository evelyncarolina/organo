import './Card.css'

const Card = () => {
    return(
        <div className='card'>
            <div className='header'>
                <img src='https://github.com/evelyncarolina.png' alt='Imagem do seu personagem'/>
            </div>
            <div className='footer'>
                <h4>Nome do Personagem</h4>
                <h5>Nome do Game</h5>
            </div>
        </div>  
    )
}

export default Card