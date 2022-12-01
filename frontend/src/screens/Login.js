import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../services/UserThunks";
import './index.css';
import {Link, useLocation} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {Container, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const handleLoginBtn = () => {
        setError(null)

        const loginUser = {email, password}

        dispatch(loginThunk(loginUser))
        console.log(loginUser)
        // if (!loginUser) {
        //     setError("something went wrong")
        // }

    }
    return(
        <>

            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <Container className="small-container">
                <Helmet>
                    <title>Log In</title>
                </Helmet>
                <h1 className="my-3">Sign In</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className="mb-3">
                        <Button onClick={handleLoginBtn} className="btn btn-warning ">Login</Button>
                    </div>
                    <div className="mb-3">
                        New customer?{' '}
                        <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
                    </div>
                </Form>
            </Container>
            {
                currentUser &&
                <h2>Welcome {currentUser.name}</h2>
            }
        </>
    )
}


export default Login;