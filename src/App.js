import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main"; // первая страница
import Gallery from "./components/Gallery/Gallery";
import { cardArray } from "./vendor/DB";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">{<Gallery cardArray={cardArray} />}</main>
      <Footer />
    </div>
  );
}

export default App;
