import { Container, Link } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'
import './carousel.content.css'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import { carouselData } from './carousel.data';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slide = (props) => {

    const { title, collection, description, image } = props;

    return (
        <div >
            <img src={image} alt="" />
            <div className="carousel-caption d-flex d-md-block">
                <p className='carousel-title'>{title}</p>
                <h2 className='carousel-name'>{collection}</h2>
                <p className="carousel-description">
                    {description}
                </p>
                <a className="carousel-button" href='/products' >
                    SHOP NOW &nbsp;
                    <span><EastOutlinedIcon /></span>
                </a>
                <div className="carousel-social">
                    <Link href="https://www.facebook.com/">
                    <FacebookOutlinedIcon style={{ marginRight: "32px" }} />
                    </Link>
                    <Link href="https://twitter.com/">
                    <TwitterIcon style={{ marginRight: "32px" }} />
                    </Link>
                    <Link href="https://www.pinterest.com/">
                    <PinterestIcon style={{ marginRight: "32px" }} />
                    </Link>
                    <Link href="https://www.instagram.com/">
                    <InstagramIcon style={{ marginRight: "32px" }} />
                    </Link>
                    
                </div>
            </div>
        </div>

    )
}

const CarouselContent = () => {
    const settings = {
        dots: true,
        fade: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <Container maxWidth style={{ padding: "0" }}>


            <div className="carousel-inner">
                <Slider {...settings}>
                    {
                        carouselData.map((element, index) => {
                            console.log(element);
                            return (
                                // <CarouselItem key={index}>
                                //     <Slide title={element.title} collection={element.collectionName} description={element.description} image={element.imageUrl} />
                                // </CarouselItem>

                                <div>
                                    <Slide title={element.title} collection={element.collectionName} description={element.description} image={element.imageUrl} />
                                </div>

                            )
                        })
                    }
                </Slider>
            </div>
        </Container >

    )
}

export default CarouselContent;