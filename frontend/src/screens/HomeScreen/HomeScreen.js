import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

// Display profile btn only user is logged in
const profileBtn = (currentUser) => {
    let profileUrl = "../profile/";
    if (currentUser) {
        // profileUrl += currentUser._id;
        return (
            <button className="btn btn-default border" >
                <Link to={profileUrl} href="/" className="nav-link" >MyProfile</Link>
            </button>
        )
    }
    return;
}

const Home = () => {
    const { currentUser } = useSelector((state) => state.user)

    console.log("home currentUser", currentUser);


    return (
        <>
            {
                currentUser &&
                <h2>Welcome {currentUser.name}</h2>
            }
            <h1>This is the Home screen
            </h1>

            <h1>Product you may like......</h1>
            {profileBtn(currentUser)};

        </>
    )
}

export default Home;