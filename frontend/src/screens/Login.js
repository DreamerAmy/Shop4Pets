import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../services/UserThunks";
import './index.css';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {Container, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {redirect} from "react-router";


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const [accountType, setAccountType] = useState('')

    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()


    const handleLoginBtn = async () => {

        const loginUser = {email, password}
        await dispatch(loginThunk(loginUser))

        // try {
        //     setError(null)
        //     const loginUser = {email, password}
        //     await dispatch(loginThunk(loginUser))
        //
        // } catch(err) {
        //     if (!err?.response) {
        //         setError("Incorrect Password or Email. Please try again!")
        //     } else if (err.response?.status === 403) {
        //         setError("user not found")
        //     } else {
        //         setError("Login failed")
        //     }
        // }
    }
    return(
        <>
            <Container className="small-container">
                <Helmet>
                    <title>Log In</title>
                </Helmet>
                <h1 className="my-4">Sign In</h1>
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


                    {/*<Form.Group className="mb-3" controlId="accountType">*/}
                    {/*    <Form.Label>Account Type</Form.Label>*/}
                    {/*    <Form.Select*/}
                    {/*        type="accountType"*/}
                    {/*        required*/}
                    {/*        onChange={(e) => setAccountType(e.target.value)}*/}
                    {/*    >*/}
                    {/*    <option value="buyer">buyer</option>*/}
                    {/*    <option value="seller">seller</option>*/}
                    {/*    </Form.Select>*/}
                    {/*</Form.Group>*/}


                    <div className="mb-3">
                        <Button onClick={handleLoginBtn} className="btn btn-warning ">Login</Button>
                    </div>
                    <div className="mb-3">
                        New customer?{' '}
                        <Link to={`/register?redirect=${redirect}`}>Create your account here</Link>
                    </div>

                    {
                        !currentUser &&
                        <div className="alert alert-warning">
                            {"Please login with correct credential"}
                        </div>
                    }
                    {
                        currentUser &&
                        <div className="alert alert-success">
                            {"Login successfully"}
                        </div>
                    }
                </Form>
            </Container>
        </>
    )
}


export default Login;