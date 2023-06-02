import { Container, Grid } from '@mui/material';
import './bodyBlogPage.css';
import img from '../../assets/image/breadcrumb-bg.jpg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { blogData } from '../../assets/product/blogdata'

const BodyBlogPage = () => {
    return (
        <Container maxWidth style={{ padding: '0' }}>
            <div className="breadcrumb__blog">
                <img src={img} alt="" />
                <h1>Our Blog</h1>
            </div>
            <Container className="blog__context">
                <Grid container>
                {
                    blogData.slice(0,9).map((element, index) => {
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
        </Container>
    )
}

export default BodyBlogPage;