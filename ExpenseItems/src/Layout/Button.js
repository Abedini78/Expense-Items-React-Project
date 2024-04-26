import style from './Button.module.css'


export const Button=(props)=>{
    
    return(
        <button  onClick={props.onHandler}  className={`${props.ValidateForm ? style.valid : style.notvalid} ${props.classes} ${style.btn}`}>Add New Expense</button>
    )
}