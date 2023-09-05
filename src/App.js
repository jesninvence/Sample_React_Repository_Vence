import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Image1 from "./images/dranger.gif";
import Image2 from "./images/invoker.gif";
import Image3 from "./images/phantom.gif";
import Image4 from "./images/lifestealer1.gif";
import Image5 from "./images/pudge.gif";
import Image6 from "./images/bloodseeker.gif";
import GridItems from "./components/GridItems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Banner></Banner>
    <div className="bg-black p-5">
      <div className="container">
        <h1 className="text-white">Top 5 Dota 2 Heroes of the week:</h1>
        <div className="row g-5 justify-content-center">
          <GridItems name="Drow Ranger" imageFile={Image1} desc="Lorem Ipsum"></GridItems>
          <GridItems name="Invoker" imageFile={Image2} desc="Lorem Ismet"></GridItems>
          <GridItems name="Phantom Assassin" imageFile={Image3} desc="Lorem Ipsum Ismum"></GridItems>
          <GridItems name="Lifestealer" imageFile={Image4} desc="Lorem Ipsum Isnun"></GridItems>
          <GridItems name="Pudge" imageFile={Image5} desc="Lorem Ipsum Iswam"></GridItems>
          <GridItems name="Bloodseeker" imageFile={Image6} desc="Lorem Ipsum Pisum"></GridItems>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
