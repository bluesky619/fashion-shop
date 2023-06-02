import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './drawer.css'
import { Container, Grid } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function TemporaryDrawer(props) {
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box className="box"
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 330 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} className="header-1">
                        <a href="/login"
                        >
                            LOGIN
                        </a>
                    </Grid>
                </Grid>
                <Grid container style={{ marginTop: "30px" }}>
                    <Grid item xs={12} style={{ display: "flex", justifyContent: "space-evenly", margin: "0 25px" }}>
                        <SearchIcon />
                        <FavoriteBorderIcon />
                        <ShoppingCartOutlinedIcon />
                    </Grid>
                </Grid>
            </Container>
            <Grid container style={{marginTop:"10px"}}>
                <Grid className='header-2' item xs={12} sm={12}>
                    <a href="/">
                        Home
                    </a>
                    <a href="/">
                        Shop
                    </a>
                    <a href="/">
                        Pages
                    </a>
                    <a href="/">
                        Blog
                    </a>
                    <a href="/">
                        Contacts
                    </a>
                    <p>
                    Free shipping, 30-day return or refund guarantee.
                    </p>
                </Grid>
                
            </Grid>
        </Box>
    );

    return (
        <div>
            {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuOutlinedIcon /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
