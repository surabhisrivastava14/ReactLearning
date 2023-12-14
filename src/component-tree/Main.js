import React, { useEffect,useRef } from 'react';
import useUserInfo from './useUserInfo';
import useMainBackground from './useMainBackground';
import useUserFocus from './useUserFocus';
import { addRandomProduct } from '../actions/actions';
import { products } from '../Utils/Utility';
import usePassFirstMount from '../shared-hooks/usePassFirstMount';

const Main = () => {

  const {onChangeBackground,dispatch} = useMainBackground();
  const {OnUserChange,OnPasswordChange,userInfo} = useUserInfo();
  const {userRef} = useUserFocus();
  
  const AddProduct = () => {
    const randomIndex = Math.ceil(Math.random()*3);
    const randomProduct = products[randomIndex];
    dispatch(addRandomProduct(randomProduct));
  };

  usePassFirstMount(AddProduct,[userInfo.name]);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
    <h3>Main</h3>
    <button className="mt-2 btn btn-primary" onClick={onChangeBackground}>
        Set Random Background Color
      </button>
      <label className='mt-2'>Username</label>
      <input ref = {userRef} onChange={OnUserChange} value={userInfo.name} type='text' className='mt-1 form-control' style={{width:"250px"}}/>
      <label className='mt-2'>Password</label>
      <input onChange={OnPasswordChange} value={userInfo.password} type='password' className='mt-1 form-control' style={{width:"250px"}}/>
    </div>
  )
}

export default Main