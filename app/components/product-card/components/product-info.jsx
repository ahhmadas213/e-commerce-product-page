import minus from '@/app/images/icon-minus.svg';
import plus from '@/app/images/icon-plus.svg';
import { useState } from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from '../../card';

function ProductInfo({amount, updateAmount, updateItemInCart}) {

  function handelPlus(e) {
    updateAmount(amount + 1);
    if (amount >= 10) updateAmount(10);
  }

  function hadelMinus() {
    updateAmount(amount - 1);
    if (amount <= 0) updateAmount(0);
  }

  const items = amount

  return (
    <article className='px-8'>
      <h2 className='bg-slate-100 py-1 px-2 text-orange-400 tracking-wide text-sm uppercase inline-block rounded shadow mb-5 mt-5 '>
        Sneaker Company</h2>
      <h1 className='text-3xl font-bold text-slate-900 mb-5 lg:text-4xl'>
        Fall Limited Edition Sneakers</h1>
      <p className='text-slate-600 mb-10 leading-realx'>
        These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      <div className='flex items-center flex-wrap justify-between 
        lg:flex-col lg:items-start lg:gap-2'>
        <ul className='flex items-center gap-5'>
          <l1 className="text-slate-900 font-bold text-2xl">$120.00</l1>
          <l1 className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm inline-block rounded shadow">
            50%</l1>
        </ul>
        <p className='text-slate-600 text-sm'><s>$250.00</s></p>
      </div>

      <div className='mt-10 lg:flex items-center justify-between gap-2'>
        <ul className='flex items-center justify-between 
          bg-slate-100 rounded shadow py-2 px-4 lg:flex-1 '>
          <li className='cursor-pointer' onClick={hadelMinus}><Image alt='minus icon' {...minus} /></li>
          <li>{amount}</li>
          <li className='cursor-pointer' onClick={handelPlus}><Image alt='plus icon'{...plus} /></li>
        </ul>
      
        <div className='lg:flex-1'>
          <button onClick={() => updateItemInCart(amount)} className='flex items-center justify-center 
          gap-4 py-2 px-4 w-full text-center bg-orange-500
            text-white border rounded-lg text-bold shadow mt-6 
            lg:m-0 hover:bg-orange-600 transition-all duration-200'>
            <FaShoppingCart />Add to cart</button>
        </div>

      </div>
    </article>
  );
}
export default ProductInfo;