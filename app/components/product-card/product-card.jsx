import styles from '@/styles/page.module.css';
import ImageSlide from './components/images-slid';
import ProductInfo from './components/product-info';
import LightBox from './components/light-box';

function ProductCard({amount, updateAmount, updateItemInCart}) {
  return (
    <section className=" max-w-7xl mx-auto grid grid-cols-1
      lg:grid-cols-2 gap-19 lg:mt-10 pb-10 lg:place-items-center" >
      <ImageSlide />
      <ProductInfo amount={amount} updateAmount={updateAmount} updateItemInCart={updateItemInCart} />
    </section>
  );
}

export default ProductCard;