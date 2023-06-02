import { Container, Grid } from "@mui/material";
import './banner.css'
import banner1 from '../../../assets/image/banner/banner-1.jpg'
import banner2 from '../../../assets/image/banner/banner-2.jpg'
import banner3 from '../../../assets/image/banner/banner-3.jpg'

const Banner = () => {
    return (
        <Container maxWidth style={{ padding: '100px 0px' }}>
            <Container style={{ margin: "0 135px", padding: "0 15px" }}>
                <Grid container style={{ display: "flex" }}>
                    <Grid item className="banner__1" xs={7} sm={7}>
                        <Grid item className="banner__item" xs={12} sm={12}>
                            <img className="banner__item__pic" src={banner1} alt="" />
                            <div className="banner__item__text">
                                <h2>Clothing Collections 2030</h2>
                                <a href="/">
                                    SHOP NOW
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item className="banner__2" xs={5} sm={5}>
                        <Grid className="banner__item banner__item--middle" item xs={12} sm={12}>
                            <img className="banner__item__pic" src={banner2} alt="" />
                            <div className="banner__item__text">
                                <h2>Accessories</h2>
                                <a href="/">
                                    SHOP NOW
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item className="banner__3" xs={7} sm={7}>
                        <Grid className="banner__item banner__item--last" item xs={12} sm={12}>
                            <img className="banner__item__pic" src={banner3} alt="" />
                            <div className="banner__item__text">
                            <h2>Shoes Spring 2030</h2>
                                <a href="/">
                                    SHOP NOW
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Banner;