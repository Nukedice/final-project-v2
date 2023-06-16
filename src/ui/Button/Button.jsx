import css from './Button.module.css'
const Button = ({text, action}) => {
    return ( 
        <button className={css.button}><a href={action}>{text}</a></button>
     );
}
 
export default Button;