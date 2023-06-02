import { Container, Grid } from "@mui/material";
import './instagram.css'
import insta_1 from '../../../assets/image/instagram/instagram-1.jpg'
import insta_2 from '../../../assets/image/instagram/instagram-2.jpg'
import insta_3 from '../../../assets/image/instagram/instagram-3.jpg'
import insta_4 from '../../../assets/image/instagram/instagram-4.jpg'
import insta_5 from '../../../assets/image/instagram/instagram-5.jpg'
import insta_6 from '../../../assets/image/instagram/instagram-6.jpg'


const Instagram = () => {
    return (
        <Container className="instagram">
            <Grid container>
                <Grid item xs={8} sm={8} style={{paddingLeft:"15px", paddingRight:"15px"}}>
                    <Grid item xs={12} sm={12} className="instagram__pic">
                        <img className="instagram__pic__item" src={insta_1} alt="insta__1" />
                        <img className="instagram__pic__item" src={insta_2} alt="insta__2" />
                        <img className="instagram__pic__item" src={insta_3} alt="insta__3" />
                        <img className="instagram__pic__item" src={insta_4} alt="insta__4" />
                        <img className="instagram__pic__item" src={insta_5} alt="insta__5" />
                        <img className="instagram__pic__item" src={insta_6} alt="insta__6" />
                    </Grid>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Grid item xs={12} sm={12} className="instagram__text">
                        <h2>Instagram</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                        <h3>#Male_Fashion</h3>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Instagram;