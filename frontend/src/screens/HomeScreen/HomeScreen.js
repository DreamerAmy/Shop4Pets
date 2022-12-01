import { useSelector} from "react-redux";


const Home = () => {
    const {currentUser} = useSelector((state) => state.user)


    return(
        <>
            {
                currentUser &&
                <h2>Welcome {currentUser.name}</h2>
            }
            <h1>This is the Home screen
            </h1>

            <h1>Product you may like......</h1>

        </>
    )
}

export default Home;