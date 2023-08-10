import { useState } from "react";
import Image from "next/image";
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import { FaShoppingCart } from 'react-icons/fa';
import menueIcon from "../images/icon-menu.svg";
import { IoMdClose } from "react-icons/io";
import Cart from "./card";

function Header({ updateShowCart, showCart, itemInCart }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between p-8 border-b border-slate-400
      max-w-7xl mx-auto ">
        <div className="flex items-center justify-start gap-4">
          <ul className="flex items-center justify-start gap-4">
            <li onClick={() => (setIsOpen(true))}
              className="lg:hidden cursor-pointer">
              <Image src={menueIcon} className="w-6 " alt="menu" />
            </li>
            <li><Image src={logo} alt="logo" className="" /></li>
          </ul>

          <nav className={isOpen && "open"}>
            <IoMdClose onClick={() => { setIsOpen(false); }} className="text-3xl hover:text-orange-400 cursor-pointer mb-4 lg:hidden" />
            <ul className=" items-center justify-start gap-4">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div>
          <ul className="flex items-center justify-start gap-4">
            <li onClick={() => updateShowCart(!showCart)} className="relative">
              {itemInCart > 0
                ? <span className="bg-orange-400 w-4 h-4 text-center rounded-full 
              text-white -top-5 left-8 absolute  flex items-center justify-center">
                  {itemInCart}
                </span>
                : null}
              <button>
                <FaShoppingCart className="w-14 hover:text-orange-400" />
              </button>
            </li>

            <li><Image src={avatar} alt="avatar" className="w-12 cursor-pointer hover:border border-orange-400 rounded-full" /></li>
          </ul>
        </div>
      </header>
    </>

  );
}

export default Header;