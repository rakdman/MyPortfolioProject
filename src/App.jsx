import Intro from "./components/Intro/intro";
import Contact from "./components/Contact/contact";
import About from "./components/About/about";
import Project from "./components/Project/project";

import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Intro />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
