import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import "../../index.css";
const Navber = () => {
  const PublicPage = [
    { label: "Home", link: "" },
    { label: "Services", link: "services" },
    { label: "Blogs", link: "blogs" },
    { label: "Our Team", link: "our-team" },
    { label: "Contact Us", link: "contact-us" },
  ];
  const role = "admin";
  const user = true;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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
    <div>
      <AppBar
        style={{ backgroundColor: "#fff8f5" }}
        elevation={0}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", lg: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img className="md:w-1/3 w-2/3" src={logo} />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {PublicPage.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <NavLink to={`/${page.link}`}>
                      <Typography sx={{ textAlign: "center" }}>
                        {page.label}
                      </Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { lg: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img className="w-1/3 " src={logo} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {PublicPage.map((page, index) => (
                <NavLink to={`/${page.link}`}>
                  <Button
                    className="font-bold"
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    {page.label}
                  </Button>
                </NavLink>
              ))}
            </Box>
            {user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Dashboard">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Link to={`${role}/dashboard`}>
                      <button>Dashboard</button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button>Logout</button>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Link to={"/login"}>
                <button className="bg-blue-600 px-2 py-1 rounded font-semibold">
                  Login
                </button>
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navber;
