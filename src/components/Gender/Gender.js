import './Gender.css'

const Gender = (props) =>{
    return(
        <section className='gender' style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}} >{props.name}</h3>
        </section>
    )
}

export default Gender