import React, { useEffect, useState } from "react";
import "./feed.css";
import Story from "../Story/story";
import Messege from "../Messegesender/messege";
import Post from "../Post/Post";
import { db } from "../../Firebase/Firebase";

function Feed() {
    const [post, setpost] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setpost(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                );
            });
    }, []);

    return (
        <>
            <div className="feed">
                <Story />
                <Messege />
                {post.map(
                    ({
                        id,
                        data: { photoUrl, image, username, timestamp, messege },
                    }) => {
                        return (
                            <Post
                                key={id}
                                photourl={photoUrl}
                                image={image}
                                name={username}
                                time={new Date(
                                    timestamp?.seconds * 1000
                                ).toLocaleTimeString()}
                                messege={messege}
                            />
                        );
                    }
                )}
            </div>
        </>
    );
}

export default Feed;
