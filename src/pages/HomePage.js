import AboutSection from "../components/AboutSection";
import CarouselContainer from "../components/CarouselContainer";
import ContractSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import MenuSection from "../components/MenuSection";

export default function HomePage(){

    return(
        <div id="HomePage">
            <CarouselContainer/>
            <MenuSection/>
            <AboutSection/>
            <ContractSection/>
            <FooterSection/>
        </div>
    )
}