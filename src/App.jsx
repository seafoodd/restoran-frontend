import { navigation } from "./constants/index.jsx";
import { useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Container from "./components/Container.jsx";

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-header h-[100vh] bg-no-repeat bg-cover top-0">
        <Container>
          <Header />
        </Container>
      </div>
      <Container className="h-[1000px]">
        <div>
          <img src="src/assets/card.png" alt="" />
        </div>
      </Container>
    </>
  );
};

export default App;
