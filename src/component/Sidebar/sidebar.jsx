import React, { useContext } from "react";
import "./sidebar.css";
import Sidebaroption from "./sidebaroption";
import covid from "../../assets/img/covid-19.png";
import friend from "../../assets/img/friends.png";
import group from "../../assets/img/group.png";
import schedule from "../../assets/img/schedule.png";
import watch from "../../assets/img/facebook.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import pic from "../../assets/img/pic.jfif";
import ContextApi from "../../Context/ContextApi";

function Sidebar() {
    const [{ user }, dispatch] = useContext(ContextApi);
    return (
        <>
            <div className="sidebar">
                <Sidebaroption
                    src={user.photoUrl}
                    title={user.displayName}
                />
                <Sidebaroption
                    src={covid}
                    title="Covid-19 Information Center"
                />
                <Sidebaroption
                    src={friend}
                    title="Friends"
                />
                <Sidebaroption
                    src={group}
                    title="Groups"
                />
                <Sidebaroption
                    src={watch}
                    title="Watch "
                />
                <Sidebaroption
                    src={schedule}
                    title="Events"
                />
                <Sidebaroption
                    Icon={KeyboardArrowDownIcon}
                    title="See More"
                />
            </div>
        </>
    );
}

export default Sidebar;
