import './App.css';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import Nav from './Components/Nav';
import ProjectPage from './Pages/ProjectPage';

function App() {
  return (
    <div className="App">
      <Nav/>
      <HomePage/>
      <AboutPage/>
      <ProjectPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
