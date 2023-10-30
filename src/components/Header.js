import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link, useNavigate } from 'react-router-dom';

const buttonHoverStyle = {
  '&:hover': {
    color: 'red', // Change to the desired color when hovered
  },
};

const drawerWidth = 240;
const navItems = [
  {
    to: '/',
    name: 'होम',
  },
  {
    to: '/elections',
    name: 'चुनाव 2023',
  },
  {
    to: '/sports',
    name: 'स्पोर्ट्स',
  },
  {
    to: '/education',
    name: 'एजुकेशन',
  },
  {
    to: '/viralnews',
    name: 'वायरल न्यूज़',
  },
];

function Header(props) {
  const navigate = useNavigate()

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} onClick={() => {
                navigate(item?.to);
              }}>
                <Typography fontSize={20}>{item?.name}</Typography>
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "#008E97" }} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to={'/'} style={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textDecoration: 'none', color: '#fff' }}>
            <Typography
              variant="h6"
              component="div"
              style={{ fontSize: "30px" }}
            >
              राजस्थान-समाचार
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <Button key={index} sx={{ color: '#fff', fontSize: 25, fontWeight: "500", ...buttonHoverStyle, }} onClick={() => { navigate(item?.to) }}>
                {item?.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Header;
