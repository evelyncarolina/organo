import './FieldText.css'
const FieldText = (props) =>{
    return (
        <div className="text">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default FieldText