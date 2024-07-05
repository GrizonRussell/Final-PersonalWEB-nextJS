import Layout from './components/layout';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Skills from './components/skills';
import Education from './components/education';
import Contact from './components/contact';

export default function App() {
  return (
    <Layout>
      <Home />
      <AboutMe />
      <Skills />
      <Education />
      <Contact />
    </Layout>
  );
}
