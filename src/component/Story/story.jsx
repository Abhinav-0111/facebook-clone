import React, { useContext } from "react";
import "./story.css";
import { Avatar } from "@mui/material";
import ContextApi from "../../Context/ContextApi";

function Story() {
    const [{ user }] = useContext(ContextApi);
    return (
        <>
            <div className="storyreel">
                <div
                    className="story"
                    style={{
                        backgroundImage: `url("https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg")`,
                    }}
                >
                    <Avatar src={user.photoUrl} />
                    <h4>{user.displayName}</h4>
                </div>
                <div
                    className="story"
                    style={{
                        backgroundImage: `url("https://m.media-amazon.com/images/I/31qu4ixHZ3L._AC_UF1000,1000_QL80_.jpg")`,
                    }}
                >
                    <Avatar />
                    <h4>Sourabh</h4>
                </div>
                <div
                    className="story"
                    style={{
                        backgroundImage: `url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg")`,
                    }}
                >
                    <Avatar />
                    <h4>Shobhit</h4>
                </div>
                <div
                    className="story"
                    style={{
                        backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20220610/pngtree-rainy-drive-water-droplets-on-car-windshield-while-driving-on-asphalt-road-photo-image_31318496.jpg")`,
                    }}
                >
                    <Avatar />
                    <h4>Yash</h4>
                </div>
                <div
                    className="story"
                    style={{
                        backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")`,
                    }}
                >
                    <Avatar />
                    <h4>Vansh</h4>
                </div>
            </div>
        </>
    );
}

export default Story;
