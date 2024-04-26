import { useContext } from 'react'
import style from './ChartBar.module.css'
import { ExpenseContext } from '../../store/ExpenseContext'


export const ChartBar=(props)=>{
    const CtxExpense=useContext(ExpenseContext)
    const Heigth=Math.round((props.Info.Numbers/CtxExpense.FilteredExpenseItem.length)*100)
    return(
        <div className={style.BoxChartBar}>
                  <div>
                    <div style={{height:`${Heigth}px`}}></div>
                  </div>
                 <p>{props.Info.name}</p>
        </div>
    )
}