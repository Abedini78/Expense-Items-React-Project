import { useContext } from 'react'
import style from './BoxChar.module.css'
import { ChartBar } from './ChartBar'
import { ExpenseContext } from '../../store/ExpenseContext'


export const BoxChar=()=>{
    const CtxExpense=useContext(ExpenseContext)
    return(
        <div className={style.Box}>
            {CtxExpense.ListOfInfoChart.map(chart=>{
                return<ChartBar key={chart.id} Info={chart}></ChartBar> 
            })}
             
        </div>
    )
}