import {
    Container,
    Grid,
    Breadcrumbs,
    Link,
    TextField,
    Checkbox,


} from "@mui/material"
import "./bodyCheckOutPage.css"
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const BodyCheckOutPage = () => {
    return (
        <Container maxWidth style={{ padding: 0 }}>
            <Grid container className="breadcrumb__context">
                <Grid item xs={12}>
                    <div>
                        <h4>Check Out</h4>
                    </div>
                    <div className="breadcrumb__links">
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
                                href="/products/shoppingCart"
                            >
                                Check Out
                            </Link>
                        </Breadcrumbs>
                    </div>
                </Grid>
            </Grid>
            <Container style={{ padding: "100px 0" }}>
                <Grid container>
                    <Grid item xs={8} style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                        <p className="check__coupon">
                            <LocalOfferOutlinedIcon />
                            &nbsp; &nbsp;
                            Have a coupon?
                            &nbsp;
                            <a href="/">
                                Click here
                            </a>
                            &nbsp;to enter your code
                        </p>
                        <h6 className="checkout__title">BILLING DETAILS</h6>
                        <Grid container className="checkout__input">
                            <Grid item xs={6}>
                                <p>First Name<span>*</span></p>
                                <TextField className="text__field__1" label="First name..." variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <p>Last Name<span>*</span></p>
                                <TextField className="text__field__1" label="Last name..." variant="outlined" />
                            </Grid>
                        </Grid>
                        <Grid container className="checkout__input">
                            <Grid item xs={12}>
                                <p>Country<span>*</span></p>
                                <TextField className="text__field__2" label="Country..." variant="outlined" />
                            </Grid>
                        </Grid>
                        <Grid container className="checkout__input">
                            <Grid item xs={12}>
                                <p>Address<span>*</span></p>
                                <TextField className="text__field__2" label="Street address" variant="outlined" />
                                <TextField className="text__field__2" label="Apartment, suite, unite etc" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Grid container className="checkout__input">
                            <Grid item xs={12}>
                                <p>Town/City<span>*</span></p>
                                <TextField className="text__field__2" label="" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Grid container className="checkout__input">
                            <Grid item xs={12}>
                                <p>Country/State<span>*</span></p>
                                <TextField className="text__field__2" label="" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Grid container className="checkout__input">
                            <Grid item xs={12}>
                                <p>Postcode/ZIP<span>*</span></p>
                                <TextField className="text__field__2" label="" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Grid container className="checkout__input">
                            <Grid item xs={6}>
                                <p>Phone<span>*</span></p>
                                <TextField className="text__field__1" label="" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <p>Email<span>*</span></p>
                                <TextField className="text__field__1" label="" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Grid container className="checkout__create__acount">
                            <Checkbox {...label} />
                            <a href="/">Create an account?</a>
                            <p>
                                Create an account by entering the information below. If you are a returning customer please login at the top of the page
                            </p>
                        </Grid>
                        <Grid container className="checkout__input">
                            <Grid item xs={12}>
                                <p>Account Password<span>*</span></p>
                                <TextField className="text__field__2" label="" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Grid container className="checkout__create__acount">
                            <Checkbox {...label} style={{ color: "black" }} />
                            <a href="/">Note about your order, e.g, special noe for delivery</a>
                        </Grid>
                        <Grid container className="checkout__input">
                            <Grid item xs={12}>
                                <p>Order Notes<span>*</span></p>
                                <TextField className="text__field__2" label="Note about your order, e.g, special noe for delivery" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                        <Grid item xs={12} className="checkout__order">
                            <h4 className="order__title">YOUR ORDER</h4>
                            <div className="checkout__order__product">
                                <p style={{ marginBottom: '1rem' }}>Product <span>Total</span></p>
                                <p>01. Vanilla salted caramel <span>$ 300.0</span></p>
                                <p>02. German chocolate <span>$ 170.0</span></p>
                                <p>03. Sweet autumn <span>$ 170.0</span></p>
                                <p>04. Cluten free mini dozen <span>$ 170.0</span></p>
                            </div>
                            <div className="checkout__total__all">
                                <p>Subtotal <span>$750.99</span></p>
                                <p>Total <span>$750.99</span></p>
                            </div>
                            <Grid container className="checkout__create__acount">
                                <Checkbox {...label} />
                                <a href="/">Create an account?</a>
                                <p>
                                    Create an account by entering the information below. If you are a returning customer please login at the top of the page
                                </p>
                            </Grid>
                            <Grid container className="checkout__create__acount">
                                <Checkbox {...label} />
                                <a href="/">Check payment</a>
                            </Grid>
                            <Grid container className="checkout__create__acount">
                                <Checkbox {...label} />
                                <a href="/">Paypal</a>
                            </Grid>
                            
                            <a className="checkout__button" href="/">PLACE ORDER</a>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default BodyCheckOutPage;