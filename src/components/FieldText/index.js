import './FieldText.css'
const FieldText = (props) =>{
    return (
        <div className="text">
            <label>{props.label}</label>
            <input required={props.obligatory} placeholder={props.placeholder}/>
        </div>
    )
}

export default FieldText