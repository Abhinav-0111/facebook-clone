import { useContext } from "react";
import Feed from "./component/Feed/feed";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import Rightsidebar from "./component/Rightsidebar/rightsidebar";
import Sidebar from "./component/Sidebar/sidebar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContextApi from "./Context/ContextApi";

function App() {
    const [{ user }, dispatch] = useContext(ContextApi);

    return (
        <>
            {!user ? (
                <Login />
            ) : (
                <div className="App">
                    <Header />
                    <div className="app__body">
                        <Sidebar />
                        <Feed />
                        <Rightsidebar />
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    );
}

export default App;
