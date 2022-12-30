import NavBar from './components/NavBar';
import Header from './components/Header';
import Timer from './components/Timer';
import About from './components/About';
import TimeLine from './components/TimeLine';
import Mentors from './components/Mentors';
import Workshops from './components/Workshops';
import Sponsors from './components/Sponsors';
import { Container } from '@mantine/core';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Timer />
      <Container>
        <About />
        <TimeLine />
        <Mentors />
        <Workshops />
        <Sponsors />
      </Container>
    </>
  );
}


export default App;
