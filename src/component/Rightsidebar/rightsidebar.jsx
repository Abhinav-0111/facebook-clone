import React from "react";
import "./rightsidebar.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";

function Rightsidebar() {
    return (
        <div className="rightsidebar">
            <div className="sidebar_header">
                <div className="sidebar_left">
                    <h4>Your Pages</h4>
                </div>
                <MoreHorizIcon />
            </div>
            <div className="sidebar_body">
                <div className="sidebar_options">
                    <Avatar />
                    <h4>Coding</h4>
                </div>
                <div className="sidebar_options ml_10">
                    <NotificationsNoneIcon />
                    <p>1 Notification</p>
                </div>
                <div className="sidebar_options ml_10">
                    <VolumeUpIcon />
                    <p>Create promotions</p>
                </div>
            </div>
            <hr />
            <br />
            <div className="sidebar_header">
                <div className="sidebar_left">
                    <h4>Contacts</h4>
                </div>
                <div className="sidebar_right">
                    <VideoCallIcon />
                    <SearchIcon />
                    <MoreHorizIcon />
                </div>
            </div>
            <div className="sidebar_body">
                <div className="sidebar_options">
                    <Avatar src="https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/344812721_264430145954509_4415106122681057821_n.jpg?ccb=11-4&oh=01_AdSpTxUNIhaGHPgLqGOw-u5aJjyBBxnhqsNgfw4I0mdtRA&oe=65479FD0&_nc_sid=000000&_nc_cat=102" />
                    <h4>Shobhit</h4>
                </div>
                <div className="sidebar_options">
                    <Avatar src="https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/368507150_2604125823097647_2194014565265491882_n.jpg?ccb=11-4&oh=01_AdSoMMQTGwYNqq_ldj9pGll2TxHiKH8Zgynyh_WHPHx30Q&oe=654B2A56&_nc_sid=000000&_nc_cat=109" />
                    <h4>Sourabh</h4>
                </div>
                <div className="sidebar_options">
                    <Avatar src="https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/361678424_254865623982909_4628646152951723937_n.jpg?ccb=11-4&oh=01_AdTndLMC4TipoeuyoxKgJ3NFCgwEZf74R7Hnr1Y6JY2KSQ&oe=654B249B&_nc_sid=000000&_nc_cat=108" />
                    <h4>Rahul</h4>
                </div>
                <div className="sidebar_options">
                    <Avatar src="https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/368231961_804964668073680_3849504416893220439_n.jpg?ccb=11-4&oh=01_AdSWwjpThUS_5T2zXaZkv82RTMlSpifTq1ImRcqMY2eFZg&oe=654B33B4&_nc_sid=000000&_nc_cat=106" />
                    <h4>Yash</h4>
                </div>
                <div className="sidebar_options">
                    <Avatar src="https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/382554622_6566561513380479_5768972897078656393_n.jpg?ccb=11-4&oh=01_AdRGGUP-WD_WRwJUE_EQWb2PdEptqShkP1Td94I8jb40Ww&oe=654B2761&_nc_sid=000000&_nc_cat=105" />
                    <h4>Vansh</h4>
                </div>
            </div>
        </div>
    );
}

export default Rightsidebar;
