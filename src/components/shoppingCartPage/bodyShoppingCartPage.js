import {
    Container,
    Breadcrumbs,
    Link,
    Grid,
    TextField,


} from "@mui/material";
import './bodyShoppingCartPage.css'

import AccessibleTable from "./tableShoppingCart";

const BodyShoppingCart = () => {
    return (
        <Container maxWidth style={{ padding: 0 }}>
            <Grid container className="breadcrumb__context">
                <Grid item xs={12}>
                    <div>
                        <h4>Shopping Cart</h4>
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
                                Shopping Cart
                            </Link>
                        </Breadcrumbs>
                    </div>

                </Grid>
            </Grid>
            <Container className="shopping__cart">
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <AccessibleTable />
                    </Grid>
                    <Grid item xs={4} style={{ padding: "35px 15px" }} className="discount__codes">
                        <h6>DISCOUNT CODES</h6>
                        <Grid container className="input__code">
                            <TextField id="input__code__discount" label="Input code here" variant="outlined" />
                            <a href="/">
                                apply
                            </a>
                        </Grid>
                        <Grid item xs={12} className="cart__total">
                            <h6>CART TOTAL</h6>
                            <Grid container>
                                <Grid item xs={6}>
                                    <p>Subtotal</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p style={{ color: "red", textAlign: "right" }}>$ 169.50</p>
                                </Grid>
                            </Grid>
                            <Grid container style={{marginBottom:"15px"}}>
                                <Grid item xs={6}>
                                    <p>Total</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p style={{ color: "red", textAlign: "right" }}>$ 169.50</p>
                                </Grid>
                            </Grid>
                            <a href="/">
                                PROCESS TO CHECKOUT
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default BodyShoppingCart;