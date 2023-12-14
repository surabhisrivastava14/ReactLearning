import React, { useEffect, useRef } from 'react';
import {products} from '../Utils/Utility';

const useUserFocus = () => {

    useEffect(()=>{
       
      });
      useEffect(()=>{
       
        userRef.current.focus();
      },[]);
    
      let count= 0;
      count++;
     
    
      const counter = useRef(0);
      counter.current++;
     
      const userRef = useRef();
    

  return {userRef};
};

export default useUserFocus;