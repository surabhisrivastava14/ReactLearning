import useGetAppContext from '../shared-hooks/useGetAppContext';
import { setAppBackground,addRandomProduct } from '../actions/actions';
import { getRandomColor,products } from '../Utils/Utility';

const useUserEvents = () => {

    const {state,dispatch} = useGetAppContext();

    const onChangeBackground = () => {
        const randomColor = getRandomColor();
        dispatch(setAppBackground(randomColor));
      };
    
      const onAddRandomProduct = () => {
        const randomIndex = Math.ceil(Math.random()*3);
        const randomProduct = products[randomIndex];
        dispatch(addRandomProduct(randomProduct));
      };
    
      const onClick = () => {
        alert("Go Details button clicked");
      };

  return {
    onChangeBackground,
    onAddRandomProduct,
    onClick
  }
}

export default useUserEvents;