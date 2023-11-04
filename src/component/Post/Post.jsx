import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

function Post({ photourl, image, name, time, messege }) {
    return (
        <div className="post">
            <div className="post_top">
                <div className="post_top_left">
                    <Avatar src={photourl} />
                    <div className="post_info">
                        <h4>{name}</h4>
                        <p>
                            {time} <PublicIcon />
                        </p>
                    </div>
                </div>
                <MoreHorizIcon />
            </div>
            <div className="post_middle">
                <p>{messege}</p>
                {image && <img src={image} />}
            </div>
            <div className="post_bottom">
                <div className="post_options">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_options">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post_options">
                    <ShareIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    );
}

export default Post;
