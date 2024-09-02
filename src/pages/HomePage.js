import AboutSection from "../components/AboutSection";
import CarouselContainer from "../components/CarouselContainer";
import ContractSection from "../components/ContactSection";
import MenuSection from "../components/MenuSection";

export default function HomePage(){

    return(
        <div id="HomePage">
            <CarouselContainer/>
            <MenuSection/>
            <AboutSection/>
            <ContractSection/>
            <footer>
                <span>Made by Hamar Patrik</span>
            </footer>
        </div>
    )
}