import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";
import items from "./Items";

function App() {
  const { products } = items;
  const [cartItems, setCartItems] = useState([]);
  const addItem = (product) => {
    const isExist = cartItems.find((x) => x.id === product.id);
    if (isExist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...isExist, qty: isExist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([ { ...product, qty: 1 }, ...cartItems]);
    }
  };

  const removeItem = (product) => {
    const isExist = cartItems.find((x) => x.id === product.id);
    if (isExist.qty < 2) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...isExist, qty: isExist.qty - 1 } : x
        )
      );
    }
  };

  const deleteAll = () => {
    if (cartItems.length >= 1) {
      setCartItems([]);
    }
  };

  return (
    <div className="App">
      <Header className="header-section" cartItems={cartItems} />
      <div className="main-sec">
        <Main products={products} addItem={addItem} />
        <Cart
          cartItems={cartItems}
          deleteAll={deleteAll}
          removeItem={removeItem}
          addItem={addItem}
        />
      </div>
    </div>
  );
}

export default App;
