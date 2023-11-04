import { Avatar } from "@mui/material";
import React from "react";
import "./sidebar.css";

function Sidebaroption({ src, Icon, title }) {
    return (
        <div className="sidebarrow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <p>{title}</p>
        </div>
    );
}

export default Sidebaroption;
