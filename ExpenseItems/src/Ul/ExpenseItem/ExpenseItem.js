
import { useContext } from 'react'
import style from './ExpenseItem.module.css'
import { ExpenseContext } from '../../store/ExpenseContext'



export const ExpenseItem=(props)=>{
     const month =props.info.date.toLocaleDateString('en-US', { month: 'long'})
     const day =props.info.date.toLocaleDateString('en-US', {day: '2-digit'})
     const year =props.info.date.toLocaleDateString('en-US', {year: 'numeric'})
      
     const CtxExpense=useContext(ExpenseContext)

     const GetDeletedId=(e)=>{
             CtxExpense.onDeleteItem(Number(e.target.id))
     }

    return(
        <div className={`mt-1 p-1 rounded  mx-auto ${style.Box}`}>
                 <div className={`rounded ${style.BoxDate}`}>
                      <h5>{month}</h5>
                      <h6>{year}</h6>
                      <h4>{day}</h4>
                 </div>

                 <h2>{props.info.title}</h2>

                 <div className={style.BoxPrice}>
                           $ {props.info.amount}
                 </div>

                 <button onClick={GetDeletedId} id={props.info.id} className={style.btn}>Delete</button>

        </div>
    )
}