import React, { useContext } from "react";
import "./Login.css";
import { auth, provider } from "../../Firebase/Firebase";
import { toast } from "react-toastify";
import ContextApi from "../../Context/ContextApi";

function Login() {
    const [{}, dispatch] = useContext(ContextApi);

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                const photoUrl = `${result.user.photoURL}?access_token=${credential.accessToken}`;
                dispatch({
                    type: "SET_USER",
                    user: {
                        displayName: result.user.displayName,
                        photoUrl: photoUrl,
                    },
                });
                toast.success("Login Successfully");
            })
            .catch((error) => {
                toast.error("Invaild Account");
            });
    };

    return (
        <div className="login_wrapper">
            <div className="login">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />
                <h2>Sign in with Facebook</h2>
                <button onClick={signIn}>Login with Facebook</button>
            </div>
        </div>
    );
}

export default Login;
