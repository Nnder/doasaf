import { AppBar, Box, Button, Container, IconButton, Menu, Toolbar, Tooltip, Typography } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../shared/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SyncIcon from '@mui/icons-material/Sync';
import LoginIcon from '@mui/icons-material/Login';
import { signOut } from "firebase/auth";
import signInWithGoogle from "../../shared/SignInWithGoogle";
import toast from "react-hot-toast";

const pages = [{path:'/news', name:'новости'}, {path:'/newRecord', name:'запись на обучение'}, {path:'/learn', name:'занятия'}, {path:'/drop', name:'прыжки с парашютом'}, {path:'/contacts', name:'Контакты'}];
const settings = [{callback: ()=> signOut(auth), name:'Выход'}];

export const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  if(error)
    toast("Ошибка авторизации")

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{
      width: '100%'
    }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink to={'/'} style={{textDecoration: 'none'}}>
              <Box sx={{
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center'
              }}>
                <Box sx={{ 
                  display: { xs: 'none', md: 'flex' }, 
                  mr: 1,
                  width: '56px',
                  height: '56px'
                }}>
                  <img src="logo.png" width='100%' height="100%"/>
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  ДОСААФ
                </Typography>
              </Box>
            </NavLink>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <NavLink to={page.path} style={{textDecoration: 'none'}}><Typography textAlign="center">{page.name}</Typography></NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <NavLink to={'/'} style={{textDecoration: 'none'}}>
              <Box sx={{
                  display: 'flex',
                }}>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  LOGO
                </Typography>
              </Box>
            </NavLink>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <NavLink key={index} to={page.path} style={{textDecoration: 'none'}}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.name}
                  </Button>
                </NavLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                {loading ? <SyncIcon sx={{fontSize: 40}}/> : 
                user ? 
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <PersonIcon sx={{fontSize: 40}}/>
                </IconButton>
                : <Button onClick={signInWithGoogle}><LoginIcon sx={{fontSize: 40}}/></Button>
                }
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>
                    <Button onClick={setting.callback} variant="contained">
                      {setting.name}
                    </Button>
                    {/* <Typography textAlign="center">{setting.name}</Typography> */}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
