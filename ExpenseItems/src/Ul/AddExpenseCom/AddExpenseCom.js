import { useContext, useEffect, useState } from 'react'

import { Button } from '../../Layout/Button'
import style from './AddExpenseCom.module.css'
import { ExpenseContext } from '../../store/ExpenseContext'


export const AddExpenseCom=()=>{
      const[Flage,setFlage]=useState(false)

      const[Title,setTitle]=useState('')
      const[Amount,setAmount]=useState('')
      const[date,setDate]=useState('')
      const[ValidateForm,setValidateForm]=useState(false)



      const CtxExpense=useContext(ExpenseContext)

      const TitleHandler=(e)=>{
        setTitle(e.target.value)
      }
      const AmountHandler=(e)=>{
        setAmount(e.target.value)
        }

      const DateHandler=(e)=>{
        setDate(e.target.value)
      }

      useEffect(()=>{
         if(date&&Title&&Amount) {
            
            setValidateForm(true)
         } else setValidateForm(false)
        },[date,Title,Amount])

      const FlageHandler=()=>{
          setFlage(true)
      }
  
    const ClearInputs=()=>{
        setTitle('')
        setAmount('')
        setDate('')
    }

      const SubmitHandler=()=>{
          if(ValidateForm){
           let obj={
              id:CtxExpense.ExpenseItem.length+1,
              title:Title,
              amount:Amount,
              date:new Date(date)
            }
            CtxExpense.onAddExpenseItem(obj)
            setValidateForm(false)
            setFlage(false)
            ClearInputs()
          }else CtxExpense.onflageModalHandler(true)
         
      }

      if(!Flage){
          return(
              <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-7 mt-1 mx-auto'>
                              <div className={`d-flex justify-content-center rounded p-2 ${style.BoxAddExpense}`}>
                                             <Button ValidateForm={true}  onHandler={FlageHandler} classes={' p-2 col-xs-12 col-sm-12 col-md-6 rounded'}></Button>
                              </div>
                    </div>
              </div>
          )
      }


      return(
        <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-7 mt-1 mx-auto'>
                  <div className={`rounded p-2 ${style.BoxAddExpense}`}>
                        <from className='row'>
                             <div className='col-xs-12 col-sm-12 col-md-6'>
                                  <input value={Title} onChange={TitleHandler} type='text' placeholder='Title' className={`w-100 p-2 mt-1 rounded ${style.inp}`}></input>
                             </div>
                             <div className='col-xs-12 col-sm-12 col-md-6'>
                                  <input value={Amount} onChange={AmountHandler} type='number' placeholder='Amount' className={`w-100 mt-1 p-2 rounded ${style.inp}`}></input>
                             </div>

                             <div className='col-xs-12 col-sm-12 col-md-6'>
                                  <input value={date} onChange={DateHandler} type='date' placeholder='Date' className={`w-100 mt-1 p-2 rounded ${style.inp}`}></input>
                             </div>

                             <div className='col-xs-12 col-sm-12 col-md-6'>
                             <Button ValidateForm={ValidateForm}  onHandler={SubmitHandler} classes={'w-100 mt-1 p-2 rounded'}></Button>
                             </div>
                            
                        </from>
                  </div>
        </div>
         </div>
      )
}