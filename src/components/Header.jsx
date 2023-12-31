import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HOSPITAL
          </Typography>
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Link className="menuLink" to={"/"}>
              Home
            </Link>
            <Link className="menuLink" to={"/patients"}>
              Patients
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
