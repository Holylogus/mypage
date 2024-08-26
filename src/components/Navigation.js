import { Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import "../styles/Navigation.css";


export default function Navigation(){

    return(
        <div id='Navigation'>
        <Navbar expand="lg" bg="dark" variant="dark">
           <Navbar.Brand>
            <Nav.Link href="/">HD Gargae</Nav.Link>
           </Navbar.Brand>
           <NavDropdown title="Szervíz" id="nav-dropdown" menuVariant='dark'>
            <NavDropdown.Item eventKey="4.1">Autószervíz</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Motorgenerál</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Diagnosztika</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Karbantartás</NavDropdown.Item>
           </NavDropdown>
           <Nav.Item>
            Kapcsolat
           </Nav.Item>
           <Button variant="danger" onClick={() => console.log("Primary")}>
            Bejelentkezés
           </Button>
           
        </Navbar>
        </div>
    )
}