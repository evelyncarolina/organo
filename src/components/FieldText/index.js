import './FieldText.css'
const FieldText = (props) =>{

    //const [valor, setValor] = useState('')

    const toTyping = (evento) =>{
        props.toChange(evento.target.value)
    }

    return (
        <div className="text">
            <label>{props.label}</label>
            <input value={props.valor} onChange={toTyping} required={props.obligatory} placeholder={props.placeholder}/>
        </div>
    )
}

export default FieldText