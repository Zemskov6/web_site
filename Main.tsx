import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import ClubsGrid from '../components/ClubsGrid';
import Footer from '../components/Footer';

function Main() {
  return (
    <>
      <CssBaseline />
      <Navbar active="1" />
      <MainContent />
      <ClubsGrid />
      <Footer />
    </>
  );
}

export default Main;
