"use client";
import Header from './components/header';
import ProductCard from './components/product-card/product-card';
import { useState } from 'react';
import Cart from './components/card';
export default function Home() {
  const [itemInCart, setItemInCart] = useState(0);
  const [showCart, setShowCard] = useState(false);
  const [amount, setAmount] = useState(0);

  const updateAmount = (newAmount) => {
    setAmount(newAmount);
  };

  const updateItemInCart = (newItem) => {
    setItemInCart(newItem);
  };

  const updateShowCart = (show) => {
    setShowCard(show)
  }

  return (
    <main >
      <Header showCart={showCart} updateShowCart={updateShowCart} itemInCart={itemInCart}/>
      <ProductCard amount={amount} updateAmount={updateAmount} updateItemInCart={updateItemInCart} />
      {showCart && <Cart itemInCart={itemInCart} updateItemInCart={updateItemInCart} amount={amount} />}
    </main>
  );
}
