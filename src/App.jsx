import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Students from "./Components/Students/Students";
import TopBanner from "./Components/TopBanner/TopBanner";

function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <NavBar></NavBar>
      <TopBanner></TopBanner>
      <Students></Students>
      <Footer></Footer>
    </div>
  );
}

export default App;
