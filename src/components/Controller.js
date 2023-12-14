import React, { useContext } from 'react';
import { AppStateContext } from '../App';

const Controller = () => {

  const {state,dispatch} = useContext(AppStateContext);
  const {controllerBackground,appName} = state;

  return (
    <div style={{
        width:"300px",
        margin:"auto",
        backgroundColor:controllerBackground,
    }}
    className=" p-2 shadow-sm border d-flex justify-content-center align-items-center flex-column">
    <h2
    style ={{
      textAlign:"center",
    }}>
    {appName}</h2>
    <input className="form-control" style={{
      maxWidth:"250px"
    }}
    type="text" placeholder="Enter App Name" 
    // onChange={onChange}
    ></input>
    </div>
  )
}

export default Controller