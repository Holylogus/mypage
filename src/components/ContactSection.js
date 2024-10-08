import "../styles/ContactSection.css";
import i1 from "../icons/icons8-facebook-48.png";
import i2 from "../icons/icons8-instagram-48.png";
import i3 from "../icons/icons8-tiktok-48.png";
import { Image } from "react-bootstrap";

export default function ContactSection() {
  return (
    <div id="ContactSection">
      <div className="title">
        <h1>HD Garage</h1>
      </div>
      <div className="contactInfo">
        <h2>Elérhetőségünk</h2>
        <p>2363 Felsőpakony, Ipari út 1.</p>
        <p>
          <strong>+36 30 389 9145</strong>
        </p>
      </div>
      <div className="openInfo">
        <h2>Szervíz nyitvatartása</h2>
        <p>
          Htéfő - Szombat: <strong>8:00 - 18:00</strong>
        </p>
      </div>
      <div className="PublicMediaContainer">
        <div>
          <a
            className="p-4 m-3"
            href="https://www.facebook.com/profile.php?id=100090888117425"
          >
            <Image src={i1} />
          </a>
        </div>
        <div>
        <a className="p-4 pb-3" href="/">
          <Image src={i2} />
        </a>
        </div>
        <div>
        <a className="p-4 pb-3" href="/">
          <Image src={i3} />
        </a>
        </div>
      </div>
    </div>
  );
}
