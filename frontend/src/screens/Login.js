import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../services/UserThunks";
import './index.css';
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { redirect } from "react-router";


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleLoginBtn = async () => {
        try {
            const loginUser = { email, password }
            await dispatch(loginThunk(loginUser))
        } catch (e) {
            window.alert("Something went wrong with login")
        }

    }
    if (currentUser) {
        return (<Navigate to={'/'} />)
    }

    return (
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
                            placeholder="example@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

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