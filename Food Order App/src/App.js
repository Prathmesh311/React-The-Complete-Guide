import { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler(){
    setCartIsShown(true);
  }

  function closeCartHandler(){
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onCloseCart={closeCartHandler}/>}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
