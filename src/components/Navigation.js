import { Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import "../styles/Navigation.css";
import { useNavigate } from "react-router-dom";


export default function Navigation(){

    const navigate = useNavigate();
    
    return(
        <div id='Navigation'>
        <Navbar expand="true" bg="dark" variant="dark">
           <Navbar.Brand>
            <Nav.Link href="/">HD Gargae</Nav.Link>
           </Navbar.Brand>
           <NavDropdown title="Szervíz" id="nav-dropdown" menuVariant='dark' >
            <NavDropdown.Item eventKey="4.1" onClick={()=>{
                navigate("/autoservice")
            }}>Autó Szervíz</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" onClick={()=>{
                navigate("/MotorGeneral")
            }}>Motorgenerál</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3" onClick={()=>{
                navigate("/Diagnostic")
            }}>Diagnosztika</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4" onClick={()=>{
                navigate("/Maintence")
            }}>Karbantartás</NavDropdown.Item>
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