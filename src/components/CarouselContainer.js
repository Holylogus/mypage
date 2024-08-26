import { Carousel } from 'react-bootstrap';
import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c3.png"
import c4 from "../images/c4.png"
import c5 from "../images/c5.png"
import "../styles/CarouselContainer.css"

export default function CarouselContainer() {
    return(
        <div id="CarouselContainer">
            <Carousel>
                <Carousel.Item>
                <img
                        className="d-block w-100 h-100"
                        src={c1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={c2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={c3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={c4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={c5}
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}