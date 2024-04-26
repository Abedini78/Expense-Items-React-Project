
import { useContext } from 'react';
import './App.css';
import { Container } from './Layout/Container';

import {AddExpenseCom} from './Ul/AddExpenseCom/AddExpenseCom';
import { Card } from './Ul/AddExpenseCom/Card/Card';
import { Modal } from './Ul/Modal/Modal';
import { ExpenseContext } from './store/ExpenseContext';
import { ExpenseItem } from './Ul/ExpenseItem/ExpenseItem';
import { BoxFilter } from './Ul/BoxFilter/BoxFilter';


function App() {
  const CtxExpense=useContext(ExpenseContext)
 
  return (
    <>
    {CtxExpense.flageModal && <Modal></Modal>}
   
   <Container>
   <AddExpenseCom></AddExpenseCom>     
   
   <Card>
    <BoxFilter></BoxFilter>
   {CtxExpense.FilteredExpenseItem.length===0?<h3 style={{color:'white'}}>ListOfItems Is Empty</h3>:''} 
   {CtxExpense.FilteredExpenseItem.map(item=>{
      return <ExpenseItem key={item.id} info={item}></ExpenseItem>
    })}
    
    </Card>

   </Container>
   </>
  );
}

export default App;
