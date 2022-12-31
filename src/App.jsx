import NavBar from './components/NavBar';
import Header from './components/Header';
import Timer from './components/Timer';
import About from './components/About';
import TimeLine from './components/TimeLine';
import Mentors from './components/Mentors';
import Workshops from './components/Workshops';
import Sponsors from './components/Sponsors';
import { Box, Container } from '@mantine/core';

function App() {
  return (
    <>
      <NavBar />
      <WhiteSection>
        <Header />
        <Timer />
      </WhiteSection>
      <About />
      <WhiteSection>
        <TimeLine />
        <Mentors />
        <Workshops />
        <Sponsors />
      </WhiteSection>
    </>
  );
}


export default App;





function WhiteSection({ children }) {
  return (
    <Box sx={{ backgroundColor: '#fff' }}>
      {children}
    </Box>
  );
}