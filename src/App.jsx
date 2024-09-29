import { navigation } from "./constants/index.jsx";
import { useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <>
      <div className="bg-header h-[100vh] bg-no-repeat bg-cover">
        <div className="mx-[166px]">
          <Header />
        </div>
      </div>
      <div className="mx-[166px]">
        <div>
          <img src="src/assets/card.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default App;
