import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../styles/Login.css"
import { Link } from 'react-router-dom';

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handlesubmit = async(e)=>{
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        };
        console.log(data);
    }

    return(
        <div id="Login">
            <div className='formContainer'>
            <Form onSubmit= {handlesubmit}>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <Form.Label>Jelszó:</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"  value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <Button variant="danger" type='submit'> Bejelentkezés
                    </Button>
                </Form.Group>
                <Link to="/Registration">Regisztráció</Link>
            </Form>
            </div>
        </div>
    )
}