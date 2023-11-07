import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Waterdip2 from "../assets/waterdip_logo2.webp";
import AboutUs from "../components/utils/AboutUs";
import ServicesModal from "./utils/Services";
import IndustriesModal from "./utils/Industries";
import ResourcesModal from "./utils/Resources";
import useSound from "use-sound";
import toggle from "../../src/assets/toggle.wav";

const pages = ["About Us", "Our Services", "industries", "Resources"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar: React.FC = () => {
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

  const [play] = useSound(toggle);
  const [aboutUsOpen, setAboutUsOpen] = React.useState<boolean>(false);
  const [selectedPage, setSelectedPage] = React.useState<string | any>(null);

  const handleSelectedPage = (page: any) => {
    setSelectedPage(page);
    handleOpenAboutUs();
    play();
  };

  const handleOpenAboutUs = () => {
    setAboutUsOpen(!aboutUsOpen);
  };

  React.useEffect(() => {
    let handler = () => {
      setAboutUsOpen(false);
    };

    document.addEventListener("mousedown", handler);
  });

  return (
    <AppBar style={{ marginBottom: "15px" }} position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <img
            src={Waterdip2}
            width={40}
            height={40}
            style={{ marginRight: "20px" }}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginRight: "150px",
            }}
          >
            WATERDIP
          </Typography>

          {/* Visible in small screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Visible in larger screen - Tablets */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleSelectedPage(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  marginRight: "150px",
                }}
              >
                {page}

                {selectedPage === "About Us" && (
                  <AboutUs aboutUsOpen={aboutUsOpen} />
                )}

                {selectedPage === "Our Services" && (
                  <ServicesModal aboutUsOpen={aboutUsOpen} />
                )}

                {selectedPage === "industries" && (
                  <IndustriesModal aboutUsOpen={aboutUsOpen} />
                )}

                {selectedPage === "Resources" && (
                  <ResourcesModal aboutUsOpen={aboutUsOpen} />
                )}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Parteek_Kumar" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
