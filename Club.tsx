import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams, Link } from 'react-router-dom';
import clubs from '../data';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Club() {
  const { id } = useParams();
  const clubId = id !== undefined ? parseInt(id, 10) : 1;
  const club = clubs.find((item) => item.id === clubId) ?? clubs[0];

  return (
    <div>
      <Navbar active="1" />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link to="/" style={{ color: '#4a90e2', textDecoration: 'none' }}>
            Главная
          </Link>
          <Typography color="text.primary">{club.title}</Typography>
        </Breadcrumbs>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          {club.title}
        </Typography>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Box
            component="img"
            src={club.img}
            alt={club.title}
            sx={{ maxWidth: '100%', maxHeight: 520, objectFit: 'cover' }}
          />
        </Box>
        <Grid container spacing={2}>
          {club.description.map((paragraph, i) => (
            <Grid key={i} size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                {paragraph}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Club;
