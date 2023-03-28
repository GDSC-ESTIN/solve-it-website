import NavBar from './components/NavBar';
import Header from './components/Header';
import Timer from './components/Timer';
import About from './components/About';
import TimeLine from './components/TimeLine';
import Mentors from './components/Mentors';
import Workshops from './components/Workshops';
import Sponsors from './components/Sponsors';
import { Box, Container, Modal, Text } from '@mantine/core';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import RegistrationDrawer from './components/RegistrationDrawer';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState("")

  return (
    <>
      <>
        <NavBar setOpend={setDrawerOpened} />
        <WhiteSection>
          <Header />
          <Timer setOpend={setDrawerOpened} />
        </WhiteSection>
        <About />
        <WhiteSection>
          <TimeLine />
          {/* <Mentors />
          <Workshops /> */}
          <Sponsors />
        </WhiteSection>
        <Contactus setModalContent={setModalContent} setModalOpened={setModalOpened} />
        <Footer />
      </>

      <RegistrationDrawer opened={drawerOpened} setOpened={setDrawerOpened} setModalContent={setModalContent} setModalOpened={setModalOpened} />
      <Modal
        centered
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        overlayColor="#e0e0e0"
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <Text fz={"xl"} align="center">
          {modalContent}
        </Text>
      </Modal>
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