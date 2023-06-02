import { Grid, Popover, Button, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import logo from '../../assets/image/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './header.css'
import React from 'react'
import TemporaryDrawer from "./Drawer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
    const { numberProduct } = useSelector((productReducer) => productReducer.productReducer);

    return (
        <Container maxWidth style={{ padding: "0" }}>
            <Grid container className="mobile" >
                <Grid item xs={6} sm={6}>
                    <img src={logo} alt="" className="mobile-logo" />
                </Grid>
                <Grid item xs={6} sm={6} className="mobile-menu-icon" >
                    <TemporaryDrawer />
                </Grid>
            </Grid>
            <Grid container className='header'>
                <Grid item xs={6}>
                    <p style={{
                        color: "#ffffff",
                        fontSize: "15px",
                        lineHeight: "25px",
                        paddingTop: "10px",
                        margin: "0px 0px 0px 65px"
                    }}
                    >
                        Free shipping, 30-day return or refund guarantee.
                    </p>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "right", padding: "0 15px" }}>
                    <Grid item xs={12} style={{ padding: "10px 65px 10px 0px" }}>
                        <a href="/login" style={{
                            textDecoration: "none",
                            color: "#ffffff",
                            lineHeight: "25px",
                            marginRight: "55px",
                            letterSpacing: "2px",
                            fontSize: "15px"
                        }}
                        >
                            LOGIN
                        </a>
                    </Grid>
                </Grid>
            </Grid>
            <Container>
                <Grid container className="header2" style={{ height: "85px", backgroundColor: "#ffffff" }}>
                    <Grid item xs={3} style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>

                    </Grid>
                    <Grid item xs={6}>
                        <Grid item xs={12} style={{ paddingTop: "26px", display: "flex", justifyContent: "space-evenly", margin: "0 50px" }}>
                            <a className="active" href="/" style={{
                                textDecoration: "none",
                                fontSize: "18px",
                                color: "#111111",
                                fontWeight: "600",
                                padding: "3px 0"
                            }}>
                                Home
                            </a>
                            <a className="active" href="/products" style={{
                                textDecoration: "none",
                                fontSize: "18px",
                                color: "#111111",
                                fontWeight: "600",
                                padding: "3px 0"
                            }}>
                                Shop
                            </a>

                            <div class="dropdown">
                                <a className="dropbtn" href="/products" style={{
                                    textDecoration: "none",
                                    fontSize: "18px",
                                    color: "#111111",
                                    fontWeight: "600",
                                    padding: "3px 0"
                                }}>
                                    Pages
                                </a>
                                <div class="dropdown-content">
                                    <a href="/products/:product-id">Shop Details</a>
                                    <a href="/products/shopping-cart">Shopping Cart</a>
                                    <a href="/products/check-out">Check Out</a>
                                </div>
                            </div>
                            <a className="active" href="/blog-page" style={{
                                textDecoration: "none",
                                fontSize: "18px",
                                color: "#111111",
                                fontWeight: "600",
                                padding: "3px 0"
                            }}>
                                Blog
                            </a>

                            <a className="active" href="/contact-us" style={{
                                textDecoration: "none",
                                fontSize: "18px",
                                color: "#111111",
                                fontWeight: "600",
                                padding: "3px 0"
                            }}>
                                Contact
                            </a>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} className="header2-status">
                        <Grid item xs={12} style={{ paddingTop: "26px", display: "flex", justifyContent: "space-evenly", margin: "0 25px" }}>
                            <SearchIcon />
                            <FavoriteBorderIcon />
                            <div style={{ display: 'flex', flexDirection: "row" }}>
                                <ShoppingCartOutlinedIcon />
                                {numberProduct === 0 ? null :
                                    <div style={{
                                        background: "red", borderRadius: "50%", width: "20px", height: "20px", margin: "-10px 0 0 -10px",
                                        display: "flex", alignItems: "center", justifyContent: "center"
                                    }}>{numberProduct}</div>
                                }
                            </div>

                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </Container>
    )
}

export default Header;