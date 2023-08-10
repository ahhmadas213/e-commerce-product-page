import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
function LightBox({ products, nextSlide, previousSlide, slideIndex, setShowLightBox}) {
  return (
    <article className="fixed bg-black top-0 left-0 right-0 bottom-0 z-10 bg-opacity-75 
    items-center flex justify-center">
      <div>
        {products.map((item, indxe) => (
          <div key={indxe} className={slideIndex === indxe + 1 ? "relative" : "hidden"}>
            <IoMdClose onClick={() => {setShowLightBox(false)}} className="text-3xl text-white right-0 
            absolute -top-10 hover:text-orange-400 cursor-pointer " />
            <Image alt="product image" src={item.mainImage} width='300' height="300" className="lg:rounded-2xl" />
            <ul className="">
              <li><button onClick={previousSlide} className="bg-white rounded-full p-5 shadow absolute -left-6 top-1/2 -translate-y-1/2"><FaChevronLeft /></button></li>
              <li><button onClick={nextSlide} className="bg-white rounded-full p-5 shadow absolute -right-6 top-1/2 -translate-y-1/2"><FaChevronRight /></button></li>
            </ul>
          </div>
        ))}
      </div>

    </article>
  );
}


export default LightBox;