import { navigation } from "../constants/index.jsx";
import {useLocation} from "react-router-dom";

const Navbar = () => {
  const pathname = useLocation();

  return (
    <div className="py-[25px] flex items-center text-white place-content-between px-[166px] fixed top-0 w-[100%] z-50 bg-black/50">
      <a href="#home">
        <img src="src/assets/logo.png" alt="logo"/>
      </a>

      <div className="flex items-center gap-x-12">
        <div>
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className={`font-bold text-sm uppercase border-color-1 border-b-[0px] mx-3 transition-colors duration-200 
                              ${
                item.url === pathname.hash
                  ? "text-color-1 border-b-[2px]"
                  : "hover:text-color-1/80"
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="h-[50px] border-r-[1px] w-8 relative transition-colors duration-200 hover:text-color-1"
        >
          <img
            src="src/assets/cart.png"
            alt="cart"
            className="absolute r-[7px] top-[18px]"
          />
        </a>

        <div>
          <div>
            <a href="#" className="font-bold text-base flex gap-2">
              <img src="src/assets/phone.png" alt="phone"/>
              +999-888-76-54
            </a>
            <div>
              Свяжитесь с нами для <br/>
              бронирования
            </div>
          </div>
        </div>

        <a
          href="#"
          className="bg-color-1 uppercase px-[18px] py-[14px] font-bold duration-100 hover:bg-color-1/85"
        >
          заказ столика
        </a>
      </div>
    </div>
  );
};

export default Navbar;
