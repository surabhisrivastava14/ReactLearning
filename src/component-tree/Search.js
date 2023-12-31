import React, { useContext } from 'react'
import Card from '../components/Card'
import { AppStateContext } from '../App'

const Search = () => {

  const {state} = useContext(AppStateContext);
  const {products} =state;
  
  return (
    <div  className="d-flex justify-content-center align-items-center flex-column">
    <h3>Search</h3>
    {products.map((product)=>{
      return  <Card {...product} actionEvent={()=>alert(product.actionName)}/>;
    })}
   
    </div>
  )
}

export default Search