import React, { useState } from "react";


const InfoMonth=[
    {id:1,name:'Jan',Numbers:0},
    {id:2,name:'Feb',Numbers:0},
    {id:3,name:'Mar',Numbers:0},
    {id:4,name:'Apr',Numbers:0},
    {id:5,name:'May',Numbers:0},
    {id:6,name:'Jun',Numbers:0},
    {id:7,name:'Jul',Numbers:0},
    {id:8,name:'Aug',Numbers:0},
    {id:9,name:'Sep',Numbers:0},
    {id:10,name:'Oct',Numbers:0},
    {id:11,name:'Nov',Numbers:0},
    {id:12,name:'Dec',Numbers:0},
]


export const ExpenseContext=React.createContext(
    {
        flageModal:false,
        ExpenseItem:[],
        SelectedYear:2023,
        FilteredExpenseItem:[],
        ListOfInfoChart:InfoMonth,
        onflageModalHandler:(flage)=>{},
        onAddExpenseItem:(item)=>{},
        onGetSelectedYear:(year)=>{},
        onDeleteItem:(id)=>{}

    }
)







 


export const ExpenseContextProvider=(props)=>{
    const[flageModal,setflageModal]=useState(false)
    const[ExpenseItem,setExpenseItem]=useState([])
    const[SelectedYear,setSelectedYear]=useState(2023)
    const[FilteredExpenseItem,setFilteredExpenseItem]=useState([])
    const[ListOfInfoChart,setListOfInfoChart]=useState([...InfoMonth])

    const flageModalHandler=(flage)=>{
           setflageModal(flage)
    }

    const AddExpenseItem=(item)=>{
          setExpenseItem([...ExpenseItem,item])
          onFilteredExpenseItem(SelectedYear,[...ExpenseItem,item])
    }

    const GetSelectedYear=(year)=>{
           setSelectedYear(year)
           onFilteredExpenseItem(year,ExpenseItem)
    }

    const onFilteredExpenseItem=(year=2023,ExpenseItem)=>{
        
            let list=ExpenseItem.filter(item=>{
                if(item.date.getFullYear()===year) return item
            })  
            setFilteredExpenseItem([...list]) 
            UpdateChartBar([...list])
    }
   
    const DeleteItem=(id)=>{
    
        let list=ExpenseItem.filter(item=>{
            if(item.id!==id) return item
        })  

        setExpenseItem([...list])
        onFilteredExpenseItem(SelectedYear,[...list])
    }
  
    const ClearInfoMonth=()=>{
        InfoMonth.forEach(month=>{
            month.Numbers=0
        })
     
    }
    const UpdateChartBar=(FilteredExpenseItem)=>{
        
        ClearInfoMonth()
        FilteredExpenseItem.forEach(item=>{
            InfoMonth.forEach(month=>{
                if(item.date.getMonth()===month.id) InfoMonth[month.id].Numbers=InfoMonth[month.id].Numbers+1
               })
        })
        console.log(InfoMonth)
        setListOfInfoChart([...InfoMonth])
    }


    const ObjHandlers={
         flageModal:flageModal,
         ExpenseItem:ExpenseItem,
         SelectedYear:SelectedYear,
         FilteredExpenseItem:FilteredExpenseItem,
         ListOfInfoChart:ListOfInfoChart,
         onflageModalHandler:flageModalHandler,
         onAddExpenseItem:AddExpenseItem,
         onGetSelectedYear:GetSelectedYear,
         onDeleteItem:DeleteItem
    }
    return(
        <ExpenseContext.Provider value={ObjHandlers}>
            {props.children}
        </ExpenseContext.Provider>
    )
}