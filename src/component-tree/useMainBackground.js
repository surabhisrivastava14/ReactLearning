import useGetAppContext from '../shared-hooks/useGetAppContext';
import { setAppBackground } from '../actions/actions';
import { getRandomColor } from '../Utils/Utility';

const useMainBackground = () => {

    const {state,dispatch} = useGetAppContext();
    // const {state,dispatch} = useContext(AppStateContext);
  
    const onChangeBackground = () =>{
      const randomColor = getRandomColor();
      dispatch(setAppBackground(randomColor));
    };

  return {onChangeBackground,dispatch};
}

export default useMainBackground;