import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../services/UserThunks";
// import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import toast from "react-hot-toast";
// import {getError} from "../utils";
import {Container, Form} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {redirect} from "react-router";
import {Helmet} from "react-helmet-async";


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/login';
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            // console.log('Passwords do not match')
            setError('Passwords does not match')
            return;
        }
        setError(null)

        const newUser = {name, email, password}
        dispatch(registerThunk(newUser))
        navigate(redirect || '/login');

        // try {
        //     const newUser = {name, email, password}
        //     dispatch(registerThunk(newUser))
        //     navigate(redirect || '/login');
        // }catch (error) {
        //     toast.error("something went wrong for registration");
        //     console.log("Email already exist")
        //     console.log(error)
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
                    <title>Register</title>
                </Helmet>
                <h1 className="my-3">Sign Up</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>

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
                        <Form.Group className="mb-3" controlId="validatePassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={(e) => setValidatePassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Form.Group>

                    <div className="mb-3">
                        <Button onClick={handleRegisterBtn} className="btn btn-warning ">Register</Button>
                    </div>

                    <div className="mb-3">
                        Already have an account?{' '}
                        <Link to={`/login?redirect=${redirect}`}>Sign-In</Link>
                    </div>
                </Form>
            </Container>
            {/*<input*/}
            {/*    className="form-control mb-2"*/}
            {/*    value={name}*/}
            {/*    onChange={(e) => setName(e.target.value)}/>*/}
            {/*<input*/}
            {/*    className="form-control mb-2"*/}
            {/*    value={password}*/}
            {/*    onChange={(e) => setPassword(e.target.value)}/>*/}
            {/*<input*/}
            {/*    className="form-control mb-2"*/}
            {/*    value={validatePassword}*/}
            {/*    onChange={(e) => setValidatePassword(e.target.value)}/>*/}
            {/*<button*/}
            {/*    onClick={handleRegisterBtn}*/}
            {/*    className="btn btn-primary w-100">*/}
            {/*    Register*/}
            {/*</button>*/}
            {
                currentUser &&
                <h2>Welcome {currentUser.name}</h2>
            }
        </>
    )
}

export default Register;