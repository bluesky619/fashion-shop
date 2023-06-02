import { Container, Grid } from "@mui/material";
import './category.css'
import product from '../../../assets/image/product-sale.png'
const Category = () => {
    return (
        <Container className="categories" maxWidth>
            <Grid container className="categories__row">
                <Grid item xs={3} sm={3} className="categories__column1">
                    <Grid item xs={12} sm={12} className="categories__text">
                        <h2>
                            Clothing Hot
                            <br />
                            <span>Shoe Collection</span>
                            <br />
                            Accessories
                        </h2>
                    </Grid>
                </Grid>
                <Grid item xs={4} sm={4} className="categories__column2">
                    <Grid item xs={12} sm={12} className="categories__hot__deal">
                        <img src={product} alt="" />
                        <div class="hot__deal__sticker">
                            <span>Sale Of</span>
                            <h5>$29.99</h5>
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={4} sm={4} className="categories__column3">
                    <Grid item xs={12} sm={12} className="categories__deal__countdown">
                        <span>Deal of the week</span>
                        <h2>Multi-pocket Chest Bag Black</h2>
                        <div class="categories__deal__countdown__timer" id="countdown">
                            <div class="cd-item">
                                <span>3</span>
                                <p>Days</p>
                            </div>
                            <div class="cd-item">
                                <span>1</span>
                                <p>Hours</p>
                            </div>
                            <div class="cd-item">
                                <span>50</span>
                                <p>Minutes</p>
                            </div>
                            <div class="cd-item">
                                <span>18</span>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <a href="/products" type="button" class="primary-btn">Shop now</a>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Category;
