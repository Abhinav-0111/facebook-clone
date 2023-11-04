import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupIcon from "@mui/icons-material/Group";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Avatar, IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import pic from "../../assets/img/pic.jfif";
import ContextApi from "../../Context/ContextApi";

function Header() {
    const [{ user }, dispatch] = useContext(ContextApi);
    return (
        <div className="header">
            <div className="header-left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" />
                <div className="header-input">
                    <SearchIcon />
                    <input
                        type="search"
                        placeholder="Search Facebook"
                    />
                </div>
            </div>
            <div className="header-middle">
                <div className="header__option active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <OndemandVideoIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <GroupIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SportsEsportsIcon fontSize="large" />
                </div>
            </div>
            <div className="header-right">
                <div className="header__info">
                    <Avatar src={user.photoUrl} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Header;
