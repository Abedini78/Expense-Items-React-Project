



export const Card=(props)=>{
    return(
        <div className='row mt-3'>
           <div className=' mx-auto col-xs-12 col-sm-12 col-md-8'>
                 <div className='p-2 rounded' style={{backgroundColor:'rgb(22, 18, 18)'}}>
                          {props.children}
                 </div>
           </div>
        </div>
    )
}