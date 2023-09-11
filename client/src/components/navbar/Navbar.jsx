import "./navbar.scss";
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import YoutubeSearchedForRoundedIcon from '@mui/icons-material/YoutubeSearchedForRounded';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Connectify</span>
        </Link>
        <CottageRoundedIcon/>
        {darkMode ? (
          <WbSunnyRoundedIcon onClick={toggle} />
        ) : (
          <NightsStayRoundedIcon onClick={toggle} />
        )}
        <GridViewRoundedIcon />
        <div className="search">
          <YoutubeSearchedForRoundedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <Person2RoundedIcon />
        <EmailRoundedIcon />
        <NotificationsActiveRoundedIcon />
        <div className="user">
          <img
            src={"/upload/" + currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
