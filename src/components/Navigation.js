import { Navbar, Nav, } from 'react-bootstrap';
import "../styles/Navigation.css";


export default function Navigation(){

    return(
        <Navbar expand="lg" bg="dark" variant="dark">
           <Navbar.Brand>
            HD Garage
           </Navbar.Brand>
           <Nav.Link href="/login"><span>Login</span></Nav.Link>
           
        </Navbar>
    )
}