import "./App.css";
//import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import AboutMe from "./AboutMepage";
import Experience from "./Component/Experiencepage";
import Footer from "./Component/FooterPage";
import Main from "./Homepage";
import NavBar from "./Component/NavigationBar";
import Service from "./Component/servicePage";
function App() {
  return (
    <main>
       
        <NavBar /> 
        <Main />
        <AboutMe />
        <Service />
      <Experience />
      <Footer />
     
    </main>
  );
}

export default App;
