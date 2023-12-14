import React, { useContext }from 'react';
import App, { AppStateContext } from '../App';

const useGetAppContext = () => {

    const context = useContext(AppStateContext);

  return context;
}

export default useGetAppContext