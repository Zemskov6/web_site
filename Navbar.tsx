import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: '8px 12px',
}));

const menuLinks = [
  { label: 'Самые сильные футбольные клубы мира', to: '/', active: '1' },
  { label: 'Список футбольных клубов мира', to: '/list', active: '2' },
  { label: 'Диаграммы', to: '/charts', active: '3' },
];

interface ComponentProps {
  active: string;
}

function Navbar({ active }: ComponentProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        mt: '28px',
				mb: '32px',
      }}
    >
      <Container maxWidth="xl">
        <StyledToolbar>
          <Typography variant="h6" sx={{ color: '#3e3e3e', fontWeight: 'bold' }}>
            Футбольные клубы мира
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {menuLinks.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.to}
                variant={active === item.active ? 'contained' : 'text'}
                color="info"
                size="medium"
                sx={{
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  ...(active === item.active && {
                    bgcolor: '#4a90e2',
                    '&:hover': {
                      bgcolor: '#3a7bc8',
                    },
                  }),
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 1,
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuList sx={{ width: '100%', minWidth: 300 }}>
                  {menuLinks.map((item) => (
                    <MenuItem
                      key={item.label}
                      component={Link}
                      to={item.to}
                      selected={active === item.active}
                      onClick={toggleDrawer(false)}
                      sx={{
                        '&:hover': {
                          color: '#4a90e2',
                          backgroundColor: 'rgba(74, 144, 226, 0.08)',
                        },
                        ...(active === item.active && {
                          color: '#4a90e2',
                          fontWeight: 'bold',
                          backgroundColor: 'rgba(74, 144, 226, 0.12)',
                        }),
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
