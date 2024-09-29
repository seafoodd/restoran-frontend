import { navigation } from "../constants/index.jsx";
import { useLocation } from "react-router-dom";

const Header = () => {
  const pathname = useLocation();

  return (
    <>
      <div className="py-[50px] flex items-center text-white place-content-between">
        <a href="#home">
          <img src="src/assets/logo.png" alt="logo" />
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
                <img src="src/assets/phone.png" alt="phone" />
                +999-888-76-54
              </a>
              <div>
                Свяжитесь с нами для <br />
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

      <div className="relative ml-[150px] mt-[200px]">
        <div className="font-tinos text-color-2 text-[50px] absolute left-0 text-center">
          <div></div>Добро пожаловать в
          <div className="text text-[80px] font-tinos">Наш ресторан</div>
          <div
            className="uppercase text-[18px] font-opensans text-white after:absolute
                         after:content-[''] after:w-[61px] after:h-[2px] after:bg-white after:top-[208px]
                         after:left-[340px] before:absolute before:content-[''] before:w-[61px]
                         before:h-[2px] before:bg-white before:top-[208px] before:left-[80px]"
          >
            дом лучшей еды
          </div>
          <a
            href="#"
            className="font-opensans text-[14px] font-bold uppercase bg-color-1 text-white duration-100 hover:bg-color-1/85 px-[28px] py-[14px]"
          >
            view menu
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
