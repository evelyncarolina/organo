import './Gender.css'

const Gender = (props) =>{
    return(
        <section className='gender'>
            <h3>{props.name}</h3>
        </section>
    )
}

export default Gender