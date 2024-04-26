import { useContext } from 'react'
import style from './BoxFilter.module.css'
import { ExpenseContext } from '../../store/ExpenseContext'
import { BoxChar } from './BoxChar'


export const BoxFilter=()=>{
    const CtxExpense=useContext(ExpenseContext)
    const GetYear=(e)=>{
       CtxExpense.onGetSelectedYear(Number(e.target.value))
    }
    return(
        <>
        <div className='w-90 p-2 d-flex justify-content-between'>
                 <h5 className='text-white'>selecter by year</h5>
                 <select onChange={GetYear} className={`${style.select} rounded`}>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                 </select>
        </div>
   
         <BoxChar></BoxChar>

        </>
    )
}