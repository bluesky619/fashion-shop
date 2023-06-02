import { Container, Grid, Link, FormControl, InputLabel, Input, InputAdornment, List, ListItem, ListItemText, TextField, Select, MenuItem, Rating } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { categories, branding, size, tags, colors } from '../../assets/product/data.productPage'
import { product } from '../../assets/product/product'
import './bodyProductPage.css'


const BodyProductPage = () => {

    return (
        <Container maxWidth style={{ padding: "0" }}>
            <Grid container className="breadcrumb__section">
                <Grid item xs={12} className="breadcrumb__content">
                    <h4>Shop</h4>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/material-ui/getting-started/installation/"
                        >
                            Shop
                        </Link>

                    </Breadcrumbs>
                </Grid>
            </Grid>
            <Container className="product__context">
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <div className="shop__sidebar">
                            <div className="shop__sidebar__search">
                                <FormControl
                                    sx={{ m: 1, width: "25ch" }}
                                    variant="outlined"

                                >
                                    <InputLabel
                                        style={{ color: "#bcbcbc", marginBottom: "6px" }}
                                    >
                                        Search...
                                    </InputLabel>
                                    <Input
                                        style={{ color: "#bcbcbc" }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <SearchOutlinedIcon style={{ color: "#bcbcbc" }} />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                            <div className="shop__sidebar__accordion">
                                <div className="card">
                                    <Grid container>
                                        <Grid item xs={12} className="card__heading">
                                            <p>CATEGORIES</p>
                                            <KeyboardArrowDownIcon className="toggle__button" />
                                        </Grid>

                                    </Grid>
                                    <List sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                        position: 'relative',
                                        overflow: 'auto',
                                        maxHeight: 160,
                                        '& ul': { padding: 0 },
                                    }}>
                                        {categories.map((value, index) => (
                                            <ListItem className="card__text">
                                                <ListItemText key={index}>{value.type} ({value.quantity})</ListItemText>
                                            </ListItem>
                                        ))}
                                    </List>
                                    <hr style={{ color: "#111111", marginTop: "30px", marginLeft: "16px" }} />
                                </div>
                                <div className="card">
                                    <Grid container>
                                        <Grid item xs={12} className="card__heading">
                                            <p>BRANDING</p>
                                            <KeyboardArrowDownIcon className="toggle__button" />
                                        </Grid>

                                    </Grid>
                                    <List sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                        position: 'relative',
                                        overflow: 'auto',
                                        maxHeight: 160,
                                        '& ul': { padding: 0 },
                                    }}>
                                        {branding.map((value, index) => (
                                            <ListItem className="card__text">
                                                <ListItemText key={index}>{value.name}</ListItemText>
                                            </ListItem>
                                        ))}
                                    </List>
                                    <hr style={{ color: "#111111", marginTop: "30px", marginLeft: "16px" }} />
                                </div>
                                <div className="card">
                                    <Grid container>
                                        <Grid item xs={12} className="card__heading">
                                            <p>FILTER PRICE</p>
                                            <KeyboardArrowDownIcon className="toggle__button" />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} className="filter__price__row">
                                        <Grid item xs={4}>
                                            Min:
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField className="outlined-basic" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} className="filter__price__row">
                                        <Grid item xs={4}>
                                            Max:
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField className="outlined-basic" variant="outlined" />
                                        </Grid>
                                    </Grid>


                                    <hr style={{ color: "#111111", marginTop: "30px", marginLeft: "16px" }} />
                                </div>
                                <div className="card">
                                    <Grid container>
                                        <Grid item xs={12} className="card__heading">
                                            <p>SIZE</p>
                                            <KeyboardArrowDownIcon className="toggle__button" />
                                        </Grid>

                                    </Grid>
                                    <div className="size__filter__button">
                                        {size.map((value, index) => (
                                            <a href="/" key={index}>{value}</a>
                                        ))}
                                    </div>
                                    <hr style={{ color: "#111111", marginTop: "30px", marginLeft: "16px" }} />
                                </div>
                                <div className="card">
                                    <Grid container>
                                        <Grid item xs={12} className="card__heading">
                                            <p>COLORS</p>
                                            <KeyboardArrowDownIcon className="toggle__button" />
                                        </Grid>

                                    </Grid>
                                    <Grid container className="colors__filter">
                                        {colors.map((value, index) => (
                                            <div className="colors__filter__button" key={index} style={{ backgroundColor: `${value}` }} />
                                        ))}
                                    </Grid>
                                    <hr style={{ color: "#111111", marginTop: "30px", marginLeft: "16px" }} />
                                </div>
                                <div className="card">
                                    <Grid container>
                                        <Grid item xs={12} className="card__heading">
                                            <p>TAGS</p>
                                            <KeyboardArrowDownIcon className="toggle__button" />
                                        </Grid>

                                    </Grid>
                                    <div className="tag__filter__button">
                                        {tags.map((value, index) => (
                                            <a href="/" key={index}>{value}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container className="shop__product__option">
                            <Grid item xs={6} className="shop__product__option__left">
                                <p>Showing 1–12 of 126 results</p>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container className="shop__product__option__right">
                                    <p>Sort by Price:</p>
                                    <FormControl className="shop__product__option__right__select" variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Price</InputLabel>
                                        <Select>
                                            <MenuItem value="all">Low To High</MenuItem>
                                            <MenuItem value="under100">0 - 100$</MenuItem>
                                            <MenuItem value="under200">100 - 200$</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>


                            </Grid>
                        </Grid>
                        <Grid container spacing={4}>
                            {
                                product.map((value, index) => {
                                    return (
                                        <Grid item xs={4} sm={4} key={index} className="mix-new-arrivals" onClick={(e) => console.log(e)}>
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
                        <Grid container style={{marginTop:"35px", justifyContent:"center"}}>
                            <Stack spacing={2}>
                                <Pagination count={21} />
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default BodyProductPage;