import React, { useContext, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CloseIcon from "@mui/icons-material/Close";
import "./messege.css";
import Modal from "@mui/material/Modal";
import ContextApi from "../../Context/ContextApi";
import { db, storage } from "../../Firebase/Firebase";
import { Timestamp } from "firebase/firestore";

function Messege() {
    const [open, setopen] = useState(false);
    const [{ user }, dispatch] = useContext(ContextApi);
    const [image, setimage] = useState("");
    const [messege, setmessege] = useState("");
    // const [progress, setprogress] = useState(0);

    const handleclose = () => {
        setopen(false);
    };

    const handleopen = () => {
        setopen(true);
    };

    const uploadpic = () => {
        document.getElementById("imagefile").click();
    };

    const handlechange = (e) => {
        setimage(e.target.files[0]);
    };

    const handleupload = (e) => {
        e.preventDefault();
        if (image === "") {
            db.collection("posts").add({
                timestamp: Timestamp.now(),
                messege: messege,
                username: user.displayName,
                photoUrl: user.photoUrl,
            });
        } else {
            const handletask = storage.ref(`images/${image.name}`).put(image);
            handletask.on("state_changed", () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        db.collection("posts").add({
                            timestamp: Timestamp.now(),
                            messege: messege,
                            username: user.displayName,
                            photoUrl: user.photoUrl,
                            image: url,
                        });
                    });
            });
        }
        handleclose();
        setmessege("");
        setimage("");
    };
    return (
        <>
            <Modal
                open={open}
                onClose={handleclose}
            >
                <div className="model_popup">
                    <form>
                        <div className="model_heading">
                            <h3>Create Post</h3>
                            <IconButton onClick={handleclose}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className="model_header">
                            <Avatar src={user.photoUrl} />
                            <h5>{user.displayName}</h5>
                        </div>
                        <div className="model_body">
                            <textarea
                                rows="5"
                                placeholder="What's on your mind Abhinav?"
                                autoFocus
                                value={messege}
                                onChange={(e) => setmessege(e.target.value)}
                            />
                        </div>
                        <div className="model_footer">
                            <div className="footer_left">
                                <h4>Add to your post</h4>
                            </div>
                            <div className="footer_right">
                                <IconButton>
                                    <PhotoLibraryIcon
                                        style={{ color: "red" }}
                                        fontSize="large"
                                        onClick={uploadpic}
                                    />
                                </IconButton>
                                <input
                                    type="file"
                                    id="imagefile"
                                    style={{ display: "none" }}
                                    onChange={handlechange}
                                />
                                <IconButton>
                                    <VideoCallIcon
                                        style={{ color: "lightgreen" }}
                                        fontSize="large"
                                    />
                                </IconButton>
                                <IconButton>
                                    <EmojiEmotionsIcon
                                        style={{ color: "#ffb100" }}
                                        fontSize="large"
                                    />
                                </IconButton>
                            </div>
                        </div>
                        {image !== "" && (
                            <p
                                style={{
                                    fontSize: "14px",
                                    textAlign: "center",
                                    marginBottom: "10px",
                                    color: "red",
                                    padding: "0px",
                                }}
                            >
                                Image is added
                            </p>
                        )}
                        {/* {progress != "" && (
                            <progress
                                value={progress}
                                max="100"
                                style={{
                                    width: "100%",
                                    marginBottom: "10px",
                                }}
                            />
                        )} */}
                        <input
                            type="submit"
                            className="input_1"
                            value="post"
                            onClick={handleupload}
                        />
                    </form>
                </div>
            </Modal>
            <div className="messegesender">
                <div className="messegesender-top">
                    <Avatar src={user.photoUrl} />
                    <form>
                        <input
                            type="text"
                            placeholder="What's on your mind Abhinav?"
                            onClick={handleopen}
                        />
                    </form>
                </div>
                <div className="messegesender-bottom">
                    <div className="options">
                        <VideoCallIcon
                            style={{ color: "red" }}
                            fontSize="large"
                        />
                        <p>Live Video</p>
                    </div>
                    <div className="options">
                        <PhotoLibraryIcon
                            style={{ color: "lightgreen" }}
                            fontSize="large"
                        />
                        <p>Photo/Video</p>
                    </div>
                    <div className="options">
                        <EmojiEmotionsIcon
                            style={{ color: "#ffb100" }}
                            fontSize="large"
                        />
                        <p>Feeling/Activity</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Messege;
