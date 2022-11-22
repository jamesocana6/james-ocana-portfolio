import "./public/style.css"
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import Border from './Components/Border';
import Nav from './Components/Nav';

function App() {
  return (
    <>
    <div className="all">
      <Nav/>
      <HomePage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </div>
      <Border />
    </>
  );
}

export default App;
