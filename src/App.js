import AboutMe from "./component/AboutMe";
import Experience from "./component/Experience";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Technologies from "./component/Technologies";
import Project from "./component/Project";
import Contact from "./component/Contact";


function App() {
  return (
    <div className="bg-black overflow-hidden">
      

      <div className="container mx-auto px-8 border ">
        <Navbar/>
      </div>
      <div className="container mx-auto px-8">
        <Hero/>
      </div>
      <div className="container mx-auto px-8 ">
        <AboutMe/>
      </div>
      <div className="container mx-auto px-8 ">
        <Technologies/>
      </div>
      <div className="container mx-auto px-8">
        <Experience/>
      </div>
      <div className="container mx-auto px-8">
        <Project/>
      </div>
      <div className="container mx-auto px-8 ">
        <Contact/>
      </div>


      

    </div>
  );
}

export default App;
