import './Button.css'

const Button = (props) =>{
    return (
        //chindrem herda de seus filhos
        <button className='button'>{props.children}</button>
    )

}
export default Button 