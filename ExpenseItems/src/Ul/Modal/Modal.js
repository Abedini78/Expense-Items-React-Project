
import ReactDOM from 'react-dom';
import style from './Modal.module.css';
import { useContext } from 'react';
import { ExpenseContext } from '../../store/ExpenseContext';


export const Modal=()=>{
    const CtxExpense=useContext(ExpenseContext)
   
    const CloseModal=()=>{
        CtxExpense.onflageModalHandler(false)
    }
    return(
        ReactDOM.createPortal(
            <div className={style.Modal}>
               <div className='m-1 p-1 col-xs-12 col-sm-12 col-md-6 col-lg-5'>
                     <h4 className='m-1' onClick={CloseModal}>X</h4>
                     <h3>you Must Be Fill Whole Inputs ...</h3>
                     
               </div>
            </div>
        ,document.getElementById('Modal'))
    ) 
}