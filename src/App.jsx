import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Container from "./components/Container.jsx";
import Card from "./components/Card.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-header h-[100vh] bg-no-repeat bg-cover top-0">
        <Container>
          <Header />
        </Container>
      </div>
      <Container className="mb-48">
        <div className="flex justify-between">
          <Card
            title1={"Магическая"}
            title2={"Атмосфера"}
            description={
              "В нашем заведении царит магическая атмосфера наполненная вкусными ароматами"
            }
          />
          <Card
            title1={"Лучшее качество"}
            title2={"Еды"}
            description={"Качество нашей Еды - отменное!"}
          />
          <Card
            title1={"Недорогая"}
            title2={"Еда"}
            description={
              "Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!"
            }
          />
        </div>

        <div id='about' className="flex my-52 h-[500px] justify-center gap-72">
          <div className="w-1/2 text-center flex-1">
            <div className="font-tinos text-6xl justify-center flex gap-4">
              Наша <div className="text-color-2">История</div>
            </div>
            <div className="text-base text-gray-600 mt-8 px-12">
              Как и у любого другого самобытного места, у нас есть своя, особая
              история. Идея ресторана пришла основателям неожиданно. Во время
              прогулки по лесу создатель нашего ресторана застрял в сотнях
              километров от ближайшего населенного пункта. Вдали от цивилизации
              и связи им пришлось навремя обустровать себе нехитрый быт,
              добывать и готовить себе еду.
            </div>
            <div className="flex justify-center gap-12 mt-16">
              <div>
                <div className="text-4xl text-color-3">93</div>
                <div className="text-lg pt-2">Напитки</div>
              </div>
              <div>
                <div className="text-4xl text-color-3">206</div>
                <div className="text-lg pt-2">Еда</div>
              </div>
              <div>
                <div className="text-4xl text-color-3">71</div>
                <div className="text-lg pt-2">Закуски</div>
              </div>
            </div>
          </div>
          <img
            src="src/assets/collage.png"
            alt=""
            className="h-[100%] object-cover flex-1"
          />
        </div>
      </Container>
      <div id='reservation'  className="bg-black_bg h-[50vh] bg-no-repeat bg-cover top-0">
        <Container>
          <div className='flex justify-around items-center h-[50vh]'>
            <div>
              <div className='font-tinos text-color-2 text-[52px]'>Отпразднуйте в одном из<br/> самых лучших ресторанов.</div>
              <div className='font-bold text-white text-[24px] mt-4'>Только в этом месяце бизнес-ланч от 250 ₽</div>
            </div>
            <a
              href="#"
              className="bg-color-1 text-white uppercase px-[18px] py-[14px] font-bold duration-100 hover:bg-color-1/85"
            >
              заказ столика
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default App;
