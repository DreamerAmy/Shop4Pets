import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../services/UserThunks";
import 'react-toastify/dist/ReactToastify.css';
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
    const [accountType, setAccountType] = useState('')
    const [error, setError] = useState(null)
    // const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    // const [validated, setValidated] = useState(false);
    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    //     setValidated(true);
    // };

    // const redirectInUrl = new URLSearchParams(search).get('redirect');
    // const redirect = redirectInUrl ? redirectInUrl : '/login';
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords does not match')
            return;
        }
        setError(null)
        const newUser = {name, email, password, accountType}
        dispatch(registerThunk(newUser))
        navigate('/');

        // try {
        //     const newUser = {name, email, password}
        //     dispatch(registerThunk(newUser))
        //     navigate(redirect || '/login');
        // }catch (error) {
        //     setError("something went wrong for registration");
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
                        <Form.Control
                            type="name"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
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
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="validatePassword">
                         <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                onChange={(e) => setValidatePassword(e.target.value)}
                            />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="accountType">
                        <Form.Label>Account Type</Form.Label>
                        <Form.Control
                            type="accountType"
                            placeholder="Please enter buyer or seller"
                            required
                            onChange={(e) => setValidatePassword(e.target.value)}
                        />
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
        </>
    )
}

export default Register;