import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const numCartItems = useSelector(state => state.cart.totalQuantity);

  const cartToggleHandler = () => {
    console.log('Hi');
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numCartItems}</span>
    </button>
  );
};

export default CartButton;
