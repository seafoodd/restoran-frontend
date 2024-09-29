const Header = () => {
  return (
    <>
      <div className="relative ml-[150px]">
        <div className="font-tinos text-color-2 text-[50px] absolute left-0 text-center mt-[400px]">
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
