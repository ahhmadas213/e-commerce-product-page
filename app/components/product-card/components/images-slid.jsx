import { useState } from "react";
import { data } from "@/lib/data";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LightBox from "./light-box";

function ImageSlide() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];
  const [slideIndex, setSlideIndex] = useState(1);
  const [shwoLightBox, setShowLightBox] = useState(false);

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  return (
    <article className="items-center flex flex-col mt-5 ">
      <Image alt="product image" onClick={() => { setShowLightBox(true); }} src={mainImage} width='400' height="400" className="lg:rounded-2xl hidden lg:block cursor-pointer " />
      {shwoLightBox && <LightBox products={products} nextSlide={nextSlide}
        previousSlide={previousSlide} slideIndex={slideIndex}
        setShowLightBox={setShowLightBox} />}
      <div className={`lg:hidden`}>
        {products.map((item, indx) => (
          <div key={indx} className={slideIndex === indx + 1 ? "relative" : "hidden"}>
            <Image alt="product image" src={item.mainImage} onClick={() => { setShowLightBox(true); }} width='400' height="400" className="lg:rounded-2xl cursor-pointer " />
            <ul className="lg:hidden">
              <li><button onClick={previousSlide} className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"><FaChevronLeft /></button></li>
              <li><button onClick={nextSlide} className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"><FaChevronRight /></button></li>
            </ul>
          </div>
        ))}
      </div>
      <ul className="hidden lg:flex items-center justify-start gap-5 mt-5 flex-wrap p-3">
        {products
          .map((item, index) => (
            <li key={item.id} onClick={() => setValue(index)} className={`
              ${index === value && "opacity-70 border-2 border-orange-400 "}
              border-2 rounded-2xl overflow-hidden cursor-pointer
              `}>
              <Image alt="prduct thumbnail" className="w-20" src={item.thumbnail} width='60' height="60" />
            </li>
          ))}
      </ul>
    </article>
  );
}


export default ImageSlide; 