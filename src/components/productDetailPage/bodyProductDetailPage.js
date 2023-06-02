import {
    Container,
    Grid,
    Breadcrumbs,
    Link,
    Rating,
    TextField,

} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import './bodyProductDetailPage.css'
import thumb_1 from '../../assets/image/shop-details/thumb-1.png'
import thumb_2 from '../../assets/image/shop-details/thumb-2.png'
import thumb_3 from '../../assets/image/shop-details/thumb-3.png'
import thumb_4 from '../../assets/image/shop-details/thumb-4.png'

import detail_payment from '../../assets/image/shop-details/details-payment.png'

import thumb_big_1 from "../../assets/image/shop-details/product-big-1.png"
import thumb_big_2 from "../../assets/image/shop-details/product-big-2.png"
import thumb_big_3 from "../../assets/image/shop-details/product-big-3.png"
import thumb_big_4 from "../../assets/image/shop-details/product-big-4.png"

import { product } from '../../assets/product/product'

const THUMB_ARRAY = [thumb_1, thumb_2, thumb_3, thumb_4];

const BodyProductDetailPage = () => {
    return (
        <Container maxWidth style={{ padding: '0', backgroundColor: "#F3F2EE" }}>
            <Container className="product__detail">
                <Grid container className="breadcrumb__context">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/products"
                        >
                            Shop
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/products/productId"
                        >
                            Product Details
                        </Link>
                    </Breadcrumbs>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    <Grid item xs={3} sm={3} className="thumb__context">
                        {
                            THUMB_ARRAY.map((element, index) => {
                                return (
                                    <img className="thumb__image" src={element} alt="thumbnail" key={index} />
                                )
                            })
                        }
                    </Grid>
                    <Grid item xs={6} sm={6} className="thumb__big__context">
                        <img className="thumb__big__image" src={thumb_big_1} alt="picture" />
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth style={{ padding: "0", backgroundColor: "#ffffff" }}>
                <Container className="product__detail__context">
                    <Grid container className="product__detail__text">
                        <Grid item xs={8}>
                            <h4 style={{ display: "flex", justifyContent: "center" }}>Hooded thermal anorak</h4>
                            <Grid container justifyContent={"center"} marginBottom={"20px"}>
                                <Rating />&nbsp;<span> - 5 Reviews</span>
                            </Grid>
                            <Grid container justifyContent={"center"} style={{ marginBottom: "16px" }}>
                                <h3>$270.00</h3>&nbsp;&nbsp;
                                <span style={{
                                    color: "#bcbcbc",
                                    textDecoration: "line-through",
                                    fontSize: "18px"
                                }}>$70.00</span>
                            </Grid>
                            <p style={{ textAlign: "center", marginBottom: "35px" }}>
                                Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.
                            </p>
                            <Grid container className="product__detail__option">
                                <Grid item xs={6} className="product__detail__option__size">
                                    <p>Size:</p>
                                    <a href="/">XXL</a>
                                    <a href="/">XL</a>
                                    <a href="/">L</a>
                                    <a href="/">S</a>
                                </Grid>
                                <Grid item xs={6} className="product__detail__option__color">
                                    <p>Color:</p>
                                    <div style={{ backgroundColor: "#0B090C" }} />
                                    <div style={{ backgroundColor: "#20315F" }} />
                                    <div style={{ backgroundColor: "#F1AF4D" }} />
                                    <div style={{ backgroundColor: "#ED1C25" }} />
                                    <div style={{ backgroundColor: "#FFFFFF" }} />
                                </Grid>
                            </Grid>
                            <Grid container className="product__detail__cart__option">
                                <TextField
                                    id="outlined-number"
                                    label="Qty."
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <a href="/">ADD TO CART</a>
                            </Grid>
                            <Grid container className="product__detail__btns__option">
                                <a href="/" style={{ marginRight: "20px" }}>
                                    <FavoriteBorderOutlinedIcon />
                                    &nbsp;Add to wishlist
                                </a>
                                <a href="/">
                                    <CompareArrowsOutlinedIcon />
                                    &nbsp;Add to compare
                                </a>
                            </Grid>
                            <Grid container className="product__detail__last__option">
                                <h5>Guaranteed Safe Checkout</h5>
                                <img src={detail_payment} alt="payment" />
                                <ul>
                                    <li>
                                        <span>SKU:</span>
                                        &nbsp;3812912
                                    </li>
                                    <li>
                                        <span>Categories:</span>
                                        &nbsp;Clothes
                                    </li>
                                    <li>
                                        <span>Tag:</span>
                                        &nbsp;Clothes, Skin, Body
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container className="product__description">
                                <a href="/">
                                    Description
                                </a>
                                <a href="/">
                                    Customer Previews
                                </a>
                                <a href="/">
                                    Additional Information
                                </a>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} className="product__description__content">
                                    <p>
                                        Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.
                                    </p>
                                    <div className="product__description__content__information">
                                        <h5>Products Information</h5>
                                        <p>
                                            A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.
                                        </p>
                                        <p>
                                            As is the case with any new technology product, the cost of a Pocket PC was substantial during it’s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.
                                        </p>
                                    </div>
                                    <div className="product__description__content__information">
                                        <h5>Material used</h5>
                                        <p>
                                            Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.</p>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Container>
                        <Grid container className='ralated__product'>
                            <h3 className="ralated__title">Related Product</h3>
                        </Grid>
                        <Grid container className="ralated__product__item">
                            {
                                product.slice(0, 4).map((value, index) => {
                                    return (
                                        <Grid item xs={3} sm={3} key={index} className="mix-new-arrivals" onClick={(e) => console.log(e)} style={{ marginBottom: "40px" }}>
                                            <Grid className="product__item_hover" item xs={12} sm={12}>
                                                <div className="product__item__pic set-bg" data-setbg="productItem1">
                                                    <img src={value.imageUrl} alt="product" style={{ filter: "brightness(70%)" }} />
                                                    {
                                                        `${value.status}` === undefined ? <></> : <span className="label">{value.status}</span>
                                                    }

                                                    <div className="product__item__icon">
                                                        <FavoriteBorderOutlinedIcon className="icon" />
                                                        <CompareArrowsOutlinedIcon className="icon" />
                                                        <SearchOutlinedIcon className="icon" />
                                                    </div>
                                                </div>
                                                <div className="product__item__text">
                                                    <a href="/" className="add-cart">+ Add To Cart</a>
                                                </div>
                                            </Grid>

                                            <Grid className="product__item" item xs={12} sm={12}>
                                                <div className="product__item__pic set-bg" data-setbg="productItem1">
                                                    <img src={value.imageUrl} alt="" />
                                                    <span className="label">{value?.status}</span>
                                                </div>
                                                <div className="product__item__text">
                                                    <h6>{value.name}</h6>
                                                </div>
                                            </Grid>
                                            <div>
                                                <div className="rating">
                                                    <Rating key={value.name} product={value} />
                                                </div>
                                                <h5>${value.price}</h5>
                                                <div className="product__color__select">
                                                    <label for="pc-1" className>
                                                        <input type="radio" id="pc-1" />
                                                    </label>
                                                    <label for="pc-2" className="black">
                                                        <input type="radio" id="pc-2" />
                                                    </label>
                                                    <label for="pc-3" className="grey">
                                                        <input type="radio" id="pc-3" />
                                                    </label>
                                                </div>
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Container>

                </Container>
            </Container>

        </Container>
    )
}

export default BodyProductDetailPage;