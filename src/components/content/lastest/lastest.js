import { Container, Grid } from "@mui/material";
import './lastest.css'
import blog_1 from '../../../assets/image/blog/blog-1.jpg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { blogData } from '../../../assets/product/blogdata'
const Lastest = () => {
    return (
        <Container className="lastest">
            <Grid container className="lastest__title">
                <Grid item xs={12} sm={12}>
                    <span>Lastest News</span>
                    <h2>Fashion New Trends</h2>
                </Grid>
            </Grid>
            <Grid container>
                {
                    blogData.slice(0,3).map((element, index) => {
                        return (
                            <Grid item xs={4} sm={4}>
                                <Grid item xs={12} sm={12} className="blog__item">
                                    <img className="blog__item__pic" src={element.imageUrl} alt="blog-1" />
                                    <Grid className="blog__item__text">
                                        <span>
                                            <CalendarMonthIcon />  {element.datePost}
                                        </span>
                                        <h5>{element.title}</h5>
                                        <a href={element.url}>
                                            READ MORE
                                        </a>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}
export default Lastest;