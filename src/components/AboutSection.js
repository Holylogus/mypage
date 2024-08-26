import "../styles/AboutSection.css";
import { Button } from 'react-bootstrap';

export default function AboutSection() {
  return (
    <div id="AboutSection">
      <h1>Üdvözlünk a BMW Szakszervíz Világában!</h1>
      <h2>Kiváló Minőségű BMW Szerviz Tapasztalat</h2>
      <p>
        Üdvözöljük a HDGarage weboldalán, ahol a BMW szerelmesei találkoznak a
        minőségi autószerviz szolgáltatásokkal. Cégünk elhivatott a BMW járművek
        karbantartásában és javításában, és büszkén kínáljuk a legmagasabb
        szintű szerviz tapasztalatot.
      </p>
      <p><strong>Miért Válasszon Minket?</strong></p>
      <Button variant="danger" onClick={() => console.log("Primary")}>
        Ajánlatkérés
      </Button>
    </div>
  );
}
