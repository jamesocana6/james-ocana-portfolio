import "./public/style.css"
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import Nav from './Components/Nav';
import ProjectPage from './Pages/ProjectPage';
import {Container} from "@mui/material";

function App() {
  return (
    <Container>
      <Nav/>
      <HomePage/>
      <AboutPage/>
      <ProjectPage/>
      <ContactPage/>
    </Container>
  );
}

export default App;
