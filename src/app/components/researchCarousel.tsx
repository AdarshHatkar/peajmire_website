import Slider from "react-slick";
import researchCarousel1 from "@assets/images/researchCarousel1.jpg";
import researchCarousel2 from "@assets/images/researchCarousel2.jpg";
import researchCarousel3 from "@assets/images/researchCarousel3.jpg";
import researchCarousel4 from "@assets/images/researchCarousel4.jpg";
import researchCarousel5 from "@assets/images/researchCarousel5.jpg";
import researchCarousel6 from "@assets/images/researchCarousel6.jpg";
import researchCarousel7 from "@assets/images/researchCarousel7.jpg";
import researchCarousel8 from "@assets/images/researchCarousel8.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ResearchCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const carouselImgs = [researchCarousel1, researchCarousel2, researchCarousel3, researchCarousel4, researchCarousel5, researchCarousel6, researchCarousel7, researchCarousel8,];

    return <>
        <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    </>;
}

