import subImage from "@/public/images/image-product-1-thumbnail.jpg";
import Image from "next/image";
function Cart({ itemInCart, updateItemInCart, amount }) {
  const text = "Fall Limted Edition Snakers"
  function CartItem({ itemInCart, updateItemInCart, amount }) {
    return (
      <>
        <div className="flex items-center justify-start gap-4 mt-8 ">
          <Image alt="product image" src={subImage} className="w-10 rounded" />
          <div>
            <p className="text-slate-600 text-md">{`${text.substring(0,20)}...`}</p>
            <p className="text-slate-600 text-md">$125 x {itemInCart} <span className="font-bold">{`$${itemInCart * 125}`}</span></p>
          </div>
        </div>
        <button onClick={() => updateItemInCart(0)} className=" py-2 px-4 w-full text-center bg-orange-500
            text-white border rounded-lg text-bold shadow mt-6
            hover:bg-orange-600 transition-all duration-200">Checkout</button>
      </>

    );
  }

  return (
    <>
      <article className="bg-white rounded-2xl
      shadow-2xl absolute top-28 right-1/2 translate-x-1/2  
      lg:translate-x-0 lg:right-20 mt-10 lg:mt-3 w-11/12 md:w-96 ">
        <h2 className="border-b border-slate-600 text-lg font-bold">cart</h2>
        {itemInCart
          ? <CartItem itemInCart={itemInCart} updateItemInCart={updateItemInCart} />
          : <div className="w-100 flex items-center justify-center h-20">
            <p className="text-slate-600 ">Your cart is empty</p>
          </div>}

      </article>
    </>
  );
}


export default Cart;