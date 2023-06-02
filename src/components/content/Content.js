import { Container } from "@mui/system";
import Carousel from "./carousel/carousel.content";
import Banner from "./banner/banner.content";
import Product from "./product/product.content";
import Category from "./category/category";
import Instagram from "./instagram/instagram";
import Lastest from "./lastest/lastest";

const Content = () => {
    return (
        <>
            <Carousel />
            <Banner />
            <Product />
            <Category />
            <Instagram />
            <Lastest />
        </>
    )        
}

export default Content;