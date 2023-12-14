import {useState} from 'react';


const useUserInfo = () => {

    const [userInfo,setUserInfo] = useState({
        name:"",
        password:"",
      });
    
      const OnUserChange =(e)=>{
        setUserInfo((state)=>{
          return {...state,name:e.target.value};
        });
      };
    
    const OnPasswordChange =(e)=>{
      setUserInfo((state)=>{
        return {...state,password:e.target.value};
      });
      };

  return {OnUserChange,OnPasswordChange,userInfo};
}

export default useUserInfo;