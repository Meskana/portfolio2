
import './App.css';
import AboutMe from './Component/AboutMepage';
import Experience from './Component/Experiencepage';
import Footer from './Component/FooterPage';
import Main from './Component/Homepage';
import NavBar from './Component/NavigationBar';
import Service from './Component/servicePage';

function App() {
  return (
    <div>
    <NavBar  />
    <Main />
    <AboutMe />
    <Service />
    <Experience />
    <Footer />
    </div>
  );
}

export default App;
