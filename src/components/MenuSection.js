import "../styles/MenuSection.css";
import { Card } from 'react-bootstrap';
import engineIcon from "../icons/car-engine.png";
import carService from "../icons/service.png";
import carRepair from "../icons/car-repair.png";
import carDiag from "../icons/diagnostic.png";
import { useNavigate } from "react-router-dom";

export default function MenuSection() {

  const navigate = useNavigate();

  return (
    <div id="MenuSection">
      <Card onClick={()=>{navigate("/autoservice")}}> 
        <Card.Img variant="top" src={carRepair} />
        <Card.Body>
          <Card.Title>Szervíz</Card.Title>
          <Card.Text>Autószerelés márkától függetlenűl</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={()=>{navigate("/MotorGeneral")}}>
        <Card.Img variant="top" src={engineIcon} />
        <Card.Body>
          <Card.Title>Motorgenerál</Card.Title>
          <Card.Text>Motor teljeskörű felújítása Garanciával!</Card.Text>
        </Card.Body>
      </Card >
      <Card onClick={()=>{navigate("/Diagnostic")}}>
        <Card.Img variant="top" src={carDiag} />
        <Card.Body>
          <Card.Title>Diagnosztika</Card.Title>
          <Card.Text>Megtaláljuk a hibakód okát</Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={()=>{navigate("/Maintence")}}>
        <Card.Img variant="top" src={carService} />
        <Card.Body>
          <Card.Title>Karbantartás</Card.Title>
          <Card.Text>Elvégezzük atutója idószakos karbantartását</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
