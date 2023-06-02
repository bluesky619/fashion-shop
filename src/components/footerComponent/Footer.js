import { Container, Grid, FormControl, InputLabel, Input } from "@mui/material";
import './footer.css'
import logo from '../../assets/image/footer-logo.png'
import payment from '../../assets/image/payment.png'
import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Footer = () => {
    return (
        <Container maxWidth className="footer">
            <Container>
                <Grid container>
                    <Grid item xs={3} sm={3} className="footer__about">
                        <div className="footer__logo">
                            <a href='/'>
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <p>
                            The customer is at the heart of our unique business model, which includes design.
                        </p>
                        <a href="/">
                            <img src={payment} alt="payment" />
                        </a>
                    </Grid>
                    <Grid item xs={2} sm={2} className="footer__widget" style={{ marginLeft: "89px" }}>
                        <h6>SHOPPING</h6>
                        <ul >
                            <li>
                                <a href="/">Clothing Store</a>
                            </li>
                            <li>
                                <a href="/">Trending Shoes</a>
                            </li>
                            <li>
                                <a href="/">Accessories</a>
                            </li>
                            <li>
                                <a href="/">Sale</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={2} sm={2} className="footer__widget">
                        <h6>SHOPPING</h6>
                        <ul >
                            <li>
                                <a href="/">Contact Us</a>
                            </li>
                            <li>
                                <a href="/">Payment Method</a>
                            </li>
                            <li>
                                <a href="/">Delivery</a>
                            </li>
                            <li>
                                <a href="/">Return & Exchange</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={3} sm={3} className="footer__widget" style={{ marginLeft: "89px" }}>
                        <h6>NEWLETTER</h6>
                        <div className="footer__newletter">
                            <p>
                                Be the first to know about new arrivals, look books, sales & promos!
                            </p>
                            <FormControl
                                sx={{ m: 1, width: "25ch", borderBottom: "2px solid #ffffff" }}
                                variant="standard"
                            >
                                <InputLabel
                                    htmlFor="standard-adornment-password"
                                    style={{ color: "#bcbcbc" }}
                                >
                                    Your email
                                </InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    style={{color:"#bcbcbc"}}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <EmailOutlinedIcon style={{color: "#bcbcbc"}} />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>

                    </Grid>
                </Grid>
                <Grid container className="copyright">
                    <p>
                    Copyright © 20232020 All rights reserved | This template is made with
                    &nbsp;<FavoriteBorderOutlinedIcon style={{color:"red"}} />
                    &nbsp;by 
                    &nbsp;<span style={{color:"red"}}>Colorlib</span>
                    </p>
                </Grid>
            </Container>
        </Container>
    )
}

export default Footer;