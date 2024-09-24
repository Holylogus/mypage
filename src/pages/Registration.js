import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../styles/Registration.css"

export default function Registration(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [role, setRole] = useState("");

    

    const handlesubmit = async(e)=>{
        e.preventDefault();

        const data = {
            name: name,
            birthDate: birthDate,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            role: "user"
        };
        console.log(data);
    }

    return(
        <div id="Registration">
            <div className='formContainer'>
            <Form onSubmit= {handlesubmit}>
                <Form.Group>
                    <Form.Label>Név:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                    <Form.Label>Születési Idő:</Form.Label>
                    <Form.Control type="date" placeholder="Placeholder text" value={birthDate} onChange={(e)=>{
                        setBirthDate(e.target.value);
                    }}/>
                    <Form.Label>Telefonszám:</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your phone number" value={phoneNumber} onChange={(e)=>{
                        setPhoneNumber(e.target.value);
                    }}/>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <Form.Label>Jelszó:</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"  value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <Form.Label>Jelszó Újra:</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"  value={passwordConfirm} onChange={(e)=>{
                        setPasswordConfirm(e.target.value)
                    }}/>
                    <Button variant="danger" type='submit'> Bejelentkezés
                    </Button>
                </Form.Group>
            </Form>
            </div>
        </div>
    )
}